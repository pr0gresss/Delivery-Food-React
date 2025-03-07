import React, { useState } from "react";
import styles from "./TooltipElement.module.scss";

export interface TooltipElementProps {
  text: string,
  tooltipText: string,
}

const TooltipElement: React.FC<TooltipElementProps> = ({ text, tooltipText }) => {
  const [isTooltipVisible, setTooltipVisibility] = useState(false)

  return (
    <span 
      className={styles.element}
      onMouseEnter={() => setTooltipVisibility(true)}
      onMouseLeave={() => setTooltipVisibility(false)}
    >
      {text}
      {isTooltipVisible && <div className={`${styles.element__tooltip} ${isTooltipVisible ? styles.visible : ""}`}>{tooltipText}</div>}
    </span>
  );
};

export default TooltipElement;