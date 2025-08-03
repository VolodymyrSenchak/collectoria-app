import { Controller } from 'react-hook-form';
import type { IBaseControlProps } from './baseFormControlProps';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

type IDateControlProps<T extends Record<string, unknown>> = IBaseControlProps<T>

export const DateControl = <T extends Record<string, unknown>>({
  name,
  control,
  label,
  rules
}: IDateControlProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <DatePicker
          {...field}
          value={field.value ? dayjs(field.value as string) : null}
          onChange={(newValue) => {
            const dateValue = newValue ? newValue.format('YYYY-MM-DD') : '';
            field.onChange(dateValue);
          }}
          label={label}
          slotProps={{
            textField: {
              fullWidth: true,
              margin: 'normal',
              error: !!fieldState.error,
              helperText: fieldState.error?.message
            }
          }}
        />
      )}
    />
  );
};