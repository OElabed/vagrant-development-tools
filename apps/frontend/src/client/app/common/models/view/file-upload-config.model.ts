export interface IFileUploaderFormConfig {
    urlToUpload?: string;
    maximumSize?: number;
    maximumSizeByteType?: string;
    extensions?: string[];
    canCreate?: boolean;
    templateCreation?: string;
}

export class FileUploaderFormConfig implements IFileUploaderFormConfig {
    urlToUpload?: string;
    maximumSize?: number;
    maximumSizeByteType?: string;
    extensions?: string[];
    canCreate?: boolean;
    templateCreation?: string;
}
