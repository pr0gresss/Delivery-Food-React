import React from "react";
import styles from "./TooltipElement.module.scss";

interface TooltipElementProps {
  text: string,
  tooltipText: string,
}

interface TooltipElementState {
  isTooltipVisible: boolean
}

class TooltipElement extends React.Component<TooltipElementProps, TooltipElementState> {
  public constructor(props: TooltipElementProps) {
    super(props)

    this.state = {
      isTooltipVisible: false
    }
  }

  protected setTooltipVisibility = (value: boolean) => {
    this.setState({ isTooltipVisible: value })
  }

  public render(): React.ReactNode {
    return (
      <span 
        className={styles.element}
        onMouseEnter={() => this.setTooltipVisibility(true)}
        onMouseLeave={() => this.setTooltipVisibility(false)}
      >
        {this.props.text}
        {this.state.isTooltipVisible && 
          <div className={`
            ${styles.element__tooltip} 
            ${this.state.isTooltipVisible ? styles.visible : ""
          }`}>
            {this.props.tooltipText}
          </div>}
      </span>
    );
  }
}

export default TooltipElement;