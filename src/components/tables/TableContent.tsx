// components
import { TableBodyComponent } from '@/components';

// ----------------------------------------------------------------

interface ITableContentProps {
  /**
   * Indicates whether the roles data is still loading.
   */
  isLoading: boolean;
  /**
   * Array of roles data to be displayed in the table.
   * Each role includes an id, role name, and description.
   * Can be undefined if data is not yet loaded or unavailable.
   */
  rows: JSX.Element[] | undefined;
  /**
   * Indicates whether there was an error during the data fetching process.
   * If true, it typically signifies that the fetching of roles data encountered an issue.
   */
  isError: boolean;
}
/**
 * TableContent component for rendering table content with dynamic data.
 *
 * This component is responsible for displaying table content based on the provided roles data.
 * It utilizes the TableBodyComponent to render the table body.
 * The component handles different states such as loading, error, and the presence of data.
 *
 * Props:
 * - isLoading: Indicates whether the data is still loading.
 * - isError: Indicates whether there was an error in fetching data.
 * - rows: An array of JSX elements representing each row of the table. Each element corresponds to a role.
 *         Can be undefined if the data is not yet loaded or unavailable.
 *
 * @param {ITableContentProps} props - The props object containing isLoading, isError, and rows.
 * @returns {JSX.Element} The rendered TableBodyComponent with roles data, loading state, or error state.
 *
 * @example
 * <TableContent
 *   isLoading={dataLoading}
 *   isError={dataError}
 *   rows={dataRows}
 * />
 */
export const TableContent: React.FC<ITableContentProps> = ({
  isLoading,
  isError,
  rows
}) => {
  return (
    <TableBodyComponent
      isError={isError}
      isLoading={isLoading}
      rows={rows}
      hasData={rows !== undefined && rows.length > 0}
    />
  );
};
