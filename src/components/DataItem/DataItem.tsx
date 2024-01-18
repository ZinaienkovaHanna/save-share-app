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
import { useAppDispatch } from '../../store/hooks';
import {
    updateItemName,
    deleteItem,
    toggleArchiveItem,
    toggleFavoriteItem,
    toogleSelectedItem,
    activateEditingName,
    deactivateEditingName,
} from '../../store/reducer';
import { Item } from '../../types/types';

import styles from './DataItem.module.css';

interface DataItemProps {
    item: Item;
    handleClearSelectedAll: () => void;
}

const DataItem: FC<DataItemProps> = ({ item, handleClearSelectedAll }) => {
    const [newName, setNewName] = useState(item.name);
    const dispatch = useAppDispatch();

    const handleToggleSelectedItem = () => {
        handleClearSelectedAll();
        dispatch(toogleSelectedItem(item.id));
    };

    const handleToggleFavoriteItem = () => {
        dispatch(toggleFavoriteItem(item.id));
    };

    const handleToggleArchiveItem = () => {
        dispatch(toggleArchiveItem(item.id));
    };

    const handleDeleteItem = () => {
        dispatch(deleteItem(item.id));
    };

    const handleChangeItemName = () => {
        dispatch(activateEditingName(item.id));
    };

    const handleSaveItemName = () => {
        dispatch(updateItemName({ id: item.id, newName }));
        dispatch(deactivateEditingName(item.id));
    };

    return (
        <div className={styles.container}>
            <input type="checkbox" checked={item.isSelected} onChange={handleToggleSelectedItem} />
            <IconButton
                iconPath={item.isFavorite ? mdiStar : mdiStarOutline}
                onClick={handleToggleFavoriteItem}
            />

            <div>
                {item.isEditingName ? (
                    <input
                        className={styles.name_input}
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveItemName();
                        }}
                    />
                ) : (
                    <h4 className={styles.name}>{newName}</h4>
                )}

                <p className={styles.item_size}>{item.fileSize}</p>
            </div>

            <p className={styles.text}>{item.text}</p>

            {item.isSelected && (
                <div className={styles.action_container}>
                    <IconButton iconPath={mdiRename} onClick={handleChangeItemName} />
                    {/* TODO: */}
                    <IconButton iconPath={mdiExportVariant} />
                    <IconButton
                        iconPath={item.isArchive ? mdiArchive : mdiArchiveOutline}
                        onClick={handleToggleArchiveItem}
                    />
                    <IconButton iconPath={mdiDelete} onClick={handleDeleteItem} />
                </div>
            )}
        </div>
    );
};

export default DataItem;
