// react router
import { Outlet } from 'react-router-dom';
// mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// components
import { Header } from './components';

// ----------------------------------------------------------------

interface ILayoutProps {}

export const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <Box>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Outlet />
      </Container>
    </Box>
  );
};
