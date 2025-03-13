import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary";
  inputSize?: "small" | "medium" | "large"; 
};

const Input: React.FC<InputProps> = ({
  type = "text",
  inputSize = "medium",
  variant = "primary",
  ...props
}) => {
  return (
    <input
      type={type}
      className={`${styles.input} ${styles[type]} ${styles[inputSize]} ${styles[variant]}`}
      {...props}
    />
  );
};

export default Input;