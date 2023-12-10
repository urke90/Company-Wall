import { useState } from 'react';
// types
import { IUsersData } from '@/types';

// ----------------------------------------------------------------

type Order = 'asc' | 'desc';

export const useUsersTableSort = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('createdAt');

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof IUsersData
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

  const getComparator = <Key extends keyof IUsersData>(
    order: Order,
    orderBy: Key
  ): ((
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const stableSort = <T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
  ): T[] => {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  return { stableSort, getComparator, handleRequestSort, order, orderBy };
};
