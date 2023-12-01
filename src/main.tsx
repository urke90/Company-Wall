// react dom
import ReactDOM from 'react-dom/client';
// react router
import { RouterProvider } from 'react-router-dom';
// components
import { router } from './router';
import { ThemeProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
