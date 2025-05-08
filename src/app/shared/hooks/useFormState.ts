import { useState } from 'react';

export function useFormState<T extends object>(
	initial: T
): [T, <K extends keyof T>(key: K, value: T[K]) => void, () => void] {
	const [state, setState] = useState<T>(initial);

	const setField = <K extends keyof T>(key: K, value: T[K]) => {
		setState(prev => ({ ...prev, [key]: value }));
	};

	const reset = () => setState(initial);

	return [state, setField, reset];
}
