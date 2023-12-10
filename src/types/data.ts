import { IRolesData, IUsersData } from '@/types';

// ----------------------------------------------------------------

export interface IData {
  /**
   * Array of user data.
   * Each element in the array represents a user and their associated data.
   */
  users: IUsersData[];
  /**
   * Array of role data.
   * Each element in the array represents a role and its associated data.
   */
  roles: IRolesData[];
}
