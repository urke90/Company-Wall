import { axios } from './axios';

import { IRolesData } from '@/config';

export const fetchRoles = async () => {
  const response = await axios.get<IRolesData[]>('roles.json');

  return new Promise<IRolesData[]>((resolve) => {
    setTimeout(() => {
      resolve(response.data);
    }, 2000);
  });
};
