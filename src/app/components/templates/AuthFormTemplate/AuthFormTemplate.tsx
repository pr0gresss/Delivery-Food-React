import { FormEvent, ReactNode } from "react";
import styles from "./AuthFormTemplate.module.scss";

interface IAuthFormTemplateProps {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
  isLoading: boolean;
}

const AuthFormTemplate: React.FC<IAuthFormTemplateProps> = ({ onSubmit, isLoading, children }) => {
  return (
    <div className={styles.container}>
      <form noValidate className={styles.container__form} onSubmit={onSubmit} aria-busy={isLoading}>
        {children}
      </form>
    </div>
  );
};

export default AuthFormTemplate;
