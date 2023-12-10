// mui
import TableCell from '@mui/material/TableCell/TableCell';
import TableHead from '@mui/material/TableHead/TableHead';
import TableRow from '@mui/material/TableRow/TableRow';
// config
import { ITableHeadLabels } from '@/config';

// ----------------------------------------------------------------
interface ITableHeadCustomProps {
  /**
   * Labels for table cells.
   */
  tableHeadLabels: ITableHeadLabels[];
}

/**
 * `TableHeadCustom` is a React functional component that renders a table header.
 * It uses Material-UI components to create a styled table head.
 *
 * The component takes a single prop, `tableHeadLabels`, which is an array of objects
 * defining the labels and identifiers for each column of the table.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {ITableHeadLabels[]} props.tableHeadLabels - An array of objects, where each object
 * represents a column header in the table. Each object should have an `id` to use as a key
 * and a `label` that will be displayed as the column header.
 *
 * @example
 * ```jsx
 * const headLabels = [
 *   { id: 'name', label: 'Name' },
 *   { id: 'age', label: 'Age' },
 *   // ... other labels
 * ];
 *
 * <TableHeadCustom tableHeadLabels={headLabels} />
 * ```
 *
 * @returns The `TableHead` component with a row of table cells, each containing a label from `tableHeadLabels`.
 */
export const TableHeadCustom: React.FC<ITableHeadCustomProps> = ({
  tableHeadLabels
}) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeadLabels.map(({ id, label }) => (
          <TableCell key={id}>{label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
