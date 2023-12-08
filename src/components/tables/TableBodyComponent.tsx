// mui
import TableBody from '@mui/material/TableBody';
// components
import {
  TableEmptyContent,
  TableSkeleton,
  TableErrorContent
} from '@/components';

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
  /**
   * Indicates whether there was an error during the data fetching process.
   * If true, it typically signifies that the fetching of roles data encountered an issue.
   */
  isError: boolean;
}

/**
 * TableBodyComponent to render table body with given rows or display loading/empty states.
 *
 * @param {ITableBodyComponent} props - The props for the component.
 * @returns The TableBody component with provided rows, or specific components for loading or empty states or error state.
 */
export const TableBodyComponent: React.FC<ITableBodyComponent> = ({
  isLoading,
  isError,
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

    if (isError) {
      return <TableErrorContent />;
    }

    return <>{rows}</>;
  };

  return <TableBody>{generateTableData()}</TableBody>;
};
