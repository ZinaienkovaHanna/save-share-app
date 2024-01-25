import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { File } from '../../types/types';
import files from '../../mockedData/files.json';

interface filesStateType {
    files: File[];
    selectedFiles: 'none' | 'some' | 'all';
    selectedFavoriteFiles: boolean;
}

const initialState: filesStateType = {
    files: files,
    selectedFiles: 'none',
    selectedFavoriteFiles: false,
};

const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        deleteFile: (state, action: PayloadAction<string>) => {
            state.files = state.files.filter((file) => file.id !== action.payload);
        },

        deleteSelectedFiles: (state) => {
            state.files = state.files.filter((file) => !file.isSelected);
        },

        toogleSelectedFile: (state, action: PayloadAction<string>) => {
            state.files = state.files.map((file) => {
                if (file.id === action.payload) {
                    return {
                        ...file,
                        isSelected: !file.isSelected,
                    };
                }
                return file;
            });
        },

        updateSelectedAllFiles: (state, action: PayloadAction<'none' | 'some' | 'all'>) => {
            state.selectedFiles = action.payload;
        },

        toggleSelectedFavoriteFiles: (state) => {
            state.selectedFavoriteFiles = !state.selectedFavoriteFiles;
        },

        selectAllFiles: (state) => {
            state.files = state.files.map((file) => {
                return {
                    ...file,
                    isSelected: true,
                };
            });
        },

        deselectAllFiles: (state) => {
            state.files = state.files.map((file) => {
                return {
                    ...file,
                    isSelected: false,
                };
            });
        },

        toggleFavoriteFile: (state, action: PayloadAction<string>) => {
            state.files = state.files.map((file) => {
                if (file.id === action.payload) {
                    return {
                        ...file,
                        isFavorite: !file.isFavorite,
                    };
                }
                return file;
            });
        },

        updateFavoriteForAllFiles: (state, action: PayloadAction<boolean>) => {
            state.files = state.files.map((file) => {
                if (file.isSelected) {
                    return {
                        ...file,
                        isFavorite: action.payload,
                    };
                }
                return file;
            });
        },

        toggleArchiveFile: (state, action: PayloadAction<string>) => {
            state.files = state.files.map((file) => {
                if (file.id === action.payload) {
                    return {
                        ...file,
                        isArchive: !file.isArchive,
                    };
                }
                return file;
            });
        },

        activateEditingName: (state, action: PayloadAction<string>) => {
            state.files = state.files.map((file) => {
                if (file.id === action.payload) {
                    return {
                        ...file,
                        isEditingName: true,
                    };
                }
                return file;
            });
        },

        deactivateEditingName: (state, action: PayloadAction<string>) => {
            state.files = state.files.map((file) => {
                if (file.id === action.payload) {
                    return {
                        ...file,
                        isEditingName: false,
                    };
                }
                return file;
            });
        },

        updateFileName: (state, action: PayloadAction<{ id: string; newName: string }>) => {
            state.files = state.files.map((file) => {
                if (file.id === action.payload.id) {
                    return {
                        ...file,
                        name: action.payload.newName,
                    };
                }

                return file;
            });
        },
    },
});

export const {
    deleteFile,
    deleteSelectedFiles,
    toogleSelectedFile,
    updateSelectedAllFiles,
    toggleSelectedFavoriteFiles,
    selectAllFiles,
    deselectAllFiles,
    toggleFavoriteFile,
    updateFavoriteForAllFiles,
    toggleArchiveFile,
    activateEditingName,
    deactivateEditingName,
    updateFileName,
} = filesSlice.actions;

export default filesSlice.reducer;
