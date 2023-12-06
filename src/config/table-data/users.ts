export interface IUsersData {
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

/**
 * An array of user data, each conforming to the IUsersData interface.
 */
const USERS: IUsersData[] = [
  { firstName: 'Sarah', lastName: 'Martin', role: 'Quality Assurance' },
  { firstName: 'Robert', lastName: 'Brown', role: 'System Administrator' },
  { firstName: 'Daniel', lastName: 'Miller', role: 'Quality Assurance' },
  { firstName: 'Sarah', lastName: 'Thomas', role: 'Designer' },
  { firstName: 'Patricia', lastName: 'Brown', role: 'Project Manager' },
  { firstName: 'Jennifer', lastName: 'Garcia', role: 'Designer' },
  { firstName: 'Charles', lastName: 'Davis', role: 'Designer' },
  { firstName: 'Jessica', lastName: 'Martin', role: 'Developer' },
  { firstName: 'Robert', lastName: 'Johnson', role: 'Quality Assurance' },
  { firstName: 'Nancy', lastName: 'Perez', role: 'Designer' },
  { firstName: 'Daniel', lastName: 'Hernandez', role: 'Designer' },
  { firstName: 'John', lastName: 'Perez', role: 'System Administrator' },
  { firstName: 'Thomas', lastName: 'Johnson', role: 'Developer' },
  { firstName: 'William', lastName: 'Thompson', role: 'System Administrator' },
  { firstName: 'David', lastName: 'Johnson', role: 'Project Manager' },
  { firstName: 'Patricia', lastName: 'Smith', role: 'Developer' },
  { firstName: 'Thomas', lastName: 'Lopez', role: 'Developer' },
  { firstName: 'Nancy', lastName: 'Thompson', role: 'Designer' },
  { firstName: 'Linda', lastName: 'Davis', role: 'Quality Assurance' },
  { firstName: 'Mary', lastName: 'Martinez', role: 'Developer' },
  { firstName: 'Patricia', lastName: 'Miller', role: 'Designer' },
  { firstName: 'Sarah', lastName: 'Smith', role: 'Quality Assurance' },
  { firstName: 'Jennifer', lastName: 'Taylor', role: 'Project Manager' },
  { firstName: 'Sarah', lastName: 'Martinez', role: 'Developer' },
  { firstName: 'Joseph', lastName: 'Martin', role: 'Designer' }
];

/**
 * Retrieves the list of users.
 *
 * @returns {IUsersData[]} An array containing user data.
 */
export const getUsers = () => USERS;
