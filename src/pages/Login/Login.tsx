import { FC } from 'react';
import { Link } from 'react-router-dom';
import TitleForm from '../../components/TitleForm';
import LoginForm from '../../components/LoginForm';

import styles from './Login.module.css';

const Login: FC = () => {
    return (
        <div className={styles.container}>
            <TitleForm text="Log in to your account" />
            <LoginForm />
            <div className={styles.container_link}>
                <Link to="/reset_password" className={styles.link}>
                    Forgot password?
                </Link>
                <Link to="/signup" className={`${styles.link} ${styles.color}`}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default Login;
