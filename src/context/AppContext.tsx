import { createContext, useEffect, useState, useCallback } from 'react';
// react query
import { useQuery } from '@tanstack/react-query';
// types
import { IData, IRolesData, IUsersData } from '@/types';
// api
import { fetchRolesAndUsers } from '@/api';
// libs
import { FETCH_DATA } from '@/libs';

// ----------------------------------------------------------------

interface IAppContext {
  roles: IRolesData[];
  onAddRole: (newRole: IRolesData) => void;
  onUpdateRole: (role: IRolesData) => void;
  users: IUsersData[];
  onAddUser: (user: IUsersData) => void;
  onUpdateUser: (user: IUsersData) => void;
  error: string | null;
  onClearError: () => void;
  isLoading: boolean;
  isError: boolean;
}

export const AppContext = createContext<IAppContext>({
  roles: [],
  onAddRole: () => {},
  onUpdateRole: () => {},
  users: [],
  onAddUser: () => {},
  onUpdateUser: () => {},
  error: null,
  onClearError: () => {},
  isLoading: true,
  isError: false
});

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { isLoading, data, isError } = useQuery<IData>({
    queryKey: [FETCH_DATA],
    queryFn: fetchRolesAndUsers,
    staleTime: Infinity
  });

  const [roles, setRoles] = useState<IRolesData[]>([]);
  const [users, setUsers] = useState<IUsersData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data && roles.length === 0) {
      setRoles(data.roles);
    }
    if (data && users.length === 0) {
      setUsers(data.users);
    }
  }, [data, roles, users]);

  // ROLES ACTIONS
  const onAddRole = useCallback((newRole: IRolesData) => {
    setRoles((prevRoles) => {
      const roleExists = prevRoles.some(
        (role) => role.roleName === newRole.roleName
      );

      if (roleExists) {
        setError(`Role with name ${newRole.roleName} already exists!`);
        return prevRoles;
      }

      return [...prevRoles, newRole];
    });
  }, []);

  const onUpdateRole = useCallback((role: IRolesData) => {
    setRoles((prevRoles) => {
      const updatedRoles = prevRoles.map((prevRole) => {
        if (prevRole.id === role.id) {
          console.log('daaaa');
          return {
            ...prevRole,
            description: role.description,
            roleName: role.roleName
          };
        }
        return prevRole;
      });

      return updatedRoles;
    });
  }, []);

  // USERS ACTIONS
  const onAddUser = useCallback((newUser: IUsersData) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }, []);

  const onUpdateUser = useCallback((user: IUsersData) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((prevUser) => {
        const { firstName, lastName, role } = user;
        if (prevUser.id === user.id) {
          return {
            ...prevUser,
            firstName,
            lastName,
            role
          };
        }
        return prevUser;
      });
      return updatedUsers;
    });
  }, []);

  // error handling
  const onClearError = useCallback(() => {
    setError(null);
  }, []);

  const value = {
    roles,
    onAddRole,
    onUpdateRole,
    users,
    onAddUser,
    onUpdateUser,
    onClearError,
    error,
    isLoading,
    isError
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
