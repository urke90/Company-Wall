import { useMemo, useState } from 'react';
// mui
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
// import { visuallyHidden } from '@mui/utils';

// config
import { ITableHeadLabels } from '@config/table-head-labels';
import { FETCH_ROLES } from '@/libs';
// hooks
import { useRolesPagination } from '@/hooks';

// components
import { TableHeadCustom } from './components';

type Order = 'asc' | 'desc';

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

interface IBasicPaginationTableProps {
  tableHeadLabels: ITableHeadLabels[];
  tableBodyComponent?: React.ReactNode;
}

export const BasicPaginationTable: React.FC<IBasicPaginationTableProps> = ({
  tableHeadLabels,
  tableBodyComponent
}) => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState<readonly number[]>([]);

  const {
    roles,
    handleChangePage,
    handleChangeRowsPerPage,
    isLoading,
    page,
    rowsPerPage
  } = useRolesPagination(FETCH_ROLES);

  // const [page, setPage] = useState(0); PAGINATION
  // const [rowsPerPage, setRowsPerPage] = useState(5);  PAGINATION
  // const { page, onPageChange, roles, isError, isLoading, handlePageChange } =
  //   usePagination([FETCH_ROLES]);

  // const handleRequestSort = (
  //   event: React.MouseEvent<unknown>,
  //   property: keyof Data
  // ) => {
  //   const isAsc = orderBy === property && order === 'asc';
  //   setOrder(isAsc ? 'desc' : 'asc');
  //   setOrderBy(property);
  // };

  const visibleRows = useMemo(
    () =>
      stableSort(roles, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  /*
  PAGINATION

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
*/
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
              tableHeadLabels={tableHeadLabels}
              numSelected={selected.length}
              order={order}
              // orderBy={orderBy}
              // onRequestSort={handleRequestSort}
              // rowCount={rows.length}
            />
            {tableBodyComponent}
          </Table>
        </TableContainer>
        {!isLoading && roles !== undefined && roles.length > 0 && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={roles.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </Box>
  );
};
