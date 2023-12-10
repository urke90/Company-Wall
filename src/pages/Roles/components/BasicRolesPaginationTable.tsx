import { useMemo, useState } from 'react';
// mui
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
// import { visuallyHidden } from '@mui/utils';
// config
import { ROLES_TABLE_HEAD_LABELS } from '@config/table-head-labels';
// hooks
import { useAppContext, useRolesPagination } from '@/hooks';
// components
import {
  TableHeadCustom,
  TableBodyComponent,
  LinkIconLeftButton,
  ICON_NAMES
} from '@/components';
import { RolesTableRows } from '@/pages';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

type Order = 'asc' | 'desc';

export const BasicRolesPaginationTable: React.FC = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState<readonly number[]>([]);

  const {
    roles,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
    isLoading,
    isError
  } = useRolesPagination();

  // const handleRequestSort = (
  //   event: React.MouseEvent<unknown>,
  //   property: keyof Data
  // ) => {
  //   const isAsc = orderBy === property && order === 'asc';
  //   setOrder(isAsc ? 'desc' : 'asc');
  //   setOrderBy(property);
  // };

  const rolesRows = useMemo(
    () =>
      stableSort(roles, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, roles]
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
            <TableHeadCustom
              tableHeadLabels={ROLES_TABLE_HEAD_LABELS}
              numSelected={selected.length}
              order={order}
              // orderBy={orderBy}
              // onRequestSort={handleRequestSort}
              // rowCount={rows.length}
            />
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
          {roles !== undefined && roles.length > 0 && (
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
      </Paper>
    </Box>
  );
};
