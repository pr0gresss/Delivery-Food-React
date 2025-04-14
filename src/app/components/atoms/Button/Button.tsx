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

class Button extends React.Component<ButtonProps> {
  public static defaultProps = {
    size: "medium",
    variant: "primary",
    disabled: false,
  };

  public constructor(props: ButtonProps) {
    super(props);
  }

  public render(): React.ReactNode {
    const {
      iconStart,
      iconEnd,
      children,
      variant,
      className,
      size,
      ...rest
    } = this.props;

    return (
      <button
      className={className +` ${styles.button} ${styles[size!]} ${styles[variant!]}`}
      {...rest}>
        {iconStart && <Icon iconName={iconStart} size={size}/>}
        {children}
        {iconEnd && <Icon iconName={iconEnd} size={size}/>}
      </button>
    );
  };
}

export default Button