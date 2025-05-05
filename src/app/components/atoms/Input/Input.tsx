import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	variant?: 'primary';
	inputSize?: 'small' | 'medium' | 'large';
}

const Input: React.FC<InputProps> = ({
	type = 'text',
	defaultValue = '',
	inputSize = 'medium',
	variant = 'primary',
	...rest
}) => (
	<input
		type={type}
		value={defaultValue}
		className={`
				${styles.input} 
				${styles[type!]} 
				${styles[inputSize!]} ${styles[variant!]}
			`}
		{...rest}
	/>
);

export default Input;
