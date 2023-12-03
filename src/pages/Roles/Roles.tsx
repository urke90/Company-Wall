import { useEffect, useState } from 'react';
// mui
import Box from '@mui/material/Box';

// components
import { BasicPaginationTable, TableBodyComponent } from '@components/tables';
// config
import { ROLES_TABLE_HEAD_LABELS } from '@config/table-head-labels';

export const Roles: React.FC = () => {
  // const { data, isLoading, isError } = useFetchRoles(); // undefined

  // useEffect(() => {
  //   setRoles(data);
  // }, [data]);

  return (
    <Box>
      <BasicPaginationTable
        tableHeadLabels={ROLES_TABLE_HEAD_LABELS}
        // tableBodyComponent={<TableBodyComponent />}
      />
    </Box>
  );
};

// const TableBodyComponent = (isLoading, data, hasData) => {
//   return (
//     <TableBody>
//       <TableCell>Test</TableCell>
//     </TableBody>
//   );
// };

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
