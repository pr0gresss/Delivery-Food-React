import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  type?: "text" | "number" | "email" | "password";
  defaultValue?: string | number;
  min?: number;
  max?: number;
  variant?: "primary";
  size?: "small" | "medium" | "large"; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

class Input extends React.Component<InputProps> {
  public static defaultProps = {
    type: "text",
    defaultValue: "",
    size: "medium",
    variant: "primary",
  }

  public constructor(props: InputProps) {
    super(props)
  }

  public render(): React.ReactNode {
    return (
      <input
        type={this.props.type}
        defaultValue={this.props.type === "number" ? this.props.defaultValue ? this.props.defaultValue : 1 : undefined}
        min={this.props.type === "number" ? this.props.min : undefined}
        max={this.props.type === "number" ? this.props.max : undefined}
        className={`${styles.input} ${styles[this.props.type!]} ${styles[this.props.size!]} ${styles[this.props.variant!]}`}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;