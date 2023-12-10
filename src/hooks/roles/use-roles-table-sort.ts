import { useState, useCallback } from 'react';
// types
import { IRolesData } from '@/types';

// ----------------------------------------------------------------

type Order = 'asc' | 'desc';

/**
 * Custom React hook to manage sorting in a table of roles.
 *
 * This hook manages the sorting state and provides utility functions to perform sorting operations.
 * It's specifically designed to work with data structured according to the `IRolesData` interface.
 *
 * @returns An object containing sorting-related functions and state variables.
 */
export const useRolesTableSort = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('roleName');

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof IRolesData
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property as string);
  };

  const descendingComparator = <T>(a: T, b: T, orderBy: keyof T): number => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = useCallback(
    <Key extends keyof IRolesData>(
      order: Order,
      orderBy: Key
    ): ((
      a: { [key in Key]: number | string },
      b: { [key in Key]: number | string }
    ) => number) => {
      return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    },
    []
  );

  const stableSort = useCallback(
    <T>(array: readonly T[], comparator: (a: T, b: T) => number): T[] => {
      const stabilizedThis = array.map(
        (el, index) => [el, index] as [T, number]
      );
      stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
          return order;
        }
        return a[1] - b[1];
      });
      return stabilizedThis.map((el) => el[0]);
    },
    []
  );

  return { stableSort, getComparator, handleRequestSort, order, orderBy };
};
