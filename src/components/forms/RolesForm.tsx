// react hook form
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
// mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
// components
import { RHFTextField } from '../inputs';
import { IconLeftButton, GoBackButton } from '../buttons';
// icons
import { ICON_NAMES } from '../icons';
// types
import { IRolesData } from '@/types';
// libs
import { generateUniqueId } from '@/libs';

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
    }
  });

  const onSubmitForm: SubmitHandler<IRolesFormData> = (data) => {
    console.log('data', data);
    const { description, roleName } = data;

    const roleData: IRolesData = {
      id: role ? role.id : generateUniqueId(),
      roleName,
      description
    };

    onSubmit(roleData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitForm)}>
        <FormControl sx={{ display: 'block', mb: 2 }}>
          <RHFTextField name="roleName" label="Role" />
        </FormControl>
        <FormControl sx={{ display: 'block', mb: 5 }}>
          <RHFTextField name="description" label="Description" />
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
