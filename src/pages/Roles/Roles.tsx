// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { BasicPaginationTable } from './components';
import { Button } from '@mui/material';

// ------------------------------------------------

export const Roles: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Roles
      </Typography>
      <BasicPaginationTable />
      <Box sx={{ mb: 3 }}>
        {/* TODO create link button add new route for create and update roles*/}
        <Button>Create Role</Button>
      </Box>
    </Box>
  );
};
