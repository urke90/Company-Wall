// axios
import { axios } from '@/api';
// types
import { IRolesData } from '@/types';

// ----------------------------------------------------------------

/**
 * Asynchronous function to fetch roles data.
 *
 * This function uses Axios to perform a GET request to retrieve roles data.
 * The data is expected to be in the format defined by the `IRolesData` type.
 * It simulates a delayed response by using a `setTimeout` to resolve the promise after 2 seconds.
 * This can be useful for testing loading states in the UI.
 *
 * @returns {Promise<IRolesData[]>} A promise that resolves to an array of roles data.
 *
 * @example
 * fetchRoles()
 *   .then(roles => {
 *     console.log('Fetched roles:', roles);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching roles:', error);
 *   });
 */
export const fetchRoles = async () => {
  const response = await axios.get<IRolesData[]>('roles.json');

  return new Promise<IRolesData[]>((resolve) => {
    setTimeout(() => {
      resolve(response.data);
    }, 2000);
  });
};
