import {
  SnackbarProvider as NotistackProvider,
  SnackbarProviderProps
} from 'notistack';

// interface ISnackbarProviderProps extends SnackbarProviderProps {
// //   children: React.ReactNode | React.ReactNode[];
// }

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  maxSnack = 3,
  autoHideDuration = 3000,
  preventDuplicate = true,
  children
}) => {
  return (
    <NotistackProvider
      maxSnack={maxSnack}
      preventDuplicate={preventDuplicate}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      {children}
    </NotistackProvider>
  );
};
