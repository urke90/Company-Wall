import { useAppContext } from '@/hooks';

// ----------------------------------------------------------------

export const useUpdateRole = () => {
  const { roles, onUpdateRole } = useAppContext();

  return { roles, onUpdateRole };
};
