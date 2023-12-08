// mui
import TableBody from '@mui/material/TableBody';
// components
import { TableEmptyContent, TableSkeleton } from '@/components';

// ----------------------------------------------------------------
interface ITableBodyComponent {
  /**
   * Indicates whether the data is still loading.
   */
  isLoading: boolean;
  /**
   * The rows to be rendered inside the table body.
   * Expected to be ReactNode elements.
   */
  rows: React.ReactNode;
  /**
   * Flag to indicate if there is data available to display.
   */
  hasData: boolean;
}

/**
 * TableBodyComponent to render table body with given rows or display loading/empty states.
 *
 * @param {ITableBodyComponent} props - The props for the component.
 * @returns The TableBody component with provided rows, or specific components for loading or empty states.
 */
export const TableBodyComponent: React.FC<ITableBodyComponent> = ({
  isLoading,
  rows,
  hasData
}) => {
  const generateTableData = () => {
    if (isLoading) {
      return <TableSkeleton />;
    }

    if (!hasData) {
      return <TableEmptyContent />;
    }

    return <>{rows}</>;
  };

  return <TableBody>{generateTableData()}</TableBody>;
};
