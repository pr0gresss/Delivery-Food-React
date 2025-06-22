import styles from "./Button.module.scss";
import React from "react";
import { Icon } from "@components/atoms";
import { TIcon } from "@types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "outline";
  iconStart?: TIcon;
  iconEnd?: TIcon;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  disabled = false,
  className,
  iconStart,
  iconEnd,
  children,
  ...rest
}) => (
  <button
    className={`${className ?? ""} ${styles.button} ${styles[size]} ${styles[variant]}`.trim()}
    {...rest}
    disabled={disabled}
  >
    {iconStart && <Icon iconName={iconStart} size={size} />}
    {children}
    {iconEnd && <Icon iconName={iconEnd} size={size} />}
  </button>
);

export default Button;
