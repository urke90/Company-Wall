// mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
// components
import { LinkIconLeftButton, ICON_NAMES } from '@/components';
// types
import { IUsersData } from '@/types';

// ----------------------------------------------------------------

/**
 * UsersTableRows Component.
 *
 * This component renders a single row in a table for user data. It displays various user-related information
 * such as first name, last name, and role. Additionally, it includes an 'Edit' button with an icon,
 * which is linked to the user's ID for further actions.
 *
 * Props:
 * - firstName: The first name of the user.
 * - lastName: The last name of the user.
 * - id: The unique identifier of the user.
 * - role: The role assigned to the user.
 *
 * Each TableCell within the TableRow represents a piece of user data.
 * The final TableCell contains a LinkIconLeftButton which directs to a specific user ID for editing purposes.
 *
 * @param {IUsersData} props - The props conforming to the IUsersData interface.
 * @returns {JSX.Element} A TableRow element containing user data and an edit button.
 *
 * @example
 * <UsersTableRows
 *   firstName="John"
 *   lastName="Doe"
 *   id="123"
 *   role="Administrator"
 * />
 */

interface IUsersTableRowsData {
  /**
   * The unique identifier for the user.
   */
  id: string;
  /**
   * The first name of the user.
   */
  firstName: string;
  /**
   * The last name of the user.
   */
  lastName: string;
  /**
   * The email address of the user.
   */
  email?: string;
  /**
   * The role assigned to the user.
   */
  role: string;
  /**
   * An index signature to allow additional properties of type string or number.
   */
}

export const UsersTableRows: React.FC<IUsersTableRowsData> = ({
  firstName,
  lastName,
  id,
  role
}) => {
  return (
    <TableRow>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>
        <LinkIconLeftButton to={`${id}`} icon={ICON_NAMES.edit}>
          Edit
        </LinkIconLeftButton>
      </TableCell>
    </TableRow>
  );
};
