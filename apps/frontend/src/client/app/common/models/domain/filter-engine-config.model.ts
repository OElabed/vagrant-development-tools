import { IVersion, Version } from './version.model';

export interface IFilterEngineConfig {
    version?: IVersion;
    archiveUrl?: string;
    kzFileUrl?: string;
    fmlFile1Url?: string;
    fmlFile2Url?: string;
    scoreFileUrl?: string;
    licenceFileUrl?: string;
}

export class FilterEngineConfig implements IFilterEngineConfig {
    version?: IVersion;
    archiveUrl?: string;
    kzFileUrl?: string;
    fmlFile1Url?: string;
    fmlFile2Url?: string;
    scoreFileUrl?: string;
    licenceFileUrl?: string;

    public static fromResult(res: any): IFilterEngineConfig {
        let result = <IFilterEngineConfig>({
            version: Version.fromResult(res.version),
            archiveUrl: res.archiveUrl,
            kzFileUrl: res.kzFileUrl,
            fmlFile1Url: res.fmlFile1Url,
            fmlFile2Url: res.fmlFile2Url,
            scoreFileUrl: res.scoreFileUrl,
            licenceFileUrl: res.licenceFileUrl
        });
        return result;
    }

    public static initialize(): IFilterEngineConfig {
        var result = new FilterEngineConfig();
        result.version = Version.initialize();
        result.archiveUrl = '';
        result.kzFileUrl = '';
        result.fmlFile1Url = '';
        result.fmlFile2Url = '';
        result.scoreFileUrl = '';
        result.licenceFileUrl = '';
        return result;
    }
}
