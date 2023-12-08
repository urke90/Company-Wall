// hooks
import { useAppContext } from '../use-app-context';

export const useCreateRole = () => {
  const { onAddRole, error, onClearError } = useAppContext();

  return {
    onAddRole,
    error,
    onClearError
  };
};
