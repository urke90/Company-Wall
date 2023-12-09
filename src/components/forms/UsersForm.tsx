import { useEffect } from 'react';
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
import { IUsersData } from '@/types';
// libs
import { generateUniqueId } from '@/libs';
// config
import {
  ROLE_NAME_VALIDATION_RULES,
  ROLE_DESCRIPTION_VALIDATION_RULES
} from '@/config/validation';

// ----------------------------------------------------------------

interface IUserDataProps {
  user?: IUsersData;
  onSubmit: (role: IUsersData) => void;
}

interface IUserFormData {
  firstName: string;
  lastName: string;
  role: string;
}

// TODO implement RHF SELECT
export const UsersForm: React.FC<IUserDataProps> = ({ user, onSubmit }) => {
  const methods = useForm<IUserFormData>({
    defaultValues: {
      firstName: user ? user.firstName : '',
      lastName: user ? user.lastName : '',
      role: user ? user.role : ''
    }
  });

  useEffect(() => {
    console.log('isLoading', methods.formState.isLoading);
  }, [methods.formState.isLoading]);

  console.log('methods', methods);

  const onSubmitForm: SubmitHandler<IUserFormData> = (data) => {
    const { firstName, lastName, role } = data;

    const userData: IUsersData = {
      id: user ? user.id : generateUniqueId(),
      firstName,
      lastName,
      role
    };
    setTimeout(() => {
      onSubmit(userData);
    }, 2000);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitForm)}>
        <FormControl sx={{ display: 'block', mb: 2 }}>
          <RHFTextField
            name="firstName"
            label="First Name"
            rules={ROLE_NAME_VALIDATION_RULES}
          />
        </FormControl>
        <FormControl sx={{ display: 'block', mb: 5 }}>
          <RHFTextField
            name="lastName"
            label="Last Name"
            rules={ROLE_DESCRIPTION_VALIDATION_RULES}
          />
        </FormControl>
        <Stack spacing={2} gap={2} direction={{ sm: 'row' }}>
          <IconLeftButton icon={ICON_NAMES.create} type="submit">
            Add
          </IconLeftButton>
          <GoBackButton />
        </Stack>
      </form>
    </FormProvider>
  );
};
