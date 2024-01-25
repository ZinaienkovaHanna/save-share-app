import { FC } from 'react';

import styles from './TitleForm.module.css';

interface TitleFormProps {
    text: string;
}

const TitleForm: FC<TitleFormProps> = ({ text }) => {
    return <h3 className={styles.title}>{text}</h3>;
};

export default TitleForm;
