import { FormEvent, ReactNode } from "react";
import styles from "./AuthFormTemplate.module.scss";

interface IAuthFormTemplateProps {
  children: ReactNode
  onSubmit: (e: FormEvent) => void,
  isLoading: boolean,
  error: Error | null,
}

const AuthFormTemplate: React.FC<IAuthFormTemplateProps> = ({onSubmit, isLoading, error, children}) => {
  return (
    <div className={styles.container}>
      <form className={styles.container__form} onSubmit={onSubmit} aria-busy={isLoading}>
        {children}
        {error && <div className={styles.error}>{typeof error === 'string' ? error : error.message}</div>}
      </form>
    </div>
  );
}

export default AuthFormTemplate;