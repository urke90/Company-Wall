// hooks
import { useAppContext } from '@/hooks';

// ----------------------------------------------------------------

/**
 * Custom React hook for accessing and updating user data.
 *
 * This hook utilizes the `useAppContext` to retrieve the current list of users
 * and the `onUpdateUser` function to handle user updates. It provides an easy
 * and consistent way to interact with user data throughout the application.
 *
 * @returns {Object} An object containing:
 *  - `users`: An array of current user objects.
 *  - `onUpdateUser`: A function to call for updating a user's data.
 */
export const useUpdateUser = () => {
  const { users, onUpdateUser, roles } = useAppContext();

  return { users, onUpdateUser, roles };
};
