// mui
import TableBody from '@mui/material/TableBody';

interface ITableBodyComponent {
  isLoading: boolean;
  rows: React.ReactNode;
  hasData: boolean;
}

export const TableBodyComponent: React.FC<ITableBodyComponent> = (props) => {
  return <TableBody>TableBodyComponent</TableBody>;
};
