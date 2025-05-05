import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	variant?: 'primary';
	inputSize?: 'small' | 'medium' | 'large';
}

class Input extends React.Component<InputProps> {
	public static defaultProps = {
		type: 'text',
		defaultValue: '',
		inputSize: 'medium',
		variant: 'primary',
	};

	public constructor(props: InputProps) {
		super(props);
	}

	public render(): React.ReactNode {
		const { type, variant, inputSize, ...rest } = this.props;

		return (
			<input
				type={type}
				className={`
          ${styles.input} 
          ${styles[type!]} 
          ${styles[inputSize!]} ${styles[variant!]}
        `}
				{...rest}
			/>
		);
	}
}

export default Input;