// react hook form
import { FormProvider, useForm } from 'react-hook-form';
// mui
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
// components
import { RHFTextField } from '../inputs';
import { IconLeftButton } from '../buttons';
// icons
import { ICON_NAMES } from '../icons';

// ----------------------------------------------------------------

export const RolesForm: React.FC = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <FormControl sx={{ display: 'block', mb: 2 }}>
          <RHFTextField name="role" label="Role" />
        </FormControl>
        <FormControl sx={{ display: 'block' }}>
          <RHFTextField name="description" label="Description" />
        </FormControl>
        <Box sx={{ mt: 5, maxWidth: { sm: '30%' } }}>
          <IconLeftButton icon={ICON_NAMES.create} type="submit">
            Add
          </IconLeftButton>
        </Box>
      </form>
    </FormProvider>
  );
};
