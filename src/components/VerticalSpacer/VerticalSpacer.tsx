import { FC } from 'react';

import styles from './VerticalSpacer.module.css';

interface VerticalSpacerProps {
    className?: string;
}

const VerticalSpacer: FC<VerticalSpacerProps> = ({ className }) => {
    return <div className={`${styles.spacer} ${className ? styles[className] : ''}`} />;
};

export default VerticalSpacer;
