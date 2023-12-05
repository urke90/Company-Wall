// react hook form
import { Controller, useFormContext } from 'react-hook-form';
// mui
import TextField, { TextFieldProps } from '@mui/material/TextField';

// ---------------------------------------------------------------

type ITextFieldProps = TextFieldProps & {
  name: string;
  onChangeValue?: (val: string) => void;
};

export const RHFTextField: React.FC<ITextFieldProps> = ({
  name,
  variant = 'standard',
  size = 'medium',
  label,
  onChangeValue,
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
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
