import { FC, useState } from 'react';
import DataItem from '../DataItem';
import TopBar from '../TopBar';
import { useAppSelector } from '../../store/hooks';

import styles from './DataList.module.css';

const DataList: FC = () => {
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

            <div className={styles.container_list}>
                {items.map((item) => (
                    <DataItem
                        key={item.id}
                        item={item}
                        handleClearSelectedAll={handleClearSelectedAll}
                    />
                ))}
            </div>
        </div>
    );
};

export default DataList;
