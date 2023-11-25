import { Outlet } from 'react-router-dom';

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <div>
      <h1>Layout Component</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
