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
