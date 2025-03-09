import styles from "./Button.module.scss";
import React from "react";
import { Icon } from "@components/atoms";
import { TIcon } from "@types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "outline";
  iconStart?: TIcon;
  text?: string;
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
    return (
      <button
      className={`${this.props.className} ${styles.button} ${styles[this.props.size!]} ${styles[this.props.variant!]}`}
      disabled={this.props.disabled}
      onClick={this.props.onClick}>
        {this.props.iconStart && <Icon iconName={this.props.iconStart} size={this.props.size}/> }
        {this.props.text}
      </button>
    );
  };
}

export default Button