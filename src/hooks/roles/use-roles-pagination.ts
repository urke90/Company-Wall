import { useState } from 'react';
// hooks
import { useAppContext } from '../use-app-context';

// ----------------------------------------------------------------

/**
 * Custom hook for managing pagination of roles data.
 *
 * This hook builds upon `useFetchRoles` to fetch roles data and adds pagination capabilities.
 * It maintains the current page and the number of rows per page as local state. The hook provides
 * methods to change the current page and adjust the number of rows displayed per page.
 *
 * @param {string} url - The URL endpoint from which roles data is fetched.
 * @returns {object} An object with the following properties:
 * - `isLoading` (boolean): Indicates whether the roles data is currently being loaded.
 * - `roles` (IRolesData[]): An array of roles data.
 * - `isError` (boolean): Flag to indicate if there was an error during data fetching.
 * - `page` (number): The current page number in the pagination.
 * - `rowsPerPage` (number): The number of rows to display per page.
 * - `handleChangePage` (function): A method to change the current page. It takes a new page number as an argument.
 * - `handleChangeRowsPerPage` (function): A method to change the number of rows per page.
 *
 * This hook is useful for scenarios where roles data needs to be displayed in a paginated table or list.
 * It simplifies the state management related to pagination and integrates seamlessly with data fetching logic.
 */
export const useRolesPagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { roles } = useAppContext();

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
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
    roles,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  };
};
