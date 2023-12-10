// react hook form
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';
// mui
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

interface ISelectOptions {
  value: string;
  text: string;
}

interface IRHFSelectProps extends SelectProps {
  name: string;
  selectOptions: ISelectOptions[];
  rules?: RegisterOptions;
}

export const RHFSelect: React.FC<IRHFSelectProps> = ({
  name,
  selectOptions,
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
        <Select
          {...field}
          labelId="rhf-select-label"
          id="rhf-select"
          value={field.value}
          onChange={(e) => {
            field.onChange(e);
          }}
          {...rest}
        >
          {selectOptions.map(({ text, value }) => (
            <MenuItem key={value} value={value}>
              {text}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};
