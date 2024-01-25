import { FC } from 'react';
import {
    mdiStar,
    mdiDelete,
    mdiMinusBoxOutline,
    mdiCheckboxOutline,
    mdiCheckboxBlankOutline,
    mdiStarOutline,
} from '@mdi/js';
import IconButton from '../IconButton';
import InputCheckbox from '../InputCheckbox';

import styles from './TopBar.module.css';

interface TopBarProps {
    isAnyFileSelected: boolean;
    selectedFavoriteFiles: boolean;
    selectedFiles: string;
    onSelectAll: () => void;
    onFavoriteAll: () => void;
    onDeleteAll: () => void;
}

const TopBar: FC<TopBarProps> = ({
    isAnyFileSelected,
    selectedFiles,
    selectedFavoriteFiles,
    onSelectAll,
    onFavoriteAll,
    onDeleteAll,
}) => {
    return (
        <div className={styles.container}>
            <InputCheckbox
                iconPath={
                    selectedFiles === 'all'
                        ? mdiCheckboxOutline
                        : selectedFiles === 'none'
                        ? mdiCheckboxBlankOutline
                        : mdiMinusBoxOutline
                }
                onChange={onSelectAll}
                id="selectAll"
                iconSize={0.8}
                tooltip="Choose"
            />

            {isAnyFileSelected && (
                <>
                    <IconButton
                        iconPath={selectedFavoriteFiles ? mdiStar : mdiStarOutline}
                        onClick={onFavoriteAll}
                        tooltip={
                            selectedFavoriteFiles ? 'Remove from Favorites' : 'Add to Favorites'
                        }
                    />

                    <IconButton iconPath={mdiDelete} onClick={onDeleteAll} tooltip="Delete" />
                </>
            )}
        </div>
    );
};

export default TopBar;
