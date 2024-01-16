import { FC, useState } from 'react';
import { mdiWindowClose } from '@mdi/js';

import styles from './LoginForm.module.css';
import IconButton from '../IconButton/IconButton';
import Button from '../Button';

interface LoginFormProps {
    onClose: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <IconButton
                    onClick={onClose}
                    iconPath={mdiWindowClose}
                    iconSize={1}
                    iconClassName="close"
                />
                <h3 className={styles.title}>Log in to proceed</h3>

                <form className={styles.form}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your email"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your password"
                    />

                    <Button text="Login" onClick={() => {}} buttonClassName="login" />

                    <div className={styles.container_button}>
                        <Button
                            text="Forgot password?"
                            onClick={() => {}}
                            buttonClassName="forgot_password"
                        />
                        <Button
                            text="Registration"
                            onClick={() => {}}
                            buttonClassName="registration"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
