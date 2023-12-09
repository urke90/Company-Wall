// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { UsersForm, BasicCard, AlertDialog } from '@/components';
// hooks
import { useCreateUser } from '@/hooks';

// ----------------------------------------------------------------

export const UsersCreate: React.FC = () => {
  const { onAddRole, error, onClearError } = useCreateUser();
  return (
    <Box>
      <AlertDialog open={!!error} onClose={onClearError} title="Error!">
        {error}
      </AlertDialog>
      <Typography variant="h4" textAlign="center">
        Create New Role
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
          <UsersForm onSubmit={() => {}} />
        </BasicCard>
      </Box>
    </Box>
  );
};
