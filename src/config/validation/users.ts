import { RegisterOptions } from 'react-hook-form';

/**
 * Regular expression for validating alphabetic characters.
 * This regex matches a string if it consists only of alphabetic characters (both uppercase and lowercase).
 * It does not allow any numbers, special characters, or whitespace.
 *
 * @constant
 * @type {RegExp}
 */
const ALPHABETIC_REGEEX = /^[A-Za-z]+$/;

/**
 * Regular expression for validating email addresses.
 * This regex matches a string if it follows the standard email format:
 * - Begins with alphanumeric characters, underscores, periods, or hyphens.
 * - An '@' symbol.
 * - Domain name with alphanumeric characters, periods, or hyphens.
 * - A domain suffix of 2 to 4 alphabetic characters.
 *
 * Note: This is a basic email validation and does not cover all valid email address formats.
 *
 * @constant
 * @type {RegExp}
 */
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

/**
 * Validation rules for user's first name.
 * @type {RegisterOptions}
 * - `required`: User first name is required and must be between 2 and 20 characters.
 * - `minLength`: Minimum length of 2 characters.
 * - `maxLength`: Maximum length of 20 characters.
 * - `pattern`: Must match the ALPHABETIC_REGEEX pattern (only alphabetic characters).
 */
export const USERS_FIRST_NAME_RULES: RegisterOptions = {
  required: {
    value: true,
    message: 'User first name is required!'
  },
  minLength: {
    value: 2,
    message: 'User first name must be at least 2 characters long!'
  },
  maxLength: {
    value: 20,
    message: 'User last name must be at most 20 characters maximum!'
  },
  pattern: {
    value: ALPHABETIC_REGEEX,
    message: 'Only alphabetic characters are allowed!'
  }
};

/**
 * Validation rules for user's last name.
 * @type {RegisterOptions}
 * - `required`: User last name is required and must be between 2 and 20 characters.
 * - `minLength`: Minimum length of 2 characters.
 * - `maxLength`: Maximum length of 20 characters.
 * - `pattern`: Must match the ALPHABETIC_REGEEX pattern (alphabetic characters only).
 */

export const USERS_LAST_NAME_RULES: RegisterOptions = {
  required: {
    value: true,
    message: 'User last name is required!'
  },
  minLength: {
    value: 2,
    message: 'User last name must be at least 2 characters long!'
  },
  maxLength: {
    value: 20,
    message: 'User last name must be at most 20 characters long!'
  },
  pattern: {
    value: ALPHABETIC_REGEEX,
    message: 'User last name must contain alphabetic characters only!'
  }
};

/**
 * Validation rules for user's email address.
 * @type {RegisterOptions}
 * - `required`: Email address is required and must be between 2 and 20 characters.
 * - `minLength`: Minimum length of 2 characters.
 * - `maxLength`: Maximum length of 20 characters.
 * - `pattern`: Must match the EMAIL_REGEX pattern (valid email format).
 */
export const USERS_EMAIL_RULES: RegisterOptions = {
  required: {
    value: true,
    message: 'Email address is required!'
  },
  pattern: {
    value: EMAIL_REGEX,
    message: 'User last name must be between 2 and 20 characters!'
  }
};
export const USERS_ROLE_RULES: RegisterOptions = {
  required: {
    value: true,
    message: 'Role is required!'
  }
};
