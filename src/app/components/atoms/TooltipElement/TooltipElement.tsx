import React, { HTMLAttributes } from "react";
import styles from "./TooltipElement.module.scss";

interface TooltipElementProps extends HTMLAttributes<HTMLElement> {
  tooltipText: string,
}



class TooltipElement extends React.Component<TooltipElementProps> {
  public constructor(props: TooltipElementProps) {
    super(props)
  }

  public render(): React.ReactNode {
    return (
      <span 
        className={styles.element}
      >
        {this.props.children}
        <span className={styles.element__tooltip}>
          {this.props.tooltipText}
        </span>
      </span>
    );
  }
}

export default TooltipElement;