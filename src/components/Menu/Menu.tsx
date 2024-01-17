import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import Button from '../Button';
import RegistrationForm from '../SignupForm';
import ResetPasswordForm from '../ResetPasswordForm';

import styles from './Menu.module.css';

const Menu: FC = () => {
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
    const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);
    const [isResetPasswordFormOpen, setIsResetPasswordFormOpen] = useState(false);

    const openLoginForm = () => {
        setIsLoginFormOpen(true);
        setIsSignupFormOpen(false);
        setIsResetPasswordFormOpen(false);
    };

    const openSignupForm = () => {
        setIsSignupFormOpen(true);
        setIsLoginFormOpen(false);
        setIsResetPasswordFormOpen(false);
    };

    const openResetPasswordForm = () => {
        setIsResetPasswordFormOpen(true);
        setIsLoginFormOpen(false);
        setIsSignupFormOpen(false);
    };

    return (
        <>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.wrapper}>
                        <li>
                            <Link to="/" className={styles.logo}>
                                Logo
                            </Link>
                        </li>

                        <Button
                            onClick={() => setIsLoginFormOpen(true)}
                            text="Log in"
                            buttonClassName="menu_button"
                        />
                    </ul>
                </nav>
            </div>

            {isLoginFormOpen && (
                <LoginForm
                    onClose={() => setIsLoginFormOpen(false)}
                    openSignupForm={openSignupForm}
                    openResetPasswordForm={openResetPasswordForm}
                />
            )}

            {isSignupFormOpen && (
                <RegistrationForm
                    onClose={() => setIsSignupFormOpen(false)}
                    openLoginForm={openLoginForm}
                />
            )}

            {isResetPasswordFormOpen && (
                <ResetPasswordForm
                    onClose={() => setIsResetPasswordFormOpen(false)}
                    openSignupForm={openSignupForm}
                    openLoginForm={openLoginForm}
                />
            )}
        </>
    );
};

export default Menu;
