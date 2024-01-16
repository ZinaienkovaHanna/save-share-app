import { FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
    buttonClassName?: string;
}

const Button: FC<ButtonProps> = ({ text, onClick, buttonClassName }) => {
    return (
        <button
            className={`${styles.button} ${buttonClassName ? styles[buttonClassName] : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
