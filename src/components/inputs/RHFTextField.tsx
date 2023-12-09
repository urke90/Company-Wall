// react hook form
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';
// mui
import TextField, { TextFieldProps } from '@mui/material/TextField';

// ---------------------------------------------------------------

type IRHFTextFieldProps = TextFieldProps & {
  /**
   * Name of the input field, used for form control.
   */
  name: string;
  /**
   * Optional label text for the input field.
   */
  label?: string;
  /**
   * Optional callback function to handle changes in the input's value.
   */
  onChangeValue?: (val: string) => void;
  /**
   * Optional validation rules to apply to the input field.
   */
  rules?: RegisterOptions;
};

/**
 * RHFTextField Component
 * A TextField component integrated with React Hook Form.
 *
 * Props:
 * - `name`: Name of the form control. This is required.
 * - `variant`: Visual style of the TextField. Defaults to 'standard'.
 * - `size`: Size of the TextField. Defaults to 'medium'.
 * - `label`: Optional label for the TextField.
 * - `onChangeValue`: Optional callback for value change events.
 * - `rules`: Optional validation rules for the TextField.
 * - `...rest`: Any other props supported by MUI TextField.
 *
 * Usage:
 * ```jsx
 * <RHFTextField name="example" label="Example Field" rules={{ required: 'This field is required' }} />
 * ```
 */
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
