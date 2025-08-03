export function isNil(value: unknown): boolean {
  return value === null || value === undefined;
}

export function isEmpty(value: string | unknown[]): boolean {
  if (typeof value === 'string') {
    return value.trim() === '';
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return isNil(value);
}
