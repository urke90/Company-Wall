// hooks
import { useAppContext } from '../use-app-context';

export const useCreateRole = () => {
  const { onAddRole, error } = useAppContext();

  return {
    onAddRole,
    error
  };
};
