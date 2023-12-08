import { useAppContext } from '../use-app-context';

// ----------------------------------------------------------------

export const useUpdateRole = () => {
  const { roles, onUpdateRole } = useAppContext();

  return { roles, onUpdateRole };
};
