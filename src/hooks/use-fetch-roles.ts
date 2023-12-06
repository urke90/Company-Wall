import { useEffect, useState } from 'react';
// react query
import { useQuery } from '@tanstack/react-query';
// hooks
import { useDataContext } from './use-data-context';
// api
import { fetchRoles } from '@/api';
// config
import { IRolesData } from '@/config/table-data';

// ----------------------------------------------------------------

/**
 * Custom hook for fetching roles data using React Query.
 *
 * This hook integrates with `@tanstack/react-query` for fetching data and managing the state
 * of roles data within a React application. It uses the `useQuery` hook to fetch data
 * from a specified URL, and then utilizes local state to hold the fetched data.
 * Additionally, it interacts with a data context (via `useDataContext`) for broader state management.
 *
 * @param {string} url - The URL endpoint from which roles data is fetched.
 * @returns {object} An object with the following properties:
 * - `isLoading` (boolean): Indicates whether the roles data is currently being loaded.
 * - `roles` (IRolesData[]): An array of roles data, adhering to the IRolesData interface structure.
 * - `isError` (boolean): Flag to indicate if there was an error during data fetching.
 *
 * The hook triggers a side-effect using `useEffect` to update the local state and
 * the context state with the fetched data once it's available.
 */
export const useFetchRoles = (url: string) => {
  const [roles, setRoles] = useState<IRolesData[]>([]);
  const { isLoading, data, isError } = useQuery({
    queryKey: [url],
    queryFn: fetchRoles
  });
  const { onSetRoles } = useDataContext();

  useEffect(() => {
    if (data) {
      setRoles(data);
      onSetRoles(data);
    }
  }, [data, onSetRoles]);

  return {
    isLoading,
    roles,
    isError
  };
};
