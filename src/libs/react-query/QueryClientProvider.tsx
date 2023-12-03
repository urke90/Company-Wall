// react query
import {
  QueryClient,
  QueryClientProvider as QueryProvider
} from '@tanstack/react-query';

interface IQueryClientProvider {
  children: React.ReactNode | React.ReactNode[];
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    },
    mutations: {
      retry: false
    }
  }
});

export const QueryClientProvider: React.FC<IQueryClientProvider> = ({
  children
}) => {
  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
};
