export enum ModuleType {
    AQUISITION,
    REQUESTER,
    DBCLIENT
}

export class ModuleTypeUtil {

    public static toString(module: ModuleType): string {
        return <string>ModuleType[<any>module];
    }

    public static toModuleType(name: string): ModuleType {
        var mapModulesType: Map<ModuleType, string> = ModuleTypeUtil.getMapModuleType();
        var result: ModuleType;
        mapModulesType.forEach((value: string, key: ModuleType) => {
            if (value === name) {
                result = key;
            }
        });
        return result;
    }

    public static getListModuleType(): ModuleType[] {
        return [ModuleType.AQUISITION, ModuleType.REQUESTER, ModuleType.DBCLIENT];
    }

    public static getListNameModuleType(): string[] {
        var result: string[] = [];
        var mapModulesType: Map<ModuleType, string> = ModuleTypeUtil.getMapModuleType();
        ModuleTypeUtil.getListModuleType().forEach(item => {
            result.push(mapModulesType.get(item));
        });

        return result;
    }

    public static getMapModuleType(): Map<ModuleType, string> {
        var result = new Map<ModuleType, string>();
        result.set(ModuleType.AQUISITION, 'Aquisition');
        result.set(ModuleType.REQUESTER, 'Requester');
        result.set(ModuleType.DBCLIENT, 'DBClient');
        return result;
    }
}
