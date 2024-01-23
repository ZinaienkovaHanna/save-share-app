import { FC } from 'react';
import {
    mdiStar,
    mdiDelete,
    mdiMinusBoxOutline,
    mdiCheckboxOutline,
    mdiCheckboxBlankOutline,
} from '@mdi/js';
import IconButton from '../IconButton';

import styles from './TopBar.module.css';

interface TopBarProps {
    isAnyFileSelected: boolean;
    selectedFiles: string;
    onSelectAll: () => void;
    onFavoriteAll: () => void;
    onDeleteAll: () => void;
}

const TopBar: FC<TopBarProps> = ({
    isAnyFileSelected,
    selectedFiles,
    onSelectAll,
    onFavoriteAll,
    onDeleteAll,
}) => {
    return (
        <div className={styles.container}>
            <IconButton
                iconPath={
                    selectedFiles === 'all'
                        ? mdiCheckboxOutline
                        : selectedFiles === 'none'
                        ? mdiCheckboxBlankOutline
                        : mdiMinusBoxOutline
                }
                onClick={onSelectAll}
            />

            {isAnyFileSelected && (
                <>
                    <IconButton iconPath={mdiStar} onClick={onFavoriteAll} />
                    <IconButton iconPath={mdiDelete} onClick={onDeleteAll} />
                </>
            )}
        </div>
    );
};

export default TopBar;
