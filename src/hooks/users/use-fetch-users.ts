import { useEffect } from 'react';
// react query
import { useQuery } from '@tanstack/react-query';
// hooks
import { useAppContext } from '@/hooks';
// api
import { fetchUsers } from '@/api';
// types
import { IUsersData } from '@/types';

// ----------------------------------------------------------------

/**
 * Custom React hook to fetch user data.
 *
 * This hook integrates with `@tanstack/react-query` to fetch data using the `fetchUsers` API function.
 * It then updates the application context with the fetched user data using the `onSetUsers` function from `useAppContext` hook.
 *
 * @param {string} url - The URL endpoint to fetch the users data from.
 *
 * @returns {Object} An object containing two properties:
 *   - isLoading: Boolean indicating if the query is in the "loading" state.
 *   - isError: Boolean indicating if the query encountered an error.
 *
 * @example
 * const { isLoading, isError } = useFetchUsers('/api/users');
 *
 * useEffect(() => {
 *   if (isError) {
 *     console.log('Error fetching users');
 *   }
 * }, [isError]);
 *
 * if (isLoading) {
 *   return <div>Loading...</div>;
 * }
 */
export const useFetchUsers = (url: string) => {
  const { isLoading, data, isError } = useQuery<IUsersData[]>({
    queryKey: [url],
    queryFn: fetchUsers
  });

  const { onSetUsers } = useAppContext();

  useEffect(() => {
    if (data) {
      onSetUsers(data);
    }
  }, [data, onSetUsers]);

  return {
    isLoading,
    isError
  };
};
