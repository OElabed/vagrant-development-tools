import { IAddFileFormConfig } from './add-file-config.model';
import { ModuleType } from '../domain/module.model';

export interface IModuleConfig {
    type?: ModuleType;
    name?:string;
    archiveConfig?: IAddFileFormConfig;
}

export class ModuleConfig implements IModuleConfig {
    type?: ModuleType;
    name?:string;
    archiveConfig?: IAddFileFormConfig;
}
