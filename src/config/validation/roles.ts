import { RegisterOptions } from 'react-hook-form';

/**
 * Regular expression for alphanumeric characters and underscores.
 * This regex allows any combination of upper and lower case letters, numbers, and underscores.
 * @type {RegExp}
 */
export const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9_]+$/;

/**
 * Validation rules for role names.
 * These rules require the role name to be between 2 and 16 characters,
 * and only consist of alphanumeric characters and underscores.
 * @type {RegisterOptions}
 */
export const ROLE_NAME_VALIDATION_RULES: RegisterOptions = {
  required: {
    value: true,
    message: 'Role name is required!'
  },
  minLength: {
    value: 2,
    message: 'Role name must have at least 2 characters!'
  },
  maxLength: {
    value: 16,
    message: 'Role name must have at least 16 characters!'
  },
  pattern: {
    value: ALPHANUMERIC_REGEX,
    message: 'Only alphanumeric characters and underscores are allowed!'
  }
};

/**
 * Validation rules for role descriptions.
 * These rules require the role description to be a minimum of 2 and a maximum of 50 characters.
 * The role description is not a required field.
 * @type {RegisterOptions}
 */
export const ROLE_DESCRIPTION_VALIDATION_RULES: RegisterOptions = {
  required: {
    value: false,
    message: 'Role description must be between 2 and 50 characters!'
  },
  minLength: 2,
  maxLength: 50
};
