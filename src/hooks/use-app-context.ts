// react
import { useContext } from 'react';
// context
import { AppContext } from '@/components';

// ----------------------------------------------------------------

/**
 * Custom hook for accessing the AppContext.
 *
 * This hook is a convenience wrapper around the useContext hook
 * specifically for AppContext. It simplifies accessing context
 * throughout the application. It validates the presence of the
 * context and throws an error if the context is not available,
 * ensuring that the hook is used within a valid context provider.
 *
 * @returns {Object} The context object provided by AppContext.
 * @throws {Error} Throws an error if used outside of AppContext provider.
 */

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No context provided!');
  }

  return context;
};
