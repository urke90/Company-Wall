// mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
// components
import {
  TableBodyComponent,
  LinkIconLeftButton,
  ICON_NAMES
} from '@/components';
// types
import { IRolesData } from '@/config';

// ----------------------------------------------------------------

interface IRolesTableContentProps {
  /**
   * Indicates whether the roles data is still loading.
   */
  isLoading: boolean;
  /**
   * Array of roles data to be displayed in the table.
   * Each role includes an id, role name, and description.
   * Can be undefined if data is not yet loaded or unavailable.
   */
  roles: IRolesData[] | undefined;
}

/**
 * RolesTableContent component to render a table body with roles data.
 *
 * This component creates rows for each role entry and passes them to the TableBodyComponent.
 * Displays loading or empty states based on the isLoading flag and roles array.
 *
 * @param {IRolesTableContentProps} props - The props for the component.
 * @returns The TableBodyComponent with roles data or appropriate loading/empty states.
 */
export const RolesTableContent: React.FC<IRolesTableContentProps> = ({
  isLoading,
  roles
}) => {
  const rows = roles?.map(({ description, id, roleName }) => (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{roleName}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>
        <LinkIconLeftButton to={`${id}`} icon={ICON_NAMES.edit}>
          Edit
        </LinkIconLeftButton>
      </TableCell>
    </TableRow>
  ));

  return (
    <TableBodyComponent
      isLoading={isLoading}
      rows={rows}
      hasData={roles !== undefined && roles.length > 0}
    />
  );
};
