export interface IRolesData {
  /**
   * The unique identifier for the role.
   */
  id: string;
  /**
   *  The name of the role.
   */
  roleName: string;
  /**
   * A brief description of the role.
   */
  description: string;
  /**
   * An index signature to allow additional properties of type string or number.
   */
  [key: string]: string | number;
}
