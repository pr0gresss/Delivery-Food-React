import React, { HTMLAttributes } from 'react';
import styles from './TooltipElement.module.scss';

interface TooltipElementProps extends HTMLAttributes<HTMLElement> {
	tooltipText: string;
}

const TooltipElement: React.FC<TooltipElementProps> = ({
	children,
	tooltipText,
}) => (
	<span className={styles.element}>
		{children}
		<span className={styles.element__tooltip}>{tooltipText}</span>
	</span>
);

export default TooltipElement;
