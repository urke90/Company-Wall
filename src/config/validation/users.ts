import { RegisterOptions } from 'react-hook-form';

const ALPHABETIC_REGEEX = /^[A-Za-z]+$/;

export const USERS_FIRST_NAME_RULES: RegisterOptions = {
  required: {
    value: true,
    message: 'User first name must be between 2 and 20 characters!'
  },
  minLength: 2,
  maxLength: 20,
  pattern: {
    value: ALPHABETIC_REGEEX,
    message: 'Only alphabetic characters are allowed!'
  }
};

export const USERS_LAST_NAME_RULES: RegisterOptions = {
  required: {
    value: true,
    message: 'User last name must be between 2 and 20 characters!'
  },
  minLength: 2,
  maxLength: 20,
  pattern: {
    value: ALPHABETIC_REGEEX,
    message: 'User last name must contain alphabetic characters only!'
  }
};

export const USERS_EMAIL_RULES: RegisterOptions = {
  required: {
    value: true,
    message: ''
  },
  minLength: 2,
  maxLength: 20,
  pattern: {
    value: ALPHABETIC_REGEEX,
    message: 'User last name must be between 2 and 20 characters!'
  }
};
