import { TValidator } from "@types";
import { useState } from "react";

export function useFormState<T extends object>(
  initial: T,
  validators?: Partial<{ [K in keyof T]: TValidator<T[K]>[] }>
): [T, <K extends keyof T>(key: K, value: T[K]) => void, () => void, Record<keyof T, string[]>, () => boolean] {
  const initErrorState = (initial: T): Record<keyof T, string[]> =>
    Object.keys(initial).reduce((acc, key) => {
      acc[key as keyof T] = [];
      return acc;
    }, {} as Record<keyof T, string[]>);

  const [state, setState] = useState<T>(initial);
  const [errors, setErrors] = useState<Record<keyof T, string[]>>(
    Object.keys(initial).reduce((acc, key) => {
      acc[key as keyof T] = [];
      return acc;
    }, {} as Record<keyof T, string[]>)
  );

  const setField = <K extends keyof T>(key: K, value: T[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => {
    setState(initial);
    setErrors(initErrorState(initial));
  };

  const validateAll = (): boolean => {
		let isValid = true;
		const newErrors: Record<keyof T, string[]> = initErrorState(initial);

		for (const key in state) {
			const value = state[key];
			const fieldValidators = validators?.[key] ?? [];
			const fieldErrors = fieldValidators
				.flatMap(validator => validator(value) ?? [])
				.filter((msg): msg is string => typeof msg === 'string' && msg.length > 0);

			if (fieldErrors.length > 0) {
				isValid = false;
			}

			newErrors[key] = fieldErrors;
		}

		setErrors(newErrors);
		return isValid;
	};

  return [state, setField, reset, errors, validateAll];
}
