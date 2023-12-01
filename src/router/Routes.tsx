// react router
import { createBrowserRouter } from 'react-router-dom';

// ----------------------------------------------------------------

import { Layout } from '@theme/layout';
import { Home } from '@pages/Home';
import { Users } from '@pages/Users';
import { Roles } from '@pages/Roles';
import { Error } from '@pages/Error';

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
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
]);
