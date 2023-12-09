// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { BasicUsersPaginationTable } from '@/pages';
import { LinkIconLeftButton, ICON_NAMES } from '@/components';

// ------------------------------------------------

export const Users: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Users
      </Typography>
      <BasicUsersPaginationTable />
      <Box sx={{ mb: 13, width: '15rem' }}>
        <LinkIconLeftButton to="new" icon={ICON_NAMES.create}>
          Add User
        </LinkIconLeftButton>
      </Box>
    </Box>
  );
};
