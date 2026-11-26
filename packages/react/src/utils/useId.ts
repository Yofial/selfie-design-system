import { useId as useReactId } from 'react';

/** A stable id: the caller's id if given, else a generated one. */
export function useFieldId(id?: string): string {
  const generated = useReactId();
  return id ?? `sds-${generated.replace(/:/g, '')}`;
}
