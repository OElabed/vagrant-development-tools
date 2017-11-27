export interface IVersion {
    version?: string;
    push?: string;
}

export class Version implements IVersion {
    version?: string;
    push?: string;

    public static fromResult(res: any): IVersion {
        const version = <IVersion>({
            version: res.version,
            push: res.push
        });
        return version;
    }

    public static initialize(): IVersion {
        const result = new Version();
        result.version = '';
        result.push = '';
        return result;
    }
}
