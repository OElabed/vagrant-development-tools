export enum OS {
    LINUX = 'LINUX',
    WINDOWS = 'WINDOWS',
    SOLARIS = 'SOLARIS',
    HPUX = 'HPUX'
}

export interface IContainer {
    name?: string;
    os?: OS;
}

export class Container implements IContainer {
    name?: string;
    os?: OS;

    public static initialize(): IContainer {
        var result = new Container();
        result.name = '';
        result.os = OS.LINUX;
        return result;
    }

    public static fromResult(res: any): IContainer {
        let template = <IContainer>({
            name: res.name,
            os: OS[res.os]
        });
        return template;
    }
}
