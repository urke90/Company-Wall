import { createBrowserRouter } from 'react-router-dom';

import Layout from 'src/theme/layout/Layout';
import Home from 'src/pages/Home/Home';
import Users from 'src/pages/Users/Users';
import Roles from 'src/pages/Roles/Roles';
import Error from 'src/pages/Error/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'roles',
        element: <Roles />
      }
    ],
    errorElement: <Error />
  }
]);
