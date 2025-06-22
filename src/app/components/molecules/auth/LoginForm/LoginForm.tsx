import { Button, Input } from "@components/atoms";
import styles from "../Form.module.scss";
import React, { useState } from "react";
import { useFormState } from "@hooks";
import { AuthFormTemplate } from "@components/templates";
import { IAuthFormProps } from "../IAuthFormProps";
import { validateEmail, validateLength, validatePasswordStrength } from "@utils";
import { useAppDispatch } from "@store";
import { logIn } from "@features/auth";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC<IAuthFormProps> = ({ toggleAuthMode }) => {
  const [form, setField, resetForm, errors, validateAll] = useFormState(
    { email: "", password: "" },
    { email: [validateEmail], password: [validateLength(), validatePasswordStrength] }
  );
  const [isLoading, setLoadingState] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogIn = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

    setLoadingState(true);

    const formData = {
      email: form.email,
      password: form.password,
    };

    dispatch(logIn(formData))
      .unwrap()
      .then(() => {
        resetForm();
        navigate("/menu");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoadingState(false));
  };

  return (
    <AuthFormTemplate onSubmit={onLogIn} isLoading={isLoading}>
      <div className={styles.container__form__input}>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          errors={errors.email}
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
          value={form.password}
          onChange={(e) => setField("password", e.target.value)}
          placeholder="Enter your password"
          errors={errors.password}
          disabled={isLoading}
          required
        />
      </div>
      <div className={styles.container__form__buttons}>
        <Button type="submit" disabled={isLoading}>
          Log in
        </Button>
        <a onClick={() => toggleAuthMode("RESET PASSWORD")}>Forgot your password?</a>
        <a onClick={() => toggleAuthMode("SIGN UP")}>Sign up now</a>
      </div>
    </AuthFormTemplate>
  );
};

export default LoginForm;
