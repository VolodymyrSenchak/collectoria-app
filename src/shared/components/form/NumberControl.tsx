import { Controller } from 'react-hook-form';
import type { IBaseControlProps } from './baseFormControlProps';
import { TextField } from '@mui/material';

type INumberControlProps<T extends Record<string, unknown>> = IBaseControlProps<T>

export const NumberControl = <T extends Record<string, unknown>>({
  name,
  control,
  label,
  rules
}: INumberControlProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label} 
          fullWidth
          margin="normal"
          type="number"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          slotProps={{
            htmlInput: {
              min: 0
            }
          }}
          onChange={(e) => {
            const value = e.target.value ? Number(e.target.value) : null;
            field.onChange(value);
          }}
        />
      )}
    />
  );
};