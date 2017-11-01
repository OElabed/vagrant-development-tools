import { IAddFileFormConfig } from './add-file-config.model';

export interface IFilterEngineConfig {
    archiveConfig?: IAddFileFormConfig;
    kzFileConfig?: IAddFileFormConfig;
    fmlFile1Config?: IAddFileFormConfig;
    fmlFile2Config?: IAddFileFormConfig;
    scoreFileConfig?: IAddFileFormConfig;
    licenceFileConfig?: IAddFileFormConfig;
}

export class FilterEngineConfig implements IFilterEngineConfig {
    archiveConfig?: IAddFileFormConfig;
    kzFileConfig?: IAddFileFormConfig;
    fmlFile1Config?: IAddFileFormConfig;
    fmlFile2Config?: IAddFileFormConfig;
    scoreFileConfig?: IAddFileFormConfig;
    licenceFileConfig?: IAddFileFormConfig;
}
