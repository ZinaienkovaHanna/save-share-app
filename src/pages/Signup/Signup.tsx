import { FC } from 'react';
import { Link } from 'react-router-dom';
import TitleForm from '../../components/TitleForm';
import SignupForm from '../../components/SignupForm';

import styles from './Signup.module.css';

const Signup: FC = () => {
    return (
        <div className={styles.container}>
            <TitleForm text="Register" />
            <SignupForm />
            <div className={styles.container_link}>
                <Link to="/login" className={styles.link}>
                    Already have an account?
                </Link>
            </div>
        </div>
    );
};

export default Signup;
