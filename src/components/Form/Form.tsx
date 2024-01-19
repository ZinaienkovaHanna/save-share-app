import { FC, useState } from 'react';
import Button from '../Button';
import { validateForm } from '../../utils/validationForm';

import styles from './Form.module.css';

interface FormProps {
    type: string;
    textButton: string;
    onSubmit?: any;
}

interface Error {
    username?: string;
    email?: string;
    password?: string;
    terms?: string;
}

const Form: FC<FormProps> = ({ type, textButton, onSubmit }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(true);
    const [errors, setErrors] = useState<Error>({
        username: '',
        email: '',
        password: '',
        terms: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { isValid, errors } = validateForm(type, username, termsAccepted, email, password);

        if (isValid) {
            if (type === 'login') onSubmit(email, password);
            if (type === 'signup') onSubmit(username, email, password);
            if (type === 'resetPassword') onSubmit(email);
        } else {
            setErrors(errors);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {type === 'signup' && (
                <>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your name"
                        autoComplete="username"
                    />
                    {errors.username && <p className={styles.error}>{errors.username}</p>}
                </>
            )}

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="Enter your email address"
                autoComplete="email"
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            {(type === 'signup' || type === 'login') && (
                <>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder={type === 'login' ? 'Enter your password' : 'Create a password'}
                        autoComplete="current-password"
                    />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                </>
            )}

            {type === 'signup' && (
                <>
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
                    {errors.terms && <p className={styles.error}>{errors.terms}</p>}
                </>
            )}

            <Button text={textButton} />
        </form>
    );
};

export default Form;
