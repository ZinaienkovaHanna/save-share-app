import { FC } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import TitleForm from '../../components/TitleForm';

import styles from './Login.module.css';

const Login: FC = () => {
    const handleLoginSubmit = (email: string, password: string) => {
        console.log('Login submitted with:', email, password);
    };

    return (
        <div className={styles.container}>
            <TitleForm text="Log in to your account" />
            <Form type="login" textButton="Log In" onSubmit={handleLoginSubmit} />
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
