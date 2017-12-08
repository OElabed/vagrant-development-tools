import { Version } from './version.model';

export enum FileWrapperType {
    TEXT,
    ARCHIVE
}

export interface IFileWrapper {
    name?: string;
    type?: FileWrapperType;
    content_text?: string;
}

export class FileWrapper implements IFileWrapper {
    name?: string;
    type?: FileWrapperType;
    content_text?: string;
}
