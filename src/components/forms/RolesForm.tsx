import { useEffect } from 'react';
// react hook form
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
// mui
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
// components
import { IconLeftButton, GoBackButton, RHFTextField } from '@/components';
// icons
import { ICON_NAMES } from '../icons';
// types
import { IRolesData } from '@/types';
// libs
import { generateUniqueId } from '@/libs';
// config
import {
  ROLE_NAME_VALIDATION_RULES,
  ROLE_DESCRIPTION_VALIDATION_RULES
} from '@/config/validation';

// ----------------------------------------------------------------

interface IRolesDataProps {
  role?: IRolesData;
  onSubmit: (role: IRolesData) => void;
}

interface IRolesFormData {
  roleName: string;
  description: string;
}

export const RolesForm: React.FC<IRolesDataProps> = ({ role, onSubmit }) => {
  const methods = useForm<IRolesFormData>({
    defaultValues: {
      roleName: role ? role.roleName : '',
      description: role ? role.description : ''
    },
    mode: 'onChange'
  });

  const {
    formState: { isValid, isLoading, isSubmitting, isSubmitted }
  } = methods;

  useEffect(() => {
    console.log('isValid', isValid);
    console.log('isLoading', isLoading);
    console.log('isSubmitting', isSubmitting);
  }, [isLoading, isValid, isSubmitting]);

  // console.log('methods', methods);

  const onSubmitForm: SubmitHandler<IRolesFormData> = (data) => {
    const { description, roleName } = data;

    const roleData: IRolesData = {
      id: role ? role.id : generateUniqueId(),
      roleName,
      description
    };
    setTimeout(() => {
      onSubmit(roleData);
    }, 2000);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitForm)}>
        <FormControl sx={{ display: 'block', mb: 2 }}>
          <RHFTextField
            name="roleName"
            label="Role"
            rules={ROLE_NAME_VALIDATION_RULES}
          />
        </FormControl>
        <FormControl sx={{ display: 'block', mb: 5 }}>
          <RHFTextField
            name="description"
            label="Description"
            rules={ROLE_DESCRIPTION_VALIDATION_RULES}
          />
        </FormControl>
        <Stack spacing={2} gap={2} direction={{ sm: 'row' }}>
          <IconLeftButton
            icon={ICON_NAMES.create}
            type="submit"
            disabled={!isValid}
          >
            Add
          </IconLeftButton>
          <GoBackButton />
        </Stack>
      </form>
    </FormProvider>
  );
};
