// react dom
import ReactDOM from 'react-dom/client';
// react router
import { RouterProvider } from 'react-router-dom';
// react query
import { QueryClientProvider } from '@/libs';
// context
import { AppContextProvider } from '@/context';
// router
import { router } from '@/router';
// theme
import { ThemeProvider } from '@/theme';
// Notifications
import { SnackbarProvider } from '@/libs';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider>
    <ThemeProvider>
      <SnackbarProvider>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
