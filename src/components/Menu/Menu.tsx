import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css';

const Menu: FC = () => {
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

                        <li>
                            <Link to="/login" className={styles.link}>
                                Log in
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Menu;
