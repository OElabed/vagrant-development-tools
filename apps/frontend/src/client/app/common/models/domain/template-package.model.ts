import { IPackageConfig, PackageConfig } from './package-config.model';

export interface ITemplatePackage {
    id?: number;
    name?: string;
    packageConfig?: IPackageConfig;

}

export class TemplatePackage implements ITemplatePackage {
    id?: number;
    name?: string;
    packageConfig?: IPackageConfig;

    public static initialize(): ITemplatePackage {
        const result = new TemplatePackage();
        result.id = 0;
        result.name = '';
        result.packageConfig = PackageConfig.initialize();
        return result;
    }

    public static fromResult(res: any): ITemplatePackage {
        const template = <ITemplatePackage>({
            id: res.id,
            name: res.name,
            packageConfig: PackageConfig.fromResult(res.packageConfig)
        });
        return template;
    }
}

