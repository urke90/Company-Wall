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
}

export const TableSkeleton: React.FC<ITableSekeltonProps> = ({
  rowCount = 10,
  ...rest
}) => {
  const rows = [...Array(rowCount)].map((_, index) => (
    <TableRow key={index}>
      <TableCell sx={{ border: 'none', p: 1 }}>
        <Skeleton width="100%" {...rest} />
      </TableCell>
    </TableRow>
  ));
  return <>{rows}</>;
};
