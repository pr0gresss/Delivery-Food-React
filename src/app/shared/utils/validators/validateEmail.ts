import { TValidator } from "@types";

export const validateEmail: TValidator<string> = (value) => {
  const errors: string[] = [];

  if (!value || value.trim() === "") {
    errors.push("Email is required.");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errors.push("Email is not valid.");
    }
  }

  return errors.length > 0 ? errors : null;
};
