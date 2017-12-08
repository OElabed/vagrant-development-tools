import { IFileUploaderFormConfig } from './file-upload-config.model';

export enum AddFileFormType {
    URL,
    FILE_UPLOAD
}

export interface IAddFileFormConfig {
    type?: AddFileFormType;
    fileUploaderConfig?: IFileUploaderFormConfig;
    urlFile?: string;

}

export class AddFileFormConfig implements IAddFileFormConfig {
    type?: AddFileFormType;
    fileUploaderConfig?: IFileUploaderFormConfig;
    urlFile?: string;
}

