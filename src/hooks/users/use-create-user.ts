// hooks
import { useAppContext } from '@/hooks';

// ----------------------------------------------------------------

/**
 * Custom React hook for handling user creation functionalities.
 *
 * This hook leverages the context provided by `useAppContext` to access and execute actions related
 * to user management. It provides functionalities to add a new user and to access the current list
 * of roles, thereby simplifying the user creation process and the handling of related data within
 * the components where it is used.
 *
 * @returns {Object} An object containing:
 *   - `onAddUser`: Function to add a new user.
 *   - `roles`: The current list of available roles.
 */
export const useCreateUser = () => {
  const { onAddUser, roles } = useAppContext();

  return {
    onAddUser,
    roles
  };
};
