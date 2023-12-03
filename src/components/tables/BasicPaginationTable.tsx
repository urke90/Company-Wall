import { useState } from 'react';
// mui
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
// import { visuallyHidden } from '@mui/utils';

// config
import { ITableHeadLabels } from '@config/table-head-labels';

// components
import { TableHeadCustom } from './components';

type Order = 'asc' | 'desc';

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
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={roles.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />  */}
      </Paper>
    </Box>
  );
};
