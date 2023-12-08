// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { BasicRolesPaginationTable } from '@/pages';
import { LinkIconLeftButton, ICON_NAMES } from '@/components';

// ------------------------------------------------

export const Roles: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Roles
      </Typography>
      <BasicRolesPaginationTable />
      <Box sx={{ mb: 13, width: '15rem' }}>
        <LinkIconLeftButton to="new" icon={ICON_NAMES.create}>
          Add Role
        </LinkIconLeftButton>
      </Box>
    </Box>
  );
};
