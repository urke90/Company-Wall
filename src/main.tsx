import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from 'src/theme/Theme';

import { router } from 'src/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
