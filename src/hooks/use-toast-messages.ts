import { useSnackbar, type BaseVariant } from 'notistack';

/**
 * Custom hook for displaying toast messages.
 * Leverages the `notistack` library's useSnackbar hook for functionality.
 *
 * @returns An object containing methods for showing and closing notifications.
 */
export const useToastMessages = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showNotification = (message: string, variant: BaseVariant) => {
    return enqueueSnackbar(message, { variant });
  };

  return {
    showNotification,
    closeSnackbar
  };
};
