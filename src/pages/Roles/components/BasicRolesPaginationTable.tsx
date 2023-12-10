import { useMemo, useState } from 'react';
// mui
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// config
import { ROLES_TABLE_HEAD_LABELS } from '@config/table-head-labels';
// hooks
import { useRolesPagination, useRolesTableSort } from '@/hooks';
// components
import {
  TableHeadCustom,
  TableBodyComponent,
  LinkIconLeftButton,
  ICON_NAMES
} from '@/components';
import { RolesTableRows } from '@/pages';

// ----------------------------------------------------------------

export const BasicRolesPaginationTable: React.FC = () => {
  const { getComparator, order, orderBy, stableSort } = useRolesTableSort();

  const {
    roles,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
    isLoading,
    isError
  } = useRolesPagination();

  const rolesRows = useMemo(
    () =>
      stableSort(roles, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),

    [order, orderBy, page, rowsPerPage, roles, getComparator, stableSort]
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
            <TableHeadCustom tableHeadLabels={ROLES_TABLE_HEAD_LABELS} />
            <TableBodyComponent
              isLoading={isLoading}
              isError={isError}
              hasData={rolesRows !== undefined && rolesRows.length > 0}
              rows={rolesRows?.map(({ description, id, roleName }) => (
                <RolesTableRows
                  key={id}
                  id={id}
                  description={description}
                  roleName={roleName}
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
                Add Role
              </LinkIconLeftButton>
            </Box>
            {roles !== undefined && roles.length > 10 && (
              <TablePagination
                rowsPerPageOptions={[2, 4, 6, 8, 10]}
                component="div"
                count={roles.length}
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
