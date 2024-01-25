import { FC, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import VerticalSpacer from '../VerticalSpacer';
import { validateLoginForm } from '../../utils/validationLoginForm';

import styles from './LoginForm.module.css';

interface Error {
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<Error>({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { isValid, errors } = validateLoginForm(email, password);

        if (isValid) {
            console.log('Login submitted with:', email, password);
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

            <VerticalSpacer />

            <Input
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({
                        ...errors,
                        password: '',
                    });
                }}
                placeholder="Enter your password"
                autoComplete="current-password"
                error={errors.password}
            />

            <VerticalSpacer className="spacer_large" />

            <Button text="Log In" type="submit" />
        </form>
    );
};

export default LoginForm;
