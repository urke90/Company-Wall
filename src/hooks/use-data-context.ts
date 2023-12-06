import { useContext } from 'react';
// context
import { DataContext } from '../components';

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('No context provided!');
  }

  return context;
};
