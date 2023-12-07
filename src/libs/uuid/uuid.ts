import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a unique identifier.
 *
 * This function utilizes the 'uuid' library to generate a version 4 UUID.
 * A version 4 UUID is a universally unique identifier that is generated using random numbers.
 *
 * @returns {string} A unique version 4 UUID.
 */
export const generateUniqueId = () => uuidv4();
