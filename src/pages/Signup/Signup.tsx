import { FC } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import TitleForm from '../../components/TitleForm';

import styles from './Signup.module.css';

const Signup: FC = () => {
    const handleSignupSubmit = (username: string, email: string, password: string) => {
        console.log('Signup submitted with:', username, email, password);
    };

    return (
        <div className={styles.container}>
            <TitleForm text="Register" />
            <Form type="signup" textButton="Create an account" onSubmit={handleSignupSubmit} />
            <div className={styles.container_link}>
                <Link to="/login" className={styles.link}>
                    Already have an account?
                </Link>
            </div>
        </div>
    );
};

export default Signup;
