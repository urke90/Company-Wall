// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// pages
import { BasicUsersPaginationTable } from '@/pages';

// ------------------------------------------------

/**
 * The `Users` component is a functional component that utilizes Material-UI
 * components to render a section with a header and a table of users. The
 * table is a reusable component imported from the `pages` directory.
 *
 * @component
 * @example
 * return (
 *   <Users />
 * )
 */
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
