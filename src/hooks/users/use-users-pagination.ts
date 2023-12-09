import { useState } from 'react';
// hooks
import { useAppContext } from '@/hooks';

// ----------------------------------------------------------------

/**
 * Custom React hook for managing user data pagination.
 *
 * This hook provides functionality to manage pagination state for a list of users.
 * It leverages the context from `useAppContext` to access the `users` data.
 * The hook maintains state for the current page and the number of rows per page.
 * It also provides handlers to change these states.
 *
 * @returns {Object} An object containing:
 *   - users: The array of user data from the context.
 *   - page: The current page number (zero-based).
 *   - rowsPerPage: The number of rows to display per page.
 *   - handleChangePage: A function to change the current page.
 *     Accepts a mouse event and the new page number as arguments.
 *   - handleChangeRowsPerPage: A function to change the number of rows per page.
 *     Accepts a change event from an input element.
 */
export const useUsersPagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { users } = useAppContext();

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
    users,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  };
};
