import { ModuleType } from '../domain/module.model';

export interface IModuleConfig {
    type?: ModuleType;
    version?: string;
    name?: string;
    archiveUrl?: string;
}

export class ModuleConfig implements IModuleConfig {
    type?: ModuleType;
    version?: string;
    name?: string;
    archiveUrl?: string;

    public static fromResult(res: any): IModuleConfig {
        const result = <IModuleConfig>({
            version: res.version,
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
        const result = new ModuleConfig();
        result.version = '';
        result.type = ModuleType.AQUISITION;
        result.name = '';
        result.archiveUrl = '';
        return result;
    }

    public static initializeList(): IModuleConfig[] {
        const result: ModuleConfig[] = [];
        return result;
    }

    public static moduleIsActivate(list: ModuleConfig[], type: ModuleType): boolean {
        let exist = false;

        list.forEach((item, index) => {
            if (item.type === type) {
                exist = true;
            }
        });

        return exist;
    }

}
