import { TValidator } from "@types";

export const validatePasswordStrength: TValidator<string> = (value) => {
  const errors: string[] = [];
  if (!value || value.trim().length === 0) {
    errors.push("Password is required.");
    return errors;
  }
  if (!/[A-Z]/.test(value)) {
    errors.push("Password must contain at least one uppercase letter.");
  }
  if (!/[0-9]/.test(value)) {
    errors.push("Password must contain at least one number.");
  }
  if (!/[^A-Za-z0-9]/.test(value)) {
    errors.push("Password must contain at least one special character.");
  }
  return errors.length > 0 ? errors : null;
};
