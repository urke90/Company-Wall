import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import TableCell from '@mui/material/TableCell/TableCell';
import TableHead from '@mui/material/TableHead/TableHead';
import TableRow from '@mui/material/TableRow/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel/TableSortLabel';
// config
import { ITableHeadLabels } from '@config/table-head-labels';

type Order = 'asc' | 'desc';

interface ITableHeadCustomProps {
  tableHeadLabels: ITableHeadLabels[];
  numSelected?: number;
  onRequestSort?: (
    event: React.MouseEvent<unknown>,
    property: keyof unknown
  ) => void;
  order?: Order;
  orderBy?: string;
  rowCount?: number;
}

export const TableHeadCustom: React.FC<ITableHeadCustomProps> = ({
  order,
  orderBy,
  numSelected,
  rowCount,
  tableHeadLabels
}) => {
  // const createSortHandler =
  //   (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
  //     onRequestSort(event, property);
  //   };

  return (
    <TableHead>
      <TableRow>
        {tableHeadLabels.map((headCell) => (
          <TableCell
            key={headCell.id}
            //   align={headCell.numeric ? 'right' : 'left'}
            //   padding={headCell.disablePadding ? 'none' : 'normal'}
            //   sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              // onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span">
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
