import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  type?: "text" | "number" | "email" | "password";
  defaultValue?: string | number;
  min?: number;
  max?: number;
  variant?: "primary";
  size?: "small" | "medium" | "large"; 
  onChange?: (value: string | number) => void;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  defaultValue = "",
  min,
  max,
  size = "medium",
  variant = "primary",
  onChange,
}) => {
  return (
    <input
      type={type}
      defaultValue={type === "number" ? defaultValue ? defaultValue : 1 : undefined}
      min={type === "number" ? min : undefined}
      max={type === "number" ? max : undefined}
      className={`${styles.input} ${styles[type]} ${styles[size]} ${styles[variant]}`}
      onChange={(e) =>
        onChange && onChange(type === "number" ? Number(e.target.value) : e.target.value)
      }
    />
  );
};

export default Input;