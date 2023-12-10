// react router
import { useParams } from 'react-router-dom';
// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { BasicCard, UsersForm, DataNotFound } from '@/components';
// hooks
import { useUpdateUser } from '@/hooks';

// ----------------------------------------------------------------

/**
 * The `UsersEdit` component is a functional component used for editing user details.
 * It utilizes React Router's `useParams` to retrieve the user ID from the URL parameters.
 * Material-UI components are used for layout and styling.
 *
 * This component uses the `useUpdateUser` hook to access the list of users, the `onUpdateUser` function
 * for handling user updates, and the list of roles. It displays a `UsersForm` pre-filled with the existing
 * user's data for editing. In case the user is not found, it shows a `DataNotFound` component.
 *
 * @component
 * @example
 * return (
 *   <UsersEdit />
 * )
 */
export const UsersEdit: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const { users, onUpdateUser, roles } = useUpdateUser();

  const existingUser = users.find((user) => user.id === userId);

  return (
    <Box>
      <Typography variant="h4" textAlign="center">
        Edit User
      </Typography>
      <Box
        sx={{
          mt: 5,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <BasicCard
          sx={{
            p: 2,
            width: { sm: 600 }
          }}
        >
          {existingUser ? (
            <UsersForm
              onSubmit={onUpdateUser}
              user={existingUser}
              roles={roles}
            />
          ) : (
            <DataNotFound
              linkTitle="Users"
              linkTo="/users"
              title="User not found!"
            />
          )}
        </BasicCard>
      </Box>
    </Box>
  );
};
