// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { UsersForm, BasicCard } from '@/components';
// hooks
import { useCreateUser } from '@/hooks';

// ----------------------------------------------------------------

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
