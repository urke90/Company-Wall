import { useAppContext } from '@/hooks';

// ----------------------------------------------------------------

export const useUpdateUser = () => {
  const { users, onUpdateRole } = useAppContext();

  return { users, onUpdateRole };
};
