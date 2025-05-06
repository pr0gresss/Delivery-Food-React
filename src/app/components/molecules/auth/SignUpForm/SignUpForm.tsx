import { Input, Button } from '@components/atoms';
import styles from '../Form.module.scss';
import { useAuth, useFormState } from '@hooks';
import React, { useState } from 'react';
import { IAuthFormProps } from '../IAuthFormProps';
import { AuthFormTemplate } from '@components/templates';

const SignUpForm: React.FC<IAuthFormProps> = ({ toggleAuthMode }) => {
	const [form, setField, resetForm] = useFormState({ email: '', password: '' });
	const [isLoading, setLoadingState] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	const { signUp } = useAuth();

	const onSignUp = (e: React.FormEvent) => {
		e.preventDefault();
		setLoadingState(true);
		signUp(form.email, form.password)
			.catch(err => setError(err))
			.finally(() => {
				resetForm();
				setLoadingState(false);
			});
	};

	return (
		<AuthFormTemplate onSubmit={onSignUp} isLoading={isLoading} error={error}>
			<div className={styles.container__form__input}>
				<label htmlFor="email">Email</label>
				<Input
					type="email"
					id="email"
					value={form.email}
					onChange={e => setField('email', e.target.value)}
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
					disabled={isLoading}
					required
				/>
			</div>
			<div className={styles.container__form__buttons}>
				<Button type="submit" disabled={isLoading}>
					Sign up
				</Button>
				<a onClick={() => toggleAuthMode('LOG IN')}>Already have account?</a>
			</div>
		</AuthFormTemplate>
	);
};

export default SignUpForm;
