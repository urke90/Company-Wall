// mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------

/**
 * TableEmptyContent component to display a message when there's no data.
 *
 * This component renders a single table row with a cell displaying a "No Data!" message.
 * Ideal for use in table structures where data is expected but not available.
 *
 * @returns A TableRow component with a TableCell displaying "No Data!" message.
 */
export const TableEmptyContent: React.FC = () => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="h6" textAlign="center">
          No data!
        </Typography>
      </TableCell>
    </TableRow>
  );
};
