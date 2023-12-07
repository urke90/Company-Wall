import { createContext, useEffect, useState } from 'react';
// types
import { IRolesData, IUsersData } from '@/types';

// ----------------------------------------------------------------

interface IAppContext {
  roles: IRolesData[];
  onAddRole: (newRole: IRolesData) => void;
  onUpdateRole: (role: IRolesData) => void;
  users: IUsersData[];
  onSetRoles: (roles: IRolesData[]) => void;
  onSetUsers: (users: IUsersData[]) => void;
  error: string | null;
}

export const AppContext = createContext<IAppContext>({
  roles: [],
  onSetRoles: () => {},
  onAddRole: () => {},
  onUpdateRole: () => {},
  users: [],
  onSetUsers: () => {},
  error: null
});

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [roles, setRoles] = useState<IRolesData[]>([]);
  const [users, setUsers] = useState<IUsersData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('roles', roles);
  }, [roles]);

  const onAddRole = (newRole: IRolesData) => {
    setRoles((prevRoles) => {
      const roleExists = prevRoles.some(
        (role) => role.roleName === newRole.roleName
      );

      if (roleExists) {
        setError(`${newRole.roleName} already exists!`);
        return prevRoles;
      }

      return [...prevRoles, newRole];
    });
  };

  const onUpdateRole = (role: IRolesData) => {
    setRoles((prevRoles) =>
      prevRoles.map((prevRole) => {
        if (prevRole.id === role.id) {
          return {
            ...prevRole,
            description: role.description,
            roleName: role.roleName
          };
        }
        return prevRole;
      })
    );
  };

  const onSetRoles = (roles: IRolesData[]) => {
    setRoles(roles);
  };

  const onSetUsers = (users: IUsersData[]) => {
    setUsers(users);
  };

  const value = {
    roles,
    onSetRoles,
    onAddRole,
    onUpdateRole,
    users,
    onSetUsers,
    error
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
