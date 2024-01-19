import { FC } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import TitleForm from '../../components/TitleForm';

import styles from './ResetPassword.module.css';

const ResetPassword: FC = () => {
    const handleResetPasswordSubmit = (email: string) => {
        console.log('Reset password submitted with:', email);
    };

    return (
        <div className={styles.container}>
            <TitleForm text="Reset Password" />
            <Form
                type="resetPassword"
                textButton="Reset Password"
                onSubmit={handleResetPasswordSubmit}
            />
            <div className={styles.container_link}>
                <Link to="/login" className={styles.link}>
                    Log In
                </Link>
                <Link to="/signup" className={styles.link}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default ResetPassword;
