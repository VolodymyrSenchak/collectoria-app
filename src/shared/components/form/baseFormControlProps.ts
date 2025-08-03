import type { Control, FieldValues, Path } from 'react-hook-form';

export interface IBaseControlProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T, unknown, T>;
  label: string;
  rules?: Record<string, unknown>;
}