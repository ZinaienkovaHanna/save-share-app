import { FC } from 'react';
import TopBar from '../../components/TopBar';
import DataList from '../../components/DataList';
import data from '../../mockedData/data.json';

import styles from './Home.module.css';

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <TopBar />
            <DataList items={data} />
        </div>
    );
};

export default Home;
