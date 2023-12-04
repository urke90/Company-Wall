import { useEffect, useState } from 'react';
// mui
import Box from '@mui/material/Box';
// components
import { BasicPaginationTable } from '@components/tables';
import { RolesTableContent } from './components';
// config
import { ROLES_TABLE_HEAD_LABELS } from '@config/table-head-labels';
// hooks
import { useRolesPagination } from '@/hooks';
// config
import { FETCH_ROLES } from '@/libs';
import { IRolesData } from '@/config/table-data';
import { TablePagination, Typography } from '@mui/material';

// ------------------------------------------------

export const Roles: React.FC = () => {
  // const [roles, setRoles] = useState<IRolesData[] | undefined>([]);
  const {
    roles,
    isLoading,
    handleChangePage,
    handleChangeRowsPerPage,
    rowsPerPage,
    page
  } = useRolesPagination(FETCH_ROLES);

  // useEffect(() => {
  //   console.log('data', data);
  //   setRoles(data);
  // }, [data]);

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Roles
      </Typography>
      <BasicPaginationTable
        tableHeadLabels={ROLES_TABLE_HEAD_LABELS}
        tableBodyComponent={
          <RolesTableContent isLoading={isLoading} roles={roles} />
        }
      />
      {/* {!isLoading && data !== undefined && data.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[1, 3, 5]}
          component="div"
          count={data.length}
          rowsPerPage={1}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )} */}
    </Box>
  );
};

// export const usePagination = (url: string) => {
//   const { data } = useFetch(url);

//   const [roles, setRoles] = useState<IRolesData[]>([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(0);

//   const handleChangePage = (evt: any, page) => {
//     setPage(page);
//   };

//   useEffect(() => {
//     setRoles(data);
//   }, [data]);

//   return {
//     page,
//     roles,
//     handleChangePage,
//     roles
//   };
// };
