import { FC } from 'react';
import { Link } from 'react-router-dom';
import TitleForm from '../../components/TitleForm';
import ResetPasswordForm from '../../components/ResetPasswordForm';

import styles from './ResetPassword.module.css';

const ResetPassword: FC = () => {
    return (
        <div className={styles.container}>
            <TitleForm text="Reset Password" />
            <ResetPasswordForm />
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
