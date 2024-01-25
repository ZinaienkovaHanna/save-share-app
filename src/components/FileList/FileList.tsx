import { FC } from 'react';
import File from '../File';
import TopBar from '../TopBar';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    updateFileName,
    deleteFile,
    toggleArchiveFile,
    toggleFavoriteFile,
    toogleSelectedFile,
    activateEditingName,
    deactivateEditingName,
    selectAllFiles,
    deselectAllFiles,
    updateSelectedAllFiles,
    updateFavoriteForAllFiles,
    deleteSelectedFiles,
    toggleSelectedFavoriteFiles,
} from '../../store/reducers/filesReducer';

import styles from './FileList.module.css';
import VerticalSpacer from '../VerticalSpacer';

const FileList: FC = () => {
    const { files, selectedFiles, selectedFavoriteFiles } = useAppSelector((state) => state.files);
    const isAnyFileSelected = files.some((file) => file.isSelected);

    const dispatch = useAppDispatch();

    const handleUpdateSelectedFiles = () => {
        if (selectedFiles === 'none') {
            dispatch(selectAllFiles());
            dispatch(updateSelectedAllFiles('all'));
        }

        if (selectedFiles === 'all') {
            dispatch(deselectAllFiles());
            dispatch(updateSelectedAllFiles('none'));
        }

        if (selectedFiles === 'some') {
            dispatch(deselectAllFiles());
            dispatch(updateSelectedAllFiles('none'));
        }
    };

    const handleToggleFavoriteSelectedFiles = () => {
        dispatch(updateFavoriteForAllFiles(!selectedFavoriteFiles));
        dispatch(toggleSelectedFavoriteFiles());
    };

    const handleDeleteSelectedFiles = () => {
        dispatch(deleteSelectedFiles());
    };

    const handleToggleSelectedFile = (id: string) => {
        dispatch(toogleSelectedFile(id));
        dispatch(updateSelectedAllFiles('some'));
    };

    const handleToggleFavoriteFile = (id: string) => {
        dispatch(toggleFavoriteFile(id));
    };

    const handleEditFileName = (id: string) => {
        dispatch(activateEditingName(id));
    };

    const handleSaveFileName = (id: string, newName: string) => {
        dispatch(updateFileName({ id: id, newName }));
        dispatch(deactivateEditingName(id));
    };

    const handleShareFile = (id: string) => {
        /* TODO: */
        console.log(id);
    };

    const handleToggleArchiveFile = (id: string) => {
        dispatch(toggleArchiveFile(id));
    };

    const handleDeleteFile = (id: string) => {
        dispatch(deleteFile(id));
    };

    return (
        <div className={styles.container}>
            <VerticalSpacer className="spacer_large" />

            <TopBar
                isAnyFileSelected={isAnyFileSelected}
                selectedFiles={selectedFiles}
                selectedFavoriteFiles={selectedFavoriteFiles}
                onSelectAll={handleUpdateSelectedFiles}
                onFavoriteAll={handleToggleFavoriteSelectedFiles}
                onDeleteAll={handleDeleteSelectedFiles}
            />

            <VerticalSpacer className="spacer_small" />

            <div className={styles.container_list}>
                {files.map((file) => (
                    <File
                        key={file.id}
                        file={file}
                        onSelect={() => handleToggleSelectedFile(file.id)}
                        onFavorite={() => handleToggleFavoriteFile(file.id)}
                        onEdit={() => handleEditFileName(file.id)}
                        onSave={(newName) => handleSaveFileName(file.id, newName)}
                        onShare={() => handleShareFile(file.id)}
                        onArchive={() => handleToggleArchiveFile(file.id)}
                        onDelete={() => handleDeleteFile(file.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FileList;
