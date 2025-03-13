import Icon, {TIcon} from "@components/atoms/Icon/Icon";
import styles from "./Button.module.scss";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "outline";
  iconStart?: TIcon;
  iconEnd?: TIcon
}

const Button: React.FC<ButtonProps> = ({
    className = "", 
    size = "medium", 
    variant = "primary", 
    iconStart, iconEnd, 
    children, 
    ...props
  }) => {
  return (
    <button
    className={`${className} ${styles.button} ${styles[size]} ${styles[variant]}`}
    {...props}
    >
      {iconStart && <Icon iconName={iconStart} size={size}/>}
      {children}
      {iconEnd && <Icon iconName={iconEnd} size={size}/>}
    </button>
  );
};

export default Button