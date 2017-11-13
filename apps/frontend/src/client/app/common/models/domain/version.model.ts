export interface IVersion {
    version?: string;
    push?: string;
}

export class Version implements IVersion {
    version?: string;
    push?: string;

    public static fromResult(res: any): IVersion {
        let version = <IVersion>({
            version: res.version,
            archiveUrl: res.push
        });
        return version;
    }

    public static initialize(): IVersion {
        var result = new Version();
        result.version = '';
        result.push = '';
        return result;
    }
}
