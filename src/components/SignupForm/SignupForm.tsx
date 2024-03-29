import { FC, useState } from 'react';
import { mdiCheckboxOutline, mdiCheckboxBlankOutline } from '@mdi/js';
import Button from '../Button';
import Input from '../Input';
import VerticalSpacer from '../VerticalSpacer';
import InputCheckbox from '../InputCheckbox';
import { validateSignupForm } from '../../utils/validationSignupForm';

import styles from './Signup.module.css';

interface Error {
    username: string;
    email: string;
    password: string;
    terms: string;
    passwordConfirm: string;
}

const SignupForm: FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(true);
    const [errors, setErrors] = useState<Error>({
        username: '',
        email: '',
        password: '',
        passwordConfirm,
        terms: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { isValid, errors } = validateSignupForm(
            username,
            email,
            password,
            passwordConfirm,
            termsAccepted
        );

        if (isValid) {
            console.log('Signup submitted with:', username, email, password);
        } else {
            setErrors(errors);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <VerticalSpacer />

            <Input
                type="text"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                    setErrors({
                        ...errors,
                        username: '',
                    });
                }}
                placeholder="Enter your name"
                autoComplete="username"
                error={errors.username}
            />

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
                placeholder="Create a password"
                autoComplete="new-password"
                error={errors.password}
            />

            <VerticalSpacer />

            <Input
                type="password"
                value={passwordConfirm}
                onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                    setErrors({
                        ...errors,
                        passwordConfirm: '',
                    });
                }}
                placeholder="Confirm your password"
                autoComplete="new-password"
                error={errors.passwordConfirm}
            />

            <VerticalSpacer />

            <div className={styles.checkbox_container}>
                <InputCheckbox
                    checked={termsAccepted}
                    onChange={() => {
                        setTermsAccepted(!termsAccepted);
                        setErrors({
                            ...errors,
                            terms: '',
                        });
                    }}
                    textLabel="Signing up signifies that you have read and agree to the Terms of Service and
                    our Privacy Policy. Cookie Preferences."
                    id="termsAndConditions"
                    iconSize={1.75}
                    iconPath={termsAccepted ? mdiCheckboxOutline : mdiCheckboxBlankOutline}
                    tooltip="Choose"
                />
                {errors.terms && <p className={styles.error}>{errors.terms}</p>}
            </div>

            <VerticalSpacer className="spacer_large" />

            <Button text="Create an account" type="submit" />
        </form>
    );
};

export default SignupForm;
