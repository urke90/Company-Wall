// mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------

/**
 * TableErrorContent Component.
 *
 * This component is designed to display an error message within a table structure.
 * It is typically used in scenarios where data fetching or processing encounters an error.
 * The component consists of a single TableRow and TableCell, with the TableCell spanning
 * the full width of the table.
 *
 * Inside the TableCell, it utilizes the Typography component from MUI to present an
 * error message in a stylized format. The message is centered and uses the 'h6' variant
 * for emphasis.
 *
 * @returns {JSX.Element} A TableRow element containing a stylized error message.
 *
 * @example
 * <TableErrorContent />
 */
export const TableErrorContent: React.FC = () => {
  return (
    <TableRow>
      <TableCell sx={{ width: 1 }}>
        <Typography variant="h6" textAlign="center">
          Ooops something went wrong!
        </Typography>
      </TableCell>
    </TableRow>
  );
};
