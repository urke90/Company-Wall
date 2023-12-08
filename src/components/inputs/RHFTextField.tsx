// react hook form
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';
// mui
import TextField, { TextFieldProps } from '@mui/material/TextField';

// ---------------------------------------------------------------

type IRHFTextFieldProps = TextFieldProps & {
  name: string;
  label?: string;
  onChangeValue?: (val: string) => void;
  rules?: RegisterOptions;
};

export const RHFTextField: React.FC<IRHFTextFieldProps> = ({
  name,
  variant = 'standard',
  size = 'medium',
  label,
  onChangeValue,
  rules,
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          onChange={(e) => {
            field.onChange(e);
            if (onChangeValue) {
              onChangeValue(e.target.value);
            }
          }}
          value={field.value || ''}
          variant={variant}
          size={size}
          fullWidth
          color={error ? 'error' : 'primary'}
          label={label}
          error={!!error}
          helperText={error?.message}
          {...rest}
        />
      )}
    />
  );
};
