import { FC, useState } from 'react';
import { mdiWindowClose } from '@mdi/js';
import IconButton from '../IconButton/IconButton';
import Button from '../Button';

import styles from './ResetPasswordForm.module.css';

interface ResetPasswordFormProps {
    onClose: () => void;
    openSignupForm: () => void;
    openLoginForm: () => void;
}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({
    onClose,
    openSignupForm,
    openLoginForm,
}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <IconButton
                    onClick={onClose}
                    iconPath={mdiWindowClose}
                    iconSize={1}
                    iconClassName="close"
                />
                <h3 className={styles.title}>Reset Password</h3>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your email address"
                        autoComplete="email"
                    />

                    <Button text="Reset Password" onClick={() => {}} />
                </form>

                <div className={styles.container_button}>
                    <Button text="Log In" onClick={openLoginForm} buttonClassName="text_button" />
                    <Button text="Sign Up" onClick={openSignupForm} buttonClassName="text_button" />
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
