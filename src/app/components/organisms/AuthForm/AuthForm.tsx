import { LoginForm, SignUpForm } from "@components/molecules";
import styles from "./AuthForm.module.scss";
import { ReactElement, useState } from "react";
import ResetPasswordForm from "@components/molecules/auth/ResetPasswordForm/ResetPasswordForm";

export type TAuthMode = "LOG IN" | "SIGN UP" | "RESET PASSWORD";

const AuthForm = () => {
  const authModes: TAuthMode[] = ["LOG IN", "SIGN UP", "RESET PASSWORD"];
  const [currentAuthMode, setAuthMode] = useState<TAuthMode>(authModes[0]);

  const toggleAuthMode = (mode: TAuthMode) => {
    setAuthMode(mode);
  };

  const authModeMap: Record<TAuthMode, ReactElement> = {
    "SIGN UP": <SignUpForm toggleAuthMode={toggleAuthMode} />,
    "LOG IN": <LoginForm toggleAuthMode={toggleAuthMode} />,
    "RESET PASSWORD": <ResetPasswordForm toggleAuthMode={toggleAuthMode} />,
  };

  return (
    <div className={styles.container}>
      <h1>{currentAuthMode[0] + currentAuthMode.slice(1).toLocaleLowerCase()}</h1>
      {authModeMap[currentAuthMode]}
    </div>
  );
};

export default AuthForm;
