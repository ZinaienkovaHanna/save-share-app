import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

import styles from './Form.module.css';

interface FormProps {
    type: string;
    title: string;
    textButton: string;
    onClick: () => void;
    className?: string;
}

const Form: FC<FormProps> = ({ type, title, textButton, onClick, className }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(true);

    return (
        <div className={`${styles.container} ${className ? styles[className] : ''}`}>
            <h3 className={styles.title}>{title}</h3>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                {type === 'signup' && (
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your name"
                        autoComplete="username"
                    />
                )}

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    placeholder="Enter your email address"
                    autoComplete="email"
                />

                {(type === 'signup' || type === 'login') && (
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder={type === 'login' ? 'Enter your password' : 'Create a password'}
                        autoComplete="current-password"
                    />
                )}

                {type === 'signup' && (
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
                )}

                <Button text={textButton} onClick={onClick} />
            </form>

            <div className={styles.container_link}>
                {type === 'login' && (
                    <>
                        <Link to="/reset_password" className={styles.link}>
                            Forgot password?
                        </Link>
                        <Link to="/signup" className={`${styles.link} ${styles.color}`}>
                            Sign Up
                        </Link>
                    </>
                )}

                {type === 'signup' && (
                    <Link to="/login" className={styles.link}>
                        Already have an account?
                    </Link>
                )}

                {type === 'resetPassword' && (
                    <>
                        <Link to="/login" className={styles.link}>
                            Log In
                        </Link>
                        <Link to="/signup" className={styles.link}>
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Form;
