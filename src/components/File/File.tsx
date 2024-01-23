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
import { File as FileType } from '../../types/types';

import styles from './File.module.css';

interface FileProps {
    file: FileType;
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
    onSave: (id: string, newName: string) => void;
    onArchive: (id: string) => void;
    onFavorite: (id: string) => void;
    onShare: (id: string) => void;
    onSelect: (id: string) => void;
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
            <IconButton
                iconPath={file.isSelected ? mdiCheckboxOutline : mdiCheckboxBlankOutline}
                onClick={() => onSelect(file.id)}
            />

            <IconButton
                iconPath={file.isFavorite ? mdiStar : mdiStarOutline}
                onClick={() => onFavorite(file.id)}
            />

            <div>
                {file.isEditingName ? (
                    <input
                        className={styles.name_input}
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') onSave(file.id, newName);
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
                    <IconButton iconPath={mdiRename} onClick={() => onEdit(file.id)} />
                    {/* TODO: */}
                    <IconButton iconPath={mdiExportVariant} onClick={() => onShare(file.id)} />
                    <IconButton
                        iconPath={file.isArchive ? mdiArchive : mdiArchiveOutline}
                        onClick={() => onArchive(file.id)}
                    />
                    <IconButton iconPath={mdiDelete} onClick={() => onDelete(file.id)} />
                </div>
            )}
        </div>
    );
};

export default File;
