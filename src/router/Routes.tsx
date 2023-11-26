import { createBrowserRouter } from 'react-router-dom';

import Layout from 'src/components/layout';
import Home from 'src/pages/Home/Home';
import Users from 'src/pages/Users';
import Roles from 'src/pages/Roles';
import Error from 'src/pages/Error';

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
