import { useEffect, useState } from 'react';
// react query
import { useQuery } from '@tanstack/react-query';
// util
import { fetchRoles } from '@/api';
import { IRolesData } from '@/config/table-data';

/**
 * Custom hook for fetching roles data.
 *
 * This hook uses the `useQuery` hook from @tanstack/react-query to fetch data
 * from the provided URL. It manages the roles data state and updates it once
 * the data is fetched successfully.
 *
 * @param {string} url - The URL to fetch roles data from.
 * @returns {object} An object containing the following properties:
 * - `isLoading` (boolean): Indicates if the data is currently being loaded.
 * - `roles` (IRolesData[]): An array of roles data, conforms to the IRolesData interface.
 * - `isError` (boolean): Indicates if there was an error during the data fetching process.
 */
export const useFetchRoles = (url: string) => {
  const [roles, setRoles] = useState<IRolesData[]>([]);
  const { isLoading, data, isError } = useQuery({
    queryKey: [url],
    queryFn: fetchRoles
  });

  useEffect(() => {
    if (data) {
      setRoles(data);
    }
  }, [data]);

  return {
    isLoading,
    roles,
    isError
  };
};
