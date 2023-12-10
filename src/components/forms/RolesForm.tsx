// react router
import { useNavigate } from 'react-router-dom';
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
// hooks
import { useToastMessages } from '@/hooks';
// config
import {
  ROLE_NAME_VALIDATION_RULES,
  ROLE_DESCRIPTION_VALIDATION_RULES,
  FAKE_NAVIGATE_DELAY
} from '@/config';
// api
import { FAKE_API_DELAY } from '@/api';

// ----------------------------------------------------------------

interface IRolesDataProps {
  /**
   * An optional role object to be edited or viewed.
   * It contains the details of the role that can be used to populate the form for editing.
   */
  role?: IRolesData;
  /**
   * Callback function to handle the submission of the form.
   * This function is called with the role data when the form is submitted.
   */
  onSubmit: (role: IRolesData) => void;
}

interface IRolesFormData {
  /**
   * The name of the role.
   * This field is a string representing the role's name.
   */
  roleName: string;
  /**
   * Description of the role.
   * This field is a string detailing the specifics or functions of the role.
   */
  description: string;
}

/**
 * RolesForm Component
 *
 * A form component for creating or editing roles. Utilizes react-hook-form for form management and validation.
 *
 * @component
 * @param {IRolesDataProps} props - The props for the component.
 * @param {IRolesData} props.role - An optional role object for initial form values.
 * @param {(role: IRolesData) => void} props.onSubmit - Function to execute on form submission.
 * @returns {React.ReactElement} - The rendered component.
 */
export const RolesForm: React.FC<IRolesDataProps> = ({ role, onSubmit }) => {
  // hooks
  const navigate = useNavigate();
  const { showNotification } = useToastMessages();
  const methods = useForm<IRolesFormData>({
    defaultValues: {
      roleName: role ? role.roleName : '',
      description: role ? role.description : ''
    },
    mode: 'onChange'
  });

  const {
    formState: { isValid, isSubmitted }
  } = methods;

  const redirectTo = (url: string, replace = true) => {
    return setTimeout(() => {
      navigate(url, { replace });
    }, FAKE_NAVIGATE_DELAY);
  };

  const onSubmitForm: SubmitHandler<IRolesFormData> = (data) => {
    const { description, roleName } = data;

    const roleData: IRolesData = {
      id: role ? role.id : generateUniqueId(),
      roleName,
      description
    };

    setTimeout(() => {
      onSubmit(roleData);
      const message = role
        ? `Role ${role.roleName} updated!`
        : `Role ${roleName} created!`;
      showNotification(message, 'success');
    }, FAKE_API_DELAY);

    redirectTo('/roles');
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
            icon={role ? ICON_NAMES.edit : ICON_NAMES.create}
            type="submit"
            disabled={!isValid || isSubmitted}
          >
            {role ? 'Edit' : 'Add'}
          </IconLeftButton>
          <GoBackButton />
        </Stack>
      </form>
    </FormProvider>
  );
};
