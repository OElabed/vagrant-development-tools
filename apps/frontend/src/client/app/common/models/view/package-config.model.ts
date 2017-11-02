import { IContainer } from '../domain/container.model';
import { IAddFileFormConfig } from './add-file-config.model';
import { ICoreEngineConfig } from './core-engine-config.model';
import { IFilterEngineConfig } from './filter-engine-config.model';
import { IModuleConfig } from './module-config.model';



export interface ICommonEnvConfig {
    enable?: boolean;
    fileConfig?: IAddFileFormConfig;
}

export class CommonEnvConfig implements ICommonEnvConfig {
    enable?: boolean;
    fileConfig?: IAddFileFormConfig;
}

export interface IPackageFormConfig {
    id?: string;
    name?: string;
    plateform?: IContainer;
    commonEnvConfig?: ICommonEnvConfig;
    licenceConfig?: IAddFileFormConfig;
    coreEngineConfig?: ICoreEngineConfig;
    filterEngineConfig?: IFilterEngineConfig;
    modulesConfig?: IModuleConfig[];
}

export class PackageFormConfig implements IPackageFormConfig {
    id?: string;
    name?: string;
    plateform?: IContainer;
    commonEnvConfig?: ICommonEnvConfig;
    licenceConfig?: IAddFileFormConfig;
    coreEngineConfig?: ICoreEngineConfig;
    filterEngineConfig?: IFilterEngineConfig;
    modulesConfig?: IModuleConfig[];

}
