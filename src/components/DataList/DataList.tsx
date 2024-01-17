import { FC } from 'react';
import DataItem from '../DataItem';
import { Item } from '../../types/types';

import styles from './DataList.module.css';

interface DataListProps {
    items: Item[];
}

const DataList: FC<DataListProps> = ({ items }) => {
    return (
        <div className={styles.container}>
            {items.map((item) => (
                <DataItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default DataList;
