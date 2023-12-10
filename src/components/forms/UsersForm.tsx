import { useMemo } from 'react';
// react router
import { useNavigate } from 'react-router-dom';
// react hook form
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
// mui
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
// components
import {
  IconLeftButton,
  GoBackButton,
  RHFTextField,
  RHFSelect
} from '@/components';
// icons
import { ICON_NAMES } from '../icons';
// types
import { IRolesData, IUsersData } from '@/types';
// libs
import { generateUniqueId } from '@/libs';
// config
import {
  USERS_FIRST_NAME_RULES,
  USERS_LAST_NAME_RULES,
  USERS_EMAIL_RULES,
  USERS_ROLE_RULES,
  FAKE_NAVIGATE_DELAY
} from '@/config';
// hooks
import { useToastMessages } from '@/hooks';
// api
import { FAKE_API_DELAY } from '@/api';

// ----------------------------------------------------------------

interface IUserDataProps {
  /**
   *  Optional user data for editing
   */
  user?: IUsersData;
  /**
   *  Function to handle form submission
   */
  onSubmit: (role: IUsersData) => void;
  /**
   * - Array of role data for dropdown options
   */
  roles: IRolesData[];
}

interface IUserFormData {
  /**
   * User first name.
   */
  firstName: string;
  /**
   * User last name.
   */
  lastName: string;
  /**
   * User email address.
   */
  email: string;
  /**
   * User role.
   */
  role: string;
}

/**
 * UsersForm component for handling user creation and editing
 *
 * @param {IUserDataProps} props - The props for the component
 * @returns {React.ReactElement} - The UsersForm component
 */
export const UsersForm: React.FC<IUserDataProps> = ({
  user,
  onSubmit,
  roles
}) => {
  const navigate = useNavigate();
  const { showNotification } = useToastMessages();
  const methods = useForm<IUserFormData>({
    defaultValues: {
      firstName: user ? user.firstName : '',
      lastName: user ? user.lastName : '',
      email: user ? user.email : '',
      role: user ? user.role : roles[0].roleName
    },
    mode: 'onChange'
  });

  const ROLES_OPTIONS = useMemo(
    () => roles.map((role) => ({ text: role.roleName, value: role.roleName })),
    [roles]
  );

  const {
    formState: { isValid, isSubmitted }
  } = methods;

  const redirectTo = (url: string, replace = true) => {
    return setTimeout(() => {
      navigate(url, { replace });
    }, FAKE_NAVIGATE_DELAY);
  };

  const onSubmitForm: SubmitHandler<IUserFormData> = (data) => {
    const { firstName, lastName, role, email } = data;

    const userData: IUsersData = {
      id: user ? user.id : generateUniqueId(),
      firstName,
      lastName,
      email,
      role
    };

    setTimeout(() => {
      onSubmit(userData);
      const message = user
        ? `User ${user.firstName} updated!`
        : `User ${firstName} created!`;
      showNotification(message, 'success');
    }, FAKE_API_DELAY);

    setTimeout(() => {
      redirectTo('/users');
    }, FAKE_NAVIGATE_DELAY);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitForm)}>
        <FormControl sx={{ display: 'block', mb: 2 }}>
          <RHFTextField
            name="firstName"
            label="First Name"
            rules={USERS_FIRST_NAME_RULES}
          />
        </FormControl>
        <FormControl sx={{ display: 'block', mb: 2 }}>
          <RHFTextField
            name="lastName"
            label="Last Name"
            rules={USERS_LAST_NAME_RULES}
          />
        </FormControl>
        <FormControl sx={{ display: 'block', mb: 3 }}>
          <RHFTextField name="email" label="Email" rules={USERS_EMAIL_RULES} />
        </FormControl>
        <FormControl sx={{ display: 'block', mb: 5 }}>
          <RHFSelect
            name="role"
            rules={USERS_ROLE_RULES}
            selectOptions={ROLES_OPTIONS}
            sx={{ width: { xs: '100%', sm: '50%' } }}
          />
        </FormControl>
        <Stack spacing={2} gap={2} direction={{ sm: 'row' }}>
          <IconLeftButton
            icon={user ? ICON_NAMES.edit : ICON_NAMES.create}
            type="submit"
            disabled={!isValid || isSubmitted}
          >
            {user ? 'Edit' : 'Add'}
          </IconLeftButton>
          <GoBackButton />
        </Stack>
      </form>
    </FormProvider>
  );
};
