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
    return (
      <button
      className={this.props.className +` ${styles.button} ${styles[this.props.size!]} ${styles[this.props.variant!]}`}
      {...this.props}>
        {this.props.iconStart && <Icon iconName={this.props.iconStart} size={this.props.size}/>}
        {this.props.children}
        {this.props.iconEnd && <Icon iconName={this.props.iconEnd} size={this.props.size}/>}
      </button>
    );
  };
}

export default Button