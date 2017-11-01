import { IAddFileFormConfig } from './add-file-config.model';

export interface ICoreEngineConfig {
    archiveConfig?: IAddFileFormConfig;
}

export class CoreEngineConfig implements ICoreEngineConfig {
    archiveConfig?: IAddFileFormConfig;
}
