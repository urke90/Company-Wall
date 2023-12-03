import { useState } from 'react';
// react query
import { useQuery } from '@tanstack/react-query';
// util
// import { getRoles } from '@/config/table-data';
import { fetchRoles } from '@/api';

const FETCH_ROLES = 'FETCH_ROLES';

export const useRolesPagination = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: [FETCH_ROLES],
    queryFn: fetchRoles
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
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
    data,
    isError,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  };
};
