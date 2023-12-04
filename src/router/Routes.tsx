// react router
import { createBrowserRouter } from 'react-router-dom';
// pages
import { Layout } from '@theme/layout';
import { Users, UsersCreate, UsersEdit } from '@pages/Users';
import { Roles, RolesCreate, RolesEdit } from '@pages/Roles';
import { Home } from '@pages/Home';
import { Error } from '@pages/Error';

// ----------------------------------------------------------------

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
        path: 'users/new',
        element: <UsersCreate />
      },
      {
        path: 'users/:userId',
        element: <UsersEdit />
      },
      {
        path: 'roles',
        element: <Roles />
      },
      {
        path: 'roles/:roleId',
        element: <RolesEdit />
      },
      {
        path: 'roles/new',
        element: <RolesCreate />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
]);
