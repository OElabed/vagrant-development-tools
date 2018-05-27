import { IContainer, Container } from '../domain/container.model';
import { ICoreEngineConfig, CoreEngineConfig } from './core-engine-config.model';
import { IFilterEngineConfig, FilterEngineConfig } from './filter-engine-config.model';
import { IModuleConfig, ModuleConfig } from './module-config.model';
import { IDatabaseConfig, DatabaseConfig } from './database-config.model';



export interface ICommonEnvConfig {
    enable?: boolean;
    fileUrl?: string;
}

export class CommonEnvConfig implements ICommonEnvConfig {
    enable?: boolean;
    fileUrl?: string;

    public static fromResult(res: any): ICommonEnvConfig {
        const template = <ICommonEnvConfig>({
            enable: res.enable,
            fileUrl: res.fileUrl
        });
        return template;
    }

    public static initialize(): ICommonEnvConfig {
        const result = new CommonEnvConfig();
        result.enable = false;
        result.fileUrl = '';
        return result;
    }
}

export interface IPackageConfig {
    id?: number;
    name?: string;
    basePath?: string;
    commonEnvConfig?: ICommonEnvConfig;
    licenceUrl?: string;
    coreEngineConfig?: ICoreEngineConfig;
    filterEngineConfig?: IFilterEngineConfig;
    modulesConfig?: IModuleConfig[];
    databaseConfig?: IDatabaseConfig;
}

export class PackageConfig implements IPackageConfig {
    id?: number;
    name?: string;
    basePath?: string;
    commonEnvConfig?: ICommonEnvConfig;
    licenceUrl?: string;
    coreEngineConfig?: ICoreEngineConfig;
    filterEngineConfig?: IFilterEngineConfig;
    modulesConfig?: IModuleConfig[];
    databaseConfig?: IDatabaseConfig;

    public static initialize(): IPackageConfig {
        const result = new PackageConfig();
        result.id = 0;
        result.name = '';
        result.basePath = '';
        result.commonEnvConfig = CommonEnvConfig.initialize();
        result.licenceUrl = '';
        result.coreEngineConfig = CoreEngineConfig.initialize();
        result.filterEngineConfig = FilterEngineConfig.initialize();
        result.databaseConfig = DatabaseConfig.initialize();
        result.modulesConfig = ModuleConfig.initializeList();
        return result;
    }


    public static fromResult(res: any): IPackageConfig {
        const template = <IPackageConfig>({
            id: res.id,
            name: res.name,
            basePath: res.basePath,
            commonEnvConfig: CommonEnvConfig.fromResult(res.commonEnvConfig),
            licenceUrl: res.licenceUrl,
            coreEngineConfig: CoreEngineConfig.fromResult(res.coreEngineConfig),
            filterEngineConfig: FilterEngineConfig.fromResult(res.filterEngineConfig),
            modulesConfig: ModuleConfig.fromListResult(res.modulesConfig),
            databaseConfig: DatabaseConfig.fromResult(res.databaseConfig)
        });
        return template;
    }
}
