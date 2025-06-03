import { Input, Button } from "@components/atoms";
import styles from "../Form.module.scss";
import { useFormState } from "@hooks";
import React, { useState } from "react";
import { AuthFormTemplate } from "@components/templates";
import { IAuthFormProps } from "../IAuthFormProps";
import { validateEmail } from "@utils";
import { resetPassword } from "@slices";
import { useAppDispatch } from "@store";

const ResetPasswordForm: React.FC<IAuthFormProps> = ({ toggleAuthMode }) => {
  const [form, setField, resetForm, errors, validateAll] = useFormState({ email: "" }, { email: [validateEmail] });
  const [isLoading, setLoadingState] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onResetPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

    setLoadingState(true);

    dispatch(resetPassword(form.email))
      .unwrap()
      .then(() => resetForm())
      .catch((err: unknown) => {
        if (err instanceof Error) {
          console.error("Reset password error:", err.message);
        } else {
          console.error("Reset password error:", err);
        }
      })
      .finally(() => setLoadingState(false));
  };

  return (
    <AuthFormTemplate onSubmit={onResetPassword} isLoading={isLoading}>
      <div className={styles.container__form__input}>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          errors={errors.email}
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          placeholder="Enter your email"
          disabled={isLoading}
          required
        />
      </div>
      <div className={styles.container__form__buttons}>
        <Button variant="outline" onClick={() => toggleAuthMode("LOG IN")}>
          Back
        </Button>
        <Button type="submit" disabled={isLoading}>
          Send email
        </Button>
      </div>
    </AuthFormTemplate>
  );
};

export default ResetPasswordForm;
