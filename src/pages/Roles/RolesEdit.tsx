// react router
import { useParams } from 'react-router-dom';
// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { BasicCard, RolesForm } from '@/components';

// ----------------------------------------------------------------

export const RolesEdit: React.FC = () => {
  const { roleId } = useParams<{ roleId: string }>();

  console.log('roleId', roleId);

  return (
    <Box>
      <Typography variant="h4" textAlign="center">
        Edit Role
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
