import { IVersion, Version } from './version.model';

export interface ICoreEngineConfig {
    version?: IVersion;
    archiveUrl?: string;
}

export class CoreEngineConfig implements ICoreEngineConfig {
    version?: IVersion;
    archiveUrl?: string;

    public static fromResult(res: any): ICoreEngineConfig {
        const result = <ICoreEngineConfig>({
            version: Version.fromResult(res.version),
            archiveUrl: res.archiveUrl
        });
        return result;
    }

    public static initialize(): ICoreEngineConfig {
        const result = new CoreEngineConfig();
        result.version = Version.initialize();
        result.archiveUrl = '';
        return result;
    }
}
