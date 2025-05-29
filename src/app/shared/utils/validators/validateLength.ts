import { TValidator } from "@types";

export const validateLength = (min: number = 6, max?: number): TValidator<string> => {
	return (value: string) => {
		const errors: string[] = [];

		if (value.length < min) {
			errors.push(`Must be at least ${min} characters.`);
		}

		if (max !== undefined && value.length > max) {
			errors.push(`Must be at most ${max} characters.`);
		}

		return errors.length > 0 ? errors : null;
	};
};

