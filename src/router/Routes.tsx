// react router
import { createBrowserRouter } from 'react-router-dom';
// pages
import { Layout } from '@/theme';
import {
  Users,
  UsersCreate,
  UsersEdit,
  Roles,
  RolesCreate,
  RolesEdit,
  Home,
  Error
} from '@/pages';

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
