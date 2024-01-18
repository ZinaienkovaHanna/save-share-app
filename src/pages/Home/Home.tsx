import { FC, useState } from 'react';
import TopBar from '../../components/TopBar';
import DataList from '../../components/DataList';
import { useAppSelector } from '../../store/hooks';

import styles from './Home.module.css';

const Home: FC = () => {
    const { items } = useAppSelector((state) => state.items);
    const [isSelectedAll, setIsSelectedAll] = useState(false);

    const handleToggleSelectedAll = () => {
        setIsSelectedAll(!isSelectedAll);
    };

    const handleClearSelectedAll = () => {
        setIsSelectedAll(false);
    };

    return (
        <div className={styles.container}>
            <TopBar
                handleToggleSelectedAll={handleToggleSelectedAll}
                isSelectedAll={isSelectedAll}
            />
            <DataList items={items} handleClearSelectedAll={handleClearSelectedAll} />
        </div>
    );
};

export default Home;
