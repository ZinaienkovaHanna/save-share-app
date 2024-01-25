import { FC, useState } from 'react';
import {
    mdiRename,
    mdiExportVariant,
    mdiStarOutline,
    mdiStar,
    mdiDelete,
    mdiArchiveOutline,
    mdiArchive,
    mdiCheckboxOutline,
    mdiCheckboxBlankOutline,
} from '@mdi/js';
import IconButton from '../IconButton';
import InputCheckbox from '../InputCheckbox';
import { File as FileType } from '../../types/types';

import styles from './File.module.css';

interface FileProps {
    file: FileType;
    onDelete: () => void;
    onEdit: () => void;
    onSave: (newName: string) => void;
    onArchive: () => void;
    onFavorite: () => void;
    onShare: () => void;
    onSelect: () => void;
}

const File: FC<FileProps> = ({
    file,
    onDelete,
    onEdit,
    onSave,
    onArchive,
    onFavorite,
    onShare,
    onSelect,
}) => {
    const [newName, setNewName] = useState(file.name);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <InputCheckbox
                checked={file.isSelected}
                onChange={onSelect}
                id={file.id}
                iconSize={0.8}
                iconPath={file.isSelected ? mdiCheckboxOutline : mdiCheckboxBlankOutline}
                tooltip="Choose"
            />

            <IconButton
                iconPath={file.isFavorite ? mdiStar : mdiStarOutline}
                onClick={onFavorite}
                tooltip={file.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            />

            <div>
                {file.isEditingName ? (
                    <input
                        className={styles.name_input}
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') onSave(newName);
                        }}
                    />
                ) : (
                    <h4 className={styles.name}>{newName}</h4>
                )}

                <p className={styles.file_size}>{file.fileSize}</p>
            </div>

            <p className={styles.text}>{file.text}</p>

            {(file.isSelected || isHovered) && (
                <div className={styles.action_container}>
                    <IconButton iconPath={mdiRename} onClick={onEdit} tooltip="Edit Name" />
                    <IconButton iconPath={mdiExportVariant} onClick={onShare} tooltip="Share" />
                    <IconButton
                        iconPath={file.isArchive ? mdiArchive : mdiArchiveOutline}
                        onClick={onArchive}
                        tooltip={file.isArchive ? 'Unarchive' : 'Archive'}
                    />
                    <IconButton iconPath={mdiDelete} onClick={onDelete} tooltip="Delete" />
                </div>
            )}
        </div>
    );
};

export default File;
