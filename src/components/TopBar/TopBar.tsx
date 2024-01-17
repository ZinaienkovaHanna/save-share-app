import { FC, useState } from 'react';
import { mdiUpdate, mdiRename, mdiExportVariant, mdiStar, mdiDelete, mdiArchive } from '@mdi/js';
import IconButton from '../IconButton';

import styles from './TopBar.module.css';

const TopBar: FC = () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => setIsSelected(!isSelected)}
            />

            <IconButton iconPath={mdiUpdate} iconSize={1} />

            {isSelected && (
                <>
                    <IconButton iconPath={mdiStar} iconSize={1} />
                    <IconButton iconPath={mdiRename} iconSize={1} />
                    <IconButton iconPath={mdiExportVariant} iconSize={1} />
                    <IconButton iconPath={mdiArchive} iconSize={1} />
                    <IconButton iconPath={mdiDelete} iconSize={1} />
                </>
            )}
        </div>
    );
};

export default TopBar;
