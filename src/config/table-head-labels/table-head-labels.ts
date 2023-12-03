export interface ITableHeadLabels {
  /**
   * Unique identifier for the table header. This is typically used
   * for keying React elements or for reference in sorting functions.
   */
  id: string;
  /**
   * The label text that will be displayed in the table header.
   * This is the readable name for the column.
   */
  label: string;
  /**
   * A boolean indicating whether the column can be sorted.
   * If `true`, sorting features can be implemented on this column.
   */
  isSortable: boolean;
}

export const ROLES_TABLE_HEAD_LABELS: ITableHeadLabels[] = [
  {
    id: '1',
    label: 'ID',
    isSortable: true
  },
  {
    id: '2',
    label: 'Role',
    isSortable: false
  },
  {
    id: '3',
    label: 'Description',
    isSortable: false
  }
];
