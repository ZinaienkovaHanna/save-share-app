import { FC, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import VerticalSpacer from '../VerticalSpacer';
import { validateResetPasswordForm } from '../../utils/validationResetPassword';

import styles from './ResetPasswordForm.module.css';

interface Error {
    email: string;
}

const ResetPasswordForm: FC = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<Error>({
        email: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { isValid, errors } = validateResetPasswordForm(email);

        if (isValid) {
            console.log('Reset password submitted with:', email);
        } else {
            setErrors(errors);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <VerticalSpacer />

            <Input
                type="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({
                        ...errors,
                        email: '',
                    });
                }}
                placeholder="Enter your email address"
                autoComplete="email"
                error={errors.email}
            />

            <VerticalSpacer className="spacer_large" />

            <Button text="Reset Password" type="submit" />
        </form>
    );
};

export default ResetPasswordForm;
