import { useMemo } from 'react';
// mui
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// config
import { USERS_TABLE_HEAD_LABELS } from '@/config';
// hooks
import { useUsersPagination, useUsersTableSort } from '@/hooks';
// components
import {
  TableHeadCustom,
  LinkIconLeftButton,
  ICON_NAMES,
  TableBodyComponent
} from '@/components';
// pages specific components
import { UsersTableRows } from '@/pages';

// ----------------------------------------------------------------

/**
 * `BasicUsersPaginationTable` is a React functional component that renders a table
 * with user data, incorporating features like sorting and pagination.
 *
 * This component uses Material-UI components for UI rendering and custom hooks for managing
 * state and logic related to sorting (`useUsersTableSort`) and pagination (`useUsersPagination`).
 * It also uses the `TableHeadCustom` and `TableBodyComponent` for rendering the table's head
 * and body, respectively, along with `UsersTableRows` for individual row rendering.
 *
 * @component
 * @example
 * ```jsx
 * <BasicUsersPaginationTable />
 * ```
 *
 * @returns A component that displays a table with user data, equipped with sorting,
 * pagination, and actions like adding a new user.
 */
export const BasicUsersPaginationTable: React.FC = () => {
  const { stableSort, getComparator, order, orderBy } = useUsersTableSort();

  const {
    users,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
    isLoading,
    isError
  } = useUsersPagination();

  const usersRows = useMemo(
    () =>
      stableSort(users, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, users, getComparator, stableSort]
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            {users !== undefined && users.length > 0 && (
              <TableHeadCustom tableHeadLabels={USERS_TABLE_HEAD_LABELS} />
            )}
            <TableBodyComponent
              isLoading={isLoading}
              isError={isError}
              hasData={usersRows !== undefined && usersRows.length > 0}
              rows={usersRows?.map(({ id, firstName, lastName, role }) => (
                <UsersTableRows
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  role={role}
                />
              ))}
            />
          </Table>
        </TableContainer>
        {!isLoading && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 6 }}
          >
            <Box sx={{ width: '15rem' }}>
              <LinkIconLeftButton to="new" icon={ICON_NAMES.create}>
                Add User
              </LinkIconLeftButton>
            </Box>
            {users !== undefined && users.length > 10 && (
              <TablePagination
                rowsPerPageOptions={[2, 4, 6, 8, 10]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </Stack>
        )}
      </Paper>
    </Box>
  );
};
