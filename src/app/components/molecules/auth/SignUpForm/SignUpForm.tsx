import { Input, Button } from "@components/atoms";
import styles from "../Form.module.scss";
import { useFormState } from "@hooks";
import React, { useState } from "react";
import { IAuthFormProps } from "../IAuthFormProps";
import { AuthFormTemplate } from "@components/templates";
import { validateEmail, validateLength, validatePasswordStrength } from "@utils";
import { useAppDispatch } from "@store";
import { signUp } from "@features/auth";

const SignUpForm: React.FC<IAuthFormProps> = ({ toggleAuthMode }) => {
  const [form, setField, resetForm, errors, validateAll] = useFormState(
    { email: "", password: "" },
    { email: [validateEmail], password: [validateLength(), validatePasswordStrength] }
  );
  const [isLoading, setLoadingState] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

    setLoadingState(true);

    const formData = {
      email: form.email,
      password: form.password,
    };

    dispatch(signUp(formData))
      .unwrap()
      .then(() => resetForm())
      .catch((err) => console.error(err))
      .finally(() => setLoadingState(false));
  };

  return (
    <AuthFormTemplate onSubmit={onSignUp} isLoading={isLoading}>
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
      <div className={styles.container__form__input}>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          errors={errors.password}
          value={form.password}
          onChange={(e) => setField("password", e.target.value)}
          placeholder="Enter your password"
          disabled={isLoading}
          required
        />
      </div>
      <div className={styles.container__form__buttons}>
        <Button type="submit" disabled={isLoading}>
          Sign up
        </Button>
        <a onClick={() => toggleAuthMode("LOG IN")}>Already have account?</a>
      </div>
    </AuthFormTemplate>
  );
};

export default SignUpForm;
