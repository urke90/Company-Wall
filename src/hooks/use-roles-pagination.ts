import { useEffect, useState } from 'react';
// react query
import { useQuery } from '@tanstack/react-query';
// util
import { fetchRoles } from '@/api';
import { IRolesData } from '@/config/table-data';
// hooks
import { useFetchRoles } from './use-fetch-roles';

// ----------------------------------------------------------------

export const useRolesPagination = (url: string) => {
  // const [roles, setRoles] = useState<IRolesData[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { isError, isLoading, roles } = useFetchRoles(url);

  // const { isLoading, data, isError } = useQuery({
  //   queryKey: [url],
  //   queryFn: fetchRoles
  // });

  // useEffect(() => {
  //   if (data) {
  //     setRoles(data);
  //   }
  // }, [data]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    isLoading,
    roles,
    isError,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  };
};
