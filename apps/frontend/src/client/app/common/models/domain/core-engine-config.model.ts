export interface ICoreEngineConfig {
    version?: string;
    archiveUrl?: string;
}

export class CoreEngineConfig implements ICoreEngineConfig {
    version?: string;
    archiveUrl?: string;

    public static fromResult(res: any): ICoreEngineConfig {
        const result = <ICoreEngineConfig>({
            version: res.version,
            archiveUrl: res.archiveUrl
        });
        return result;
    }

    public static initialize(): ICoreEngineConfig {
        const result = new CoreEngineConfig();
        result.version = '';
        result.archiveUrl = '';
        return result;
    }
}
