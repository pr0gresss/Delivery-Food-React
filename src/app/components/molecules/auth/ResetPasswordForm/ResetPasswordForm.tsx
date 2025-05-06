import { Input, Button } from '@components/atoms';
import styles from '../Form.module.scss';
import { useAuth, useFormState } from '@hooks';
import React, { useState } from 'react';
import { AuthFormTemplate } from '@components/templates';
import { IAuthFormProps } from '../IAuthFormProps';

const ResetPasswordForm: React.FC<IAuthFormProps> = ({ toggleAuthMode }) => {
	const [form, setField, resetForm] = useFormState({ email: '' });
	const [isLoading, setLoadingState] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	const { resetPassword } = useAuth();

	const onResetPassword = (e: React.FormEvent) => {
		e.preventDefault();
		setLoadingState(true);
		resetPassword(form.email)
			.catch(err => setError(err))
			.finally(() => {
				resetForm();
				setLoadingState(false);
			});
	};

	return (
		<AuthFormTemplate
			onSubmit={onResetPassword}
			isLoading={isLoading}
			error={error}
		>
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
			<div className={styles.container__form__buttons}>
				<Button variant="outline" onClick={() => toggleAuthMode('LOG IN')}>
					Back
				</Button>
				<Button type="submit" disabled={isLoading}>
					Send email
				</Button>
			</div>
		</AuthFormTemplate>
	);
};

export default ResetPasswordForm;
