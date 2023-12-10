// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { UsersForm, BasicCard } from '@/components';
// hooks
import { useCreateUser } from '@/hooks';

// ----------------------------------------------------------------

/**
 * The `UsersCreate` component is a functional component that renders a user creation form.
 * It uses Material-UI components for layout and styling. The main feature of this component
 * is the `UsersForm` component, which is used for adding new users or updating existing ones. This form is contained
 * within a `BasicCard` component for better visual presentation.
 *
 * The component utilizes the `useCreateUser` hook to access the `onAddUser` function
 * for handling new user submissions and to get the current list of roles.
 *
 * @component
 * @example
 * return (
 *   <UsersCreate />
 * )
 */
export const UsersCreate: React.FC = () => {
  const { onAddUser, roles } = useCreateUser();
  return (
    <Box>
      <Typography variant="h4" textAlign="center">
        Create New User
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
          <UsersForm onSubmit={onAddUser} roles={roles} />
        </BasicCard>
      </Box>
    </Box>
  );
};
