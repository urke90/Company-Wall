// hooks
import { useAppContext } from '@/hooks';

// ----------------------------------------------------------------

/**
 * Custom React hook for handling role creation functionalities.
 *
 * This hook utilizes the context provided by `useAppContext` to
 * access and execute actions related to role management. It
 * simplifies the process of adding roles and handling errors
 * within the components where it's used.
 *
 * @returns {Object} An object containing:
 *   - `onAddRole`: Function to add a new role.
 *   - `error`: Current error state, if any, during role creation.
 *   - `onClearError`: Function to clear the current error.
 */
export const useCreateUser = () => {
  const { onAddRole, error, onClearError } = useAppContext();

  return {
    onAddRole,
    error,
    onClearError
  };
};
