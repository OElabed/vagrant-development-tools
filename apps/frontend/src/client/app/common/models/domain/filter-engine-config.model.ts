
export interface IFilterEngineConfig {
    version?: string;
    archiveUrl?: string;
    kzFileUrl?: string;
    fmlFile1Url?: string;
    fmlFile2Url?: string;
    scoreFileUrl?: string;
    licenceFileUrl?: string;
}

export class FilterEngineConfig implements IFilterEngineConfig {
    version?: string;
    archiveUrl?: string;
    kzFileUrl?: string;
    fmlFile1Url?: string;
    fmlFile2Url?: string;
    scoreFileUrl?: string;
    licenceFileUrl?: string;

    public static fromResult(res: any): IFilterEngineConfig {
        const result = <IFilterEngineConfig>({
            version: res.version,
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
        const result = new FilterEngineConfig();
        result.version = '';
        result.archiveUrl = '';
        result.kzFileUrl = '';
        result.fmlFile1Url = '';
        result.fmlFile2Url = '';
        result.scoreFileUrl = '';
        result.licenceFileUrl = '';
        return result;
    }
}
