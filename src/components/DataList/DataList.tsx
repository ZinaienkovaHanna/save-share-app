import { FC } from 'react';
import DataItem from '../DataItem';
import { Item } from '../../types/types';

import styles from './DataList.module.css';

interface DataListProps {
    items: Item[];
    handleClearSelectedAll: () => void;
}

const DataList: FC<DataListProps> = ({ items, handleClearSelectedAll }) => {
    return (
        <div className={styles.container}>
            {items.map((item) => (
                <DataItem
                    key={item.id}
                    item={item}
                    handleClearSelectedAll={handleClearSelectedAll}
                />
            ))}
        </div>
    );
};

export default DataList;
