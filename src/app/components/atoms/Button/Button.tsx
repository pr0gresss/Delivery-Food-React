import Icon, {TIcon} from "@components/atoms/Icon/Icon";
import styles from "./Button.module.scss";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "outline";
  iconStart?: TIcon;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({className,size = "medium", variant = "primary", iconStart, text, onClick, disabled = false}) => {
  return (
    <button
    className={`${className} ${styles.button} ${styles[size]} ${styles[variant]}`}
    disabled={disabled}
    onClick={onClick}>
      {iconStart && <Icon iconName={iconStart} size={size}/> }
      {text}
    </button>
  );
};

export default Button