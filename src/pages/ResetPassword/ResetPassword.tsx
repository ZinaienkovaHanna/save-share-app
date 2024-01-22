import { FC } from 'react';
import { Link } from 'react-router-dom';
import TitleForm from '../../components/TitleForm';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import VerticalSpacer from '../../components/VerticalSpacer';

import styles from './ResetPassword.module.css';

const ResetPassword: FC = () => {
    return (
        <div className={styles.container}>
            <VerticalSpacer />

            <TitleForm text="Reset Password" />

            <VerticalSpacer />

            <ResetPasswordForm />

            <VerticalSpacer />

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
