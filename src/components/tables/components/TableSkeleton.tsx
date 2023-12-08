// mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';

// ----------------------------------------------------------------

interface ITableSekeltonProps extends SkeletonProps {
  /**
   * The number of rows the skeleton should have.
   * Optional; defaults to 10.
   */
  rowCount?: number;
  /**
   * The number of rows the skeleton should have.
   * Optional; defaults to 10.
   */
  cellCount?: number;
}

export const TableSkeleton: React.FC<ITableSekeltonProps> = ({
  rowCount = 10,
  cellCount = 4,
  ...rest
}) => {
  const cells = [...Array(cellCount)].map((_, index) => (
    <TableCell key={index} sx={{ border: 'none', p: 1 }}>
      <Skeleton width="100%" {...rest} />
    </TableCell>
  ));

  const rows = [...Array(rowCount)].map((_, index) => (
    <TableRow key={index} sx={{ width: 1 }}>
      {cells}
    </TableRow>
  ));
  return <>{rows}</>;
};
