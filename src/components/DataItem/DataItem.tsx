import { FC, useState } from 'react';
import {
    mdiRename,
    mdiExportVariant,
    mdiStarOutline,
    mdiStar,
    mdiDelete,
    mdiArchiveOutline,
    mdiArchive,
} from '@mdi/js';
import IconButton from '../IconButton';

import styles from './DataItem.module.css';

interface DataItemProps {
    item: any;
}

const DataItem: FC<DataItemProps> = ({ item }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => setIsSelected(!isSelected)}
            />
            <IconButton iconPath={mdiStarOutline} iconSize={1} />

            <div>
                <h4 className={styles.name}>{item.name}</h4>
                <p className={styles.item_size}>{item.fileSize}</p>
            </div>

            <p className={styles.text}>{item.text}</p>

            {isSelected && (
                <div className={styles.action_container}>
                    <IconButton iconPath={mdiRename} iconSize={1} />
                    <IconButton iconPath={mdiExportVariant} iconSize={1} />
                    <IconButton iconPath={mdiArchiveOutline} iconSize={1} />
                    <IconButton iconPath={mdiDelete} iconSize={1} />
                </div>
            )}
        </div>
    );
};

export default DataItem;
