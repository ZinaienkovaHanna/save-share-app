import { FC, useState } from 'react';
import { mdiWindowClose } from '@mdi/js';
import IconButton from '../IconButton';
import Button from '../Button';

import styles from './SignupForm.module.css';

interface SignupFormFormProps {
    onClose: () => void;
    openLoginForm: () => void;
}

const SignupForm: FC<SignupFormFormProps> = ({ onClose, openLoginForm }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <IconButton
                    onClick={onClose}
                    iconPath={mdiWindowClose}
                    iconSize={1}
                    iconClassName="close"
                />
                <h3 className={styles.title}>Register:</h3>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your name"
                        autoComplete="username"
                    />
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
                        placeholder="Create a password"
                        autoComplete="current-password"
                    />

                    <div className={styles.checkbox_container}>
                        <input
                            type="checkbox"
                            id="termsAndConditions"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        <label htmlFor="termsAndConditions">
                            Signing up signifies that you have read and agree to the Terms of
                            Service and our Privacy Policy. Cookie Preferences.
                        </label>
                    </div>

                    <Button text="Create an account" onClick={() => {}} />
                </form>

                <div className={styles.container_button}>
                    <Button
                        text="Already have an account?"
                        onClick={openLoginForm}
                        buttonClassName="text_button"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
