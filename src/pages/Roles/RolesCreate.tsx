// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { RolesForm, BasicCard } from '@/components';
// hooks
import { useCreateRole } from '@/hooks';

// ----------------------------------------------------------------

export const RolesCreate: React.FC = () => {
  const { onAddRole, error } = useCreateRole();

  return (
    <Box>
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
          <RolesForm onSubmit={onAddRole} />
        </BasicCard>
      </Box>
    </Box>
  );
};
