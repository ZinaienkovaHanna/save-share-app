import { FC } from 'react';
import Icon from '@mdi/react';

import styles from './IconButton.module.css';

interface IconButtonProps {
    iconPath: string;
    onClick: () => void;
    tooltip: string;
}

const IconButton: FC<IconButtonProps> = ({ onClick, iconPath, tooltip }) => {
    return (
        <button className={styles.button} onClick={onClick} title={tooltip}>
            <Icon path={iconPath} size={0.8} />
        </button>
    );
};

export default IconButton;
