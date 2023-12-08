// react router
import { useParams } from 'react-router-dom';
// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { BasicCard, RolesForm, NotFoundContent } from '@/components';
// hooks
import { useUpdateRole } from '@/hooks/roles/use-update-role';

// ----------------------------------------------------------------

export const RolesEdit: React.FC = () => {
  const { roleId } = useParams<{ roleId: string }>();
  const { roles, onUpdateRole } = useUpdateRole();

  console.log('roleId', roleId);

  const existingRole = roles.find((role) => role.id === roleId);

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
          {existingRole ? (
            <RolesForm onSubmit={() => {}} />
          ) : (
            <NotFoundContent>
              <Typography variant="h5" textAlign="center">
                Role Not Found!
              </Typography>
            </NotFoundContent>
          )}
        </BasicCard>
      </Box>
    </Box>
  );
};
