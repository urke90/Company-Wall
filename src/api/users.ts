// axios
import { axios } from '@/api';
// types
import { IUsersData } from '@/types';

// ----------------------------------------------------------------

/**
 * Asynchronous function to fetch users data.
 *
 * This function leverages Axios to perform a GET request to retrieve users data.
 * The data fetched is expected to conform to the structure defined by the `IUsersData` type.
 * It includes a simulated delay of 2 seconds before resolving the promise with the fetched data.
 * This delay can be helpful for demonstrating loading states in user interfaces.
 *
 * @returns {Promise<IUsersData[]>} A promise that resolves with an array of users data.
 *
 * @example
 * fetchUsers()
 *   .then(users => {
 *     console.log('Fetched users:', users);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching users:', error);
 *   });
 */
export const fetchUsers = async () => {
  const response = await axios.get<IUsersData[]>('users.json');

  return new Promise<IUsersData[]>((resolve) => {
    setTimeout(() => {
      resolve(response.data);
    }, 2000);
  });
};
