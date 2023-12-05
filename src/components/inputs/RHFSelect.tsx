// react hook form
import { Controller, useFormContext } from 'react-hook-form';
// mui
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface ISelectOptions {
  value: string;
  text: string;
}

interface IRHFSelectProps extends SelectProps {
  name: string;
  inputLabelText: string;
  onChangeValue?: (val: string) => void;
  selectOptions: ISelectOptions[];
  rules?: any;
}

export const RHFSelect: React.FC<IRHFSelectProps> = ({
  name,
  inputLabelText,
  onChangeValue,
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
        <>
          <InputLabel id="rhf-select-label">{inputLabelText}</InputLabel>
          <Select
            {...field}
            labelId="rhf-select-label"
            id="rhf-select"
            value={selectOptions[0].value}
            label="Age"
            onChange={(e) => {
              field.onChange(e);
              if (onChangeValue) {
                onChangeValue(e.target.value as string);
              }
            }}
            {...rest}
          >
            {selectOptions.map(({ text, value }) => (
              <MenuItem key={value} value={value}>
                {text}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    />
  );
};
