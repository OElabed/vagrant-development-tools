export enum OS {
    LINUX = 'LINUX',
    WINDOWS = 'WINDOWS',
    SOLARIS = 'SOLARIS',
    HPUX = 'HPUX'
}

export interface IContainer {
    id?: number;
    name?: string;
    os?: OS;
}

export class Container implements IContainer {
    id?: number;
    name?: string;
    os?: OS;

    public static initialize(): IContainer {
        var result = new Container();
        result.id = 0;
        result.name = '';
        result.os = OS.LINUX;
        return result;
    }

    public static fromResult(res: any): IContainer {
        let template = <IContainer>({
            id: res.id,
            name: res.name,
            os: OS[res.os]
        });
        return template;
    }
}
