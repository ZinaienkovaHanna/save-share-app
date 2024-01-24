export interface File {
    id: string;
    name: string;
    text: string;
    fileSize: string;
    isFavorite: boolean;
    isArchive: boolean;
    isSelected: boolean;
    isEditingName: boolean;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}
