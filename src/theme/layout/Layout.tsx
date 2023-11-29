import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Header } from './components';

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <Box>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
