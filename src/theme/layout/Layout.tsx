import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Header } from './components';

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
