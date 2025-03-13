import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary";
  inputSize?: "small" | "medium" | "large"; 
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
        className={`${styles.input} ${styles[this.props.type!]} ${styles[this.props.inputSize!]} ${styles[this.props.variant!]}`}
        {...this.props}
      />
    );
  }
}

export default Input;