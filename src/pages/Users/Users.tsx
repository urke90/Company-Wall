// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// pages
import { BasicUsersPaginationTable } from '@/pages';

// ------------------------------------------------

export const Users: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Users
      </Typography>
      <BasicUsersPaginationTable />
    </Box>
  );
};
