import { FC } from 'react';

import styles from './Input.module.css';

interface InputProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    autoComplete: string;
    error: string;
}

const Input: FC<InputProps> = ({ type, value, onChange, placeholder, autoComplete, error }) => {
    return (
        <>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={styles.input}
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
            {{ error } && <p className={styles.error}>{error}</p>}
        </>
    );
};

export default Input;
