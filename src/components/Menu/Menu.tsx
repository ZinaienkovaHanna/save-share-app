import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAuth } from '../../store/hooks';
import { removeUser } from '../../store/reducers/userReducer';

import styles from './Menu.module.css';

const Menu: FC = () => {
    const dispatch = useAppDispatch();

    const { isAuth, email } = useAuth();

    return (
        <div className={styles.container}>
            <nav>
                <ul className={styles.wrapper}>
                    <li>
                        <Link to="/" className={styles.logo}>
                            Logo
                        </Link>
                    </li>

                    <li>
                        {isAuth ? (
                            <button
                                onClick={() => dispatch(removeUser())}
                                className={styles.button}
                            >
                                Log out {email}
                            </button>
                        ) : (
                            <Link to="/login" className={styles.link}>
                                Log in
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
