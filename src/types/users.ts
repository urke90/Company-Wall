export interface IUsersData {
  /**
   * The unique identifier for the user.
   */
  id: string;
  /**
   * The first name of the user.
   */
  firstName: string;
  /**
   * The last name of the user.
   */
  lastName: string;
  /**
   * The role assigned to the user.
   */
  role: string;
  /**
   * An index signature to allow additional properties of type string or number.
   */
  [key: string]: string | number;
}
