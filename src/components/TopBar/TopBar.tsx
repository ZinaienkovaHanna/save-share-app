import { FC } from 'react';
import {
    mdiUpdate,
    mdiRename,
    mdiExportVariant,
    mdiStar,
    mdiStarOutline,
    mdiDelete,
    mdiArchive,
    mdiArchiveOutline,
} from '@mdi/js';
import IconButton from '../IconButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    addArchiveToSelectedItems,
    addFavoriteToSelectedItems,
    removeArchiveFromSelectedItems,
    removeFavoriteFromSelectedItems,
    deleteSelectedItems,
    activateEditingNameForSelectedItems,
    selectAllItems,
    deselectAllItems,
} from '../../store/reducer';

import styles from './TopBar.module.css';

interface TopBarProps {
    handleToggleSelectedAll: () => void;
    isSelectedAll: boolean;
}

const TopBar: FC<TopBarProps> = ({ handleToggleSelectedAll, isSelectedAll }) => {
    const { items } = useAppSelector((state) => state.items);
    const dispatch = useAppDispatch();

    const isAnyItemSelected = items.some((item) => item.isSelected);

    const handleToggleSelectedAllItems = () => {
        if (!isSelectedAll) {
            dispatch(selectAllItems());
        } else {
            dispatch(deselectAllItems());
        }

        handleToggleSelectedAll();
    };

    const handleAddFavoriteItems = () => {
        dispatch(addFavoriteToSelectedItems());
    };

    const handleDeleteFavoriteItems = () => {
        dispatch(removeFavoriteFromSelectedItems());
    };

    const handleAddArchiveItems = () => {
        dispatch(addArchiveToSelectedItems());
    };

    const handleDeleteArchiveItems = () => {
        dispatch(removeArchiveFromSelectedItems());
    };

    const handleDeleteSelectedItems = () => {
        dispatch(deleteSelectedItems());
    };

    const handleSetIsEditingNameToSelectedItems = () => {
        dispatch(activateEditingNameForSelectedItems());
    };

    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                checked={isSelectedAll}
                onChange={handleToggleSelectedAllItems}
            />
            {/* TODO: */}
            <IconButton iconPath={mdiUpdate} onClick={() => {}} />

            {isAnyItemSelected && (
                <>
                    <IconButton iconPath={mdiStarOutline} onClick={handleDeleteFavoriteItems} />
                    <IconButton iconPath={mdiStar} onClick={handleAddFavoriteItems} />
                    <IconButton
                        iconPath={mdiRename}
                        onClick={handleSetIsEditingNameToSelectedItems}
                    />
                    {/* TODO: */}
                    <IconButton iconPath={mdiExportVariant} onClick={() => {}} />
                    <IconButton iconPath={mdiArchiveOutline} onClick={handleDeleteArchiveItems} />
                    <IconButton iconPath={mdiArchive} onClick={handleAddArchiveItems} />
                    <IconButton iconPath={mdiDelete} onClick={handleDeleteSelectedItems} />
                </>
            )}
        </div>
    );
};

export default TopBar;
