import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../types/types';
import data from '../mockedData/data.json';

interface ItemsStateType {
    items: Item[];
}

const initialState: ItemsStateType = {
    items: data,
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        deleteItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        deleteSelectedItems: (state) => {
            state.items = state.items.filter((item) => !item.isSelected);
        },

        toogleSelectedItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isSelected: !item.isSelected,
                    };
                }
                return item;
            });
        },

        selectAllItems: (state) => {
            state.items = state.items.map((item) => {
                return {
                    ...item,
                    isSelected: true,
                };
            });
        },

        deselectAllItems: (state) => {
            state.items = state.items.map((item) => {
                return {
                    ...item,
                    isSelected: false,
                };
            });
        },

        toggleFavoriteItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isFavorite: !item.isFavorite,
                    };
                }
                return item;
            });
        },

        addFavoriteToSelectedItems: (state) => {
            state.items = state.items.map((item) => {
                if (item.isSelected) {
                    return {
                        ...item,
                        isFavorite: true,
                    };
                }
                return item;
            });
        },

        removeFavoriteFromSelectedItems: (state) => {
            state.items = state.items.map((item) => {
                if (item.isSelected) {
                    return {
                        ...item,
                        isFavorite: false,
                    };
                }
                return item;
            });
        },

        toggleArchiveItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isArchive: !item.isArchive,
                    };
                }
                return item;
            });
        },

        addArchiveToSelectedItems: (state) => {
            state.items = state.items.map((item) => {
                if (item.isSelected) {
                    return {
                        ...item,
                        isArchive: true,
                    };
                }
                return item;
            });
        },

        removeArchiveFromSelectedItems: (state) => {
            state.items = state.items.map((item) => {
                if (item.isSelected) {
                    return {
                        ...item,
                        isArchive: false,
                    };
                }
                return item;
            });
        },

        activateEditingName: (state, action: PayloadAction<string>) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isEditingName: true,
                    };
                }
                return item;
            });
        },

        deactivateEditingName: (state, action: PayloadAction<string>) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isEditingName: false,
                    };
                }
                return item;
            });
        },

        activateEditingNameForSelectedItems: (state) => {
            state.items = state.items.map((item) => {
                if (item.isSelected) {
                    return {
                        ...item,
                        isEditingName: true,
                    };
                }
                return item;
            });
        },

        updateItemName: (state, action: PayloadAction<{ id: string; newName: string }>) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        name: action.payload.newName,
                    };
                }

                return item;
            });
        },
    },
});

export const {
    deleteItem,
    deleteSelectedItems,
    toogleSelectedItem,
    selectAllItems,
    deselectAllItems,
    toggleFavoriteItem,
    addFavoriteToSelectedItems,
    removeFavoriteFromSelectedItems,
    toggleArchiveItem,
    addArchiveToSelectedItems,
    removeArchiveFromSelectedItems,
    activateEditingName,
    deactivateEditingName,
    activateEditingNameForSelectedItems,
    updateItemName,
} = itemsSlice.actions;

export default itemsSlice.reducer;
