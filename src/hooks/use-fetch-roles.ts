import { useEffect, useState } from 'react';
// react query
import { useQuery } from '@tanstack/react-query';
// util
import { fetchRoles } from '@/api';
import { IRolesData } from '@/config/table-data';

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
