// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { RolesForm, BasicCard } from '@/components';
// ----------------------------------------------------------------

export const RolesCreate: React.FC = () => {
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
          <RolesForm />
        </BasicCard>
      </Box>
    </Box>
  );
};
