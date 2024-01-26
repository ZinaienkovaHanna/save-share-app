export interface File {
    id: string;
    userId: string;
    name: string;
    text: string;
    fileSize: string;
    isFavorite: boolean;
    isArchive: boolean;
    isSelected: boolean;
    isEditingName: boolean;
}
