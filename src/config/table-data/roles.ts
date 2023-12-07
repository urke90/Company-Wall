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

/**
 * Array of roles, each conforming to the IRolesData interface.
 * @type {IRolesData[]}
 */
let ROLES: IRolesData[] = [
  {
    id: '1',
    roleName: 'Developer',
    description: 'Responsible for writing and testing code'
  },
  {
    id: '2',
    roleName: 'Project Manager',
    description: 'Oversees project timelines and deliverables'
  },
  {
    id: '3',
    roleName: 'Designer',
    description: 'Creates user interfaces and experiences'
  },
  {
    id: '4',
    roleName: 'Quality Assurance',
    description: 'Ensures the quality of the software'
  },
  {
    id: '5',
    roleName: 'System Administrator',
    description: 'Manages and maintains IT systems'
  }
];

/**
 * Retrieves the list of roles.
 *
 * @returns {IRolesData[]} An array of roles data.
 */
export const getRoles = () => ROLES;

/**
 * Updates the current list of roles with a new list.
 *
 * @param {IRolesData[]} newRoles - The new list of roles to replace the current list.
 */
export const updateRoles = (newRoles: IRolesData[]) => {
  ROLES = newRoles;
};
