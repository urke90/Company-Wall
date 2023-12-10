// api
import { fetchUsers, fetchRoles } from '@/api';
// types
import { IData } from '@/types';

// ----------------------------------------------------------------

/**
 * Asynchronous function to fetch both roles and users data.
 *
 * This function utilizes `Promise.all` to concurrently execute `fetchRoles` and `fetchUsers` API calls.
 * After both promises are resolved, it combines the results into a single object that includes
 * both users and roles data. This combined data is then returned.
 *
 * @returns {Promise<IData>} A promise that resolves to an object of type `IData`, containing arrays of roles and users data.
 *
 * @example
 * fetchRolesAndUsers()
 *   .then(data => {
 *     console.log('Fetched roles and users:', data);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching roles and users:', error);
 *   });
 */
export const fetchRolesAndUsers = async () => {
  const [roles, users] = await Promise.all([fetchRoles(), fetchUsers()]);

  const data: IData = {
    users,
    roles
  };

  return data;
};
