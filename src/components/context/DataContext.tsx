import { createContext, useEffect, useState } from 'react';
// types config
import { IRolesData, IUsersData } from '@/config/table-data';

// ----------------------------------------------------------------

interface IDataContext {
  roles: IRolesData[];
  users: IUsersData[];
  onSetRoles: (roles: IRolesData[]) => void;
  onSetUsers: (users: IUsersData[]) => void;
}

export const DataContext = createContext<IDataContext>({
  roles: [],
  users: [],
  onSetRoles: () => {},
  onSetUsers: () => {}
});

export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [roles, setRoles] = useState<IRolesData[]>([]);
  const [users, setUsers] = useState<IUsersData[]>([]);
  const onSetRoles = (roles: IRolesData[]) => {
    setRoles(roles);
  };

  const onSetUsers = (users: IUsersData[]) => {
    setUsers(users);
  };

  const value = {
    roles,
    users,
    onSetRoles,
    onSetUsers
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
