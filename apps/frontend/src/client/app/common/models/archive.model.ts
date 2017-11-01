import { IVersion } from './version.model';
import { IFileWrapper, FileWrapper } from './file.model';

export enum ArchiveType {
    REPOSITORY,
    URL,
    FILE_UPLOAD
}

export interface IArchive {
    type?: ArchiveType;
    version?: IVersion;
    url?: string;
    fileUpload?: IFileWrapper;
}

export class Archive implements IArchive {
    type?: ArchiveType;
    version?: IVersion;
    url?: string;
    fileUpload?: IFileWrapper;
}
