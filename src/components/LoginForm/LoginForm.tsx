import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button';
import Input from '../Input';
import VerticalSpacer from '../VerticalSpacer';
import { validateLoginForm } from '../../utils/validationLoginForm';
import { useAppDispatch } from '../../store/hooks';
import { setUser } from '../../store/reducers/userReducer';
// import { login } from '../../services/authService';
import { findUserByEmail } from '../../utils/findUserByEmail';

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

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { isValid, errors } = validateLoginForm(email, password);

        if (isValid) {
            try {
                // FIXME:
                // const { token, id } = await login(email, password);
                const { token, id } = findUserByEmail(email);
                console.log('Login submitted with:', email, password);
                dispatch(setUser({ email, token, id }));
                navigate('/');
            } catch (error) {
                setErrors({ email: 'Email failed', password: '' });
            }
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
