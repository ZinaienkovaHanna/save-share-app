import { FC } from 'react';
import Icon from '@mdi/react';

import styles from './InputCheckbox.module.css';

interface InputCheckboxProps {
    checked?: boolean;
    onChange: () => void;
    iconPath: any;
    iconSize: number;
    textLabel?: string;
    id: string;
    tooltip: string;
}

const InputCheckbox: FC<InputCheckboxProps> = ({
    checked,
    onChange,
    iconPath,
    iconSize,
    textLabel,
    id,
    tooltip,
}) => {
    return (
        <label htmlFor={id} className={styles.container} title={tooltip}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                className={styles.input}
            />
            <Icon path={iconPath} size={iconSize} />
            {textLabel}
        </label>
    );
};

export default InputCheckbox;
