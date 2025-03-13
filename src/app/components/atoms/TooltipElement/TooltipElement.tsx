import React, { HTMLAttributes } from "react";
import styles from "./TooltipElement.module.scss";

export interface TooltipElementProps extends HTMLAttributes<HTMLElement> {
  tooltipText: string,
}

const TooltipElement: React.FC<TooltipElementProps> = ({ tooltipText, children }) => {

  return (
    <span className={styles.element}>
      {children}
      <div className={styles.element__tooltip}>
        {tooltipText}
      </div>
    </span>
  );
};

export default TooltipElement;