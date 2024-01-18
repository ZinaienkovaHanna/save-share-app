import { FC, useState } from 'react';
import { mdiWindowClose } from '@mdi/js';
import IconButton from '../IconButton/IconButton';
import Button from '../Button';

import styles from './LoginForm.module.css';

interface LoginFormProps {
    onClose: () => void;
    openSignupForm: () => void;
    openResetPasswordForm: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onClose, openSignupForm, openResetPasswordForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <IconButton onClick={onClose} iconPath={mdiWindowClose} iconClassName="close" />
                <h3 className={styles.title}>Log in to your account</h3>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your email address"
                        autoComplete="email"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />

                    <Button text="Log In" onClick={() => {}} />
                </form>

                <div className={styles.container_button}>
                    <Button
                        text="Forgot password?"
                        onClick={openResetPasswordForm}
                        buttonClassName="text_button"
                    />
                    <Button
                        text="Sign Up"
                        onClick={openSignupForm}
                        buttonClassName="text_button_color"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
