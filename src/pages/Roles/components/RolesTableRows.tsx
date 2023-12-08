// mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
// components
import { LinkIconLeftButton, ICON_NAMES } from '@/components';
// types
import { IRolesData } from '@/types';

// ----------------------------------------------------------------

/**
 * RolesTableRows Component.
 *
 * This component is used to render a single row in a table, representing a specific role.
 * It displays the role name, its description, and includes an 'Edit' button with an icon.
 * The 'Edit' button is linked to the role's unique identifier for modification purposes.
 *
 * Props:
 * - description: The description of the role.
 * - id: The unique identifier of the role.
 * - roleName: The name of the role.
 *
 * The component comprises several TableCells within a TableRow. Each TableCell
 * displays a piece of role data. The final TableCell contains a LinkIconLeftButton
 * that directs to the role's ID for editing.
 *
 * @param {IRolesData} props - The props conforming to the IRolesData interface.
 * @returns {JSX.Element} A TableRow element containing role data and an edit button.
 *
 * @example
 * <RolesTableRows
 *   roleName="Administrator"
 *   description="Has full access to all settings"
 *   id="1"
 * />
 */
export const RolesTableRows: React.FC<IRolesData> = ({
  description,
  id,
  roleName
}) => {
  return (
    <TableRow key={id}>
      <TableCell>{roleName}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>
        <LinkIconLeftButton to={`${id}`} icon={ICON_NAMES.edit}>
          Edit
        </LinkIconLeftButton>
      </TableCell>
    </TableRow>
  );
};
