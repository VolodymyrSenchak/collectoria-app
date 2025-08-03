import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import type { IBaseControlProps } from './baseFormControlProps';

type ITextControlProps<T extends Record<string, unknown>> = IBaseControlProps<T>

export const TextControl = <T extends Record<string, unknown>>({
  name,
  control,
  label,
  rules
}: ITextControlProps<T>) => {
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
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};