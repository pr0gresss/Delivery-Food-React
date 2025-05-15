import { Button, Input } from '@components/atoms';
import styles from '../Form.module.scss';
import React, { useState } from 'react';
import { useAuth, useFormState } from '@hooks';
import { AuthFormTemplate } from '@components/templates';
import { IAuthFormProps } from '../IAuthFormProps';
import { validateEmail, validateLength, validatePasswordStrength } from '@utils';

const LoginForm: React.FC<IAuthFormProps> = ({ toggleAuthMode }) => {
	const [form, setField, resetForm, errors, validateAll] = useFormState({ email: '', password: '' }, { email: [validateEmail], password: [validateLength(), validatePasswordStrength]});
	const [isLoading, setLoadingState] = useState<boolean>(false);

	const { logIn } = useAuth();

	const onLogIn = (e: React.FormEvent) => {
		e.preventDefault();

		if(!validateAll()) return;

		setLoadingState(true);
		logIn(form.email, form.password)
			.catch(err => console.error(err))
			.finally(() => {
				resetForm();
				setLoadingState(false);
			});
	};

	return (
		<AuthFormTemplate onSubmit={onLogIn}  isLoading={isLoading}>
			<div className={styles.container__form__input}>
				<label htmlFor="email">Email</label>
				<Input
					type="email"
					id="email"
					value={form.email}
					onChange={e => setField('email', e.target.value)}
					errors={errors.email}
					placeholder="Enter your email"
					disabled={isLoading}
					required
				/>
			</div>
			<div className={styles.container__form__input}>
				<label htmlFor="password">Password</label>
				<Input
					type="password"
					id="password"
					value={form.password}
					onChange={e => setField('password', e.target.value)}
					placeholder="Enter your password"
					errors={errors.password}
					disabled={isLoading}
					required
				/>
			</div>
			<div className={styles.container__form__buttons}>
				<Button type="submit" disabled={isLoading}>
					Log in
				</Button>
				<a onClick={() => toggleAuthMode('RESET PASSWORD')}>
					Forgot your password?
				</a>
				<a onClick={() => toggleAuthMode('SIGN UP')}>Sign up now</a>
			</div>
		</AuthFormTemplate>
	);
};

export default LoginForm;
