import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css';
import LoginForm from '../LoginForm';
import Button from '../Button';

const Menu: FC = () => {
    const [isLoginFormOpen, setIsLoginForm] = useState(false);

    const openLoginForm = () => {
        setIsLoginForm(true);
    };

    const closeLoginForm = () => {
        setIsLoginForm(false);
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

                        <Button onClick={openLoginForm} text="Log in" />
                    </ul>
                </nav>
            </div>
            {isLoginFormOpen && <LoginForm onClose={closeLoginForm} />}
        </>
    );
};

export default Menu;
