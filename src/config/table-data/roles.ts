export interface IRolesData {
  /**
   * The unique identifier for the role.
   */
  id: string;
  /**
   *  The name of the role.
   */
  role: string;
  /**
   * A brief description of the role.
   */
  description: string;
}

let roles: IRolesData[] = [
  {
    id: '1',
    role: 'Developer',
    description: 'Responsible for writing and testing code'
  },
  {
    id: '2',
    role: 'Project Manager',
    description: 'Oversees project timelines and deliverables'
  },
  {
    id: '3',
    role: 'Designer',
    description: 'Creates user interfaces and experiences'
  },
  {
    id: '4',
    role: 'Quality Assurance',
    description: 'Ensures the quality of the software'
  },
  {
    id: '5',
    role: 'System Administrator',
    description: 'Manages and maintains IT systems'
  }
];

/**
 * Retrieves the list of roles.
 *
 * @returns {IRolesData[]} An array of roles data.
 */
export const getRoles = () => roles;

/**
 * Updates the current list of roles with a new list.
 *
 * @param {IRolesData[]} newRoles - The new list of roles to replace the current list.
 */
export const updateRoles = (newRoles: IRolesData[]) => {
  roles = newRoles;
};
