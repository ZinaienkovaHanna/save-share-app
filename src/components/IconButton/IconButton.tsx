import { FC } from 'react';
import Icon from '@mdi/react';

import styles from './IconButton.module.css';

interface IconButtonProps {
    iconPath: string;
    iconSize: number;
    iconClassName?: string;
    onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({ onClick, iconPath, iconSize, iconClassName }) => {
    return (
        <button
            className={`${styles.button} ${iconClassName ? styles[iconClassName] : ''}`}
            onClick={onClick}
        >
            <Icon path={iconPath} size={iconSize} />
        </button>
    );
};

export default IconButton;
