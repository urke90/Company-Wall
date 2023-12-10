// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { BasicRolesPaginationTable } from '@/pages';

// ------------------------------------------------

export const Roles: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Roles
      </Typography>
      <BasicRolesPaginationTable />
    </Box>
  );
};
