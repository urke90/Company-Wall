// axios
import { axios } from './axios';
// types
import { IRolesData } from '@/types';

// ----------------------------------------------------------------

export const fetchRoles = async () => {
  const response = await axios.get<IRolesData[]>('roles.json');

  return new Promise<IRolesData[]>((resolve) => {
    setTimeout(() => {
      resolve(response.data);
    }, 2000);
  });
};
