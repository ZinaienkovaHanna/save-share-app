import { FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
    text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
    return (
        <button className={styles.button} type="submit">
            {text}
        </button>
    );
};

export default Button;
