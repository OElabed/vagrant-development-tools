export interface IFileUploadConfig {
    url?: string;
    maximumSize?: number;
    maximumSizeByteType?: string;
    extensions?: string[];
    canCreate?: boolean;
    templateCreation?: string;
}

export class FileUploadConfig implements IFileUploadConfig {
    url?: string;
    maximumSize?: number;
    maximumSizeByteType?: string;
    extensions?: string[];
    canCreate?: boolean;
    templateCreation?: string;
}
