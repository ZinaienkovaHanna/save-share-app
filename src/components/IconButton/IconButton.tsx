import { FC } from 'react';
import Icon from '@mdi/react';

import styles from './IconButton.module.css';

interface IconButtonProps {
    iconPath: string;
    iconClassName?: string;
    onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({ onClick, iconPath, iconClassName }) => {
    return (
        <button
            className={`${styles.button} ${iconClassName ? styles[iconClassName] : ''}`}
            onClick={onClick}
        >
            <Icon path={iconPath} size={0.8} />
        </button>
    );
};

export default IconButton;
