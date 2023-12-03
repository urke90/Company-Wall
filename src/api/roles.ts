import { IRolesData, getRoles } from '@/config/table-data';

export const fetchRoles = async () => {
  const roles = getRoles();
  return new Promise<IRolesData[]>((resolve) => {
    setTimeout(() => {
      resolve(roles);
    }, 2000);
  });
};
