import { ModuleType } from '../domain/module.model';
import { IVersion, Version } from '../domain/version.model';

export interface IModuleConfig {
    type?: ModuleType;
    version?: IVersion;
    name?: string;
    archiveUrl?: string;
}

export class ModuleConfig implements IModuleConfig {
    type?: ModuleType;
    version?: IVersion;
    name?: string;
    archiveUrl?: string;

    public static fromResult(res: any): IModuleConfig {
        let result = <IModuleConfig>({
            version: Version.fromResult(res.version),
            type: ModuleType[res.type],
            name: res.name,
            archiveUrl: res.archiveUrl
        });
        return result;
    }
    public static fromListResult(res: any): IModuleConfig[] {
        return res.map(ModuleConfig.fromResult);
    }

    public static initialize(): IModuleConfig {
        var result = new ModuleConfig();
        result.version = Version.initialize();
        result.type = ModuleType.AQUISITION;
        result.name = '';
        result.archiveUrl = '';
        return result;
    }

    public static initializeList(): IModuleConfig[] {
        var result: ModuleConfig[] = [];
        result.push(ModuleConfig.initialize());
        return result;
    }
}
