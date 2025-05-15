import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary";
  inputSize?: "small" | "medium" | "large";
  errors?: string[] | null;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  defaultValue = "",
  inputSize = "medium",
  variant = "primary",
  errors,
  ...rest
}) => (
  <div className={styles.wrapper}>
    <input
      type={type}
      value={defaultValue}
      className={`
				${styles.wrapper__input} 
				${styles[type!]} 
				${styles[inputSize!]} ${styles[variant!]}
				${errors?.length ? styles.error : ""} 
			`}
      {...rest}
    />
    {errors && errors.length > 0 && (
      <div className={styles.wrapper__errorMessage}>
        <div>{errors[0]}</div>
      </div>
    )}
  </div>
);

export default Input;
