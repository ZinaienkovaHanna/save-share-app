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
} from '../../store/reducers/filesReducer';

import styles from './FileList.module.css';

const FileList: FC = () => {
    const { files, selectedFiles } = useAppSelector((state) => state.files);
    const isAnyFileSelected = files.some((file) => file.isSelected);
    const isAnyFileFavorite = files.some((file) => file.isFavorite);

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
        dispatch(updateFavoriteForAllFiles(!isAnyFileFavorite));
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
            <TopBar
                isAnyFileSelected={isAnyFileSelected}
                selectedFiles={selectedFiles}
                onSelectAll={handleUpdateSelectedFiles}
                onFavoriteAll={handleToggleFavoriteSelectedFiles}
                onDeleteAll={handleDeleteSelectedFiles}
            />

            <div className={styles.container_list}>
                {files.map((file) => (
                    <File
                        key={file.id}
                        file={file}
                        onSelect={handleToggleSelectedFile}
                        onFavorite={handleToggleFavoriteFile}
                        onEdit={handleEditFileName}
                        onSave={(newName) => handleSaveFileName(file.id, newName)}
                        onShare={handleShareFile}
                        onArchive={handleToggleArchiveFile}
                        onDelete={handleDeleteFile}
                    />
                ))}
            </div>
        </div>
    );
};

export default FileList;