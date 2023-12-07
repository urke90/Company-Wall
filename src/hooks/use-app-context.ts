import { useContext } from 'react';
// context
import { AppContext } from '../components';

export const useAppContext = () => {
  console.log('useDataContext');
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No context provided!');
  }

  return context;
};
