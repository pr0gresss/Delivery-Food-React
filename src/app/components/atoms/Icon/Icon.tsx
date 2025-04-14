import React from 'react';
import styles from './Icon.module.scss';
import { TIcon } from '@types';

interface IconProps {
	iconName: TIcon;
	size?: 'small' | 'medium' | 'large';
}

class Icon extends React.Component<IconProps> {
	public static defaultProps = {
		size: 'medium',
	};

	public constructor(props: IconProps) {
		super(props);
	}

	public render(): React.ReactNode {
		const { size, iconName, ...rest } = this.props;
		return (
			<i
				className={`${styles.icon} ${styles[size!]} ${styles[iconName]}`}
				{...rest}
			/>
		);
	}
}

export default Icon;
