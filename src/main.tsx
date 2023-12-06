// react dom
import ReactDOM from 'react-dom/client';
// react router
import { RouterProvider } from 'react-router-dom';
// react query
import { QueryClientProvider } from './libs';
// context
import { DataContextProvider } from './components';
// components
import { router } from './router';
import { ThemeProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider>
    <ThemeProvider>
      <DataContextProvider>
        <RouterProvider router={router} />
      </DataContextProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
