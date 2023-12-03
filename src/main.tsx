// react dom
import ReactDOM from 'react-dom/client';
// react router
import { RouterProvider } from 'react-router-dom';
// react query
import { QueryClientProvider } from './libs';
// components
import { router } from './router';
import { ThemeProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </QueryClientProvider>
);
