export enum OS {
    LINUX = 'LINUX',
    WINDOWS = 'WINDOWS',
    SOLARIS = 'SOLARIS',
    HPUX = 'HPUX'
}

export function findIconContainer(os: OS): string {
    let icon = '';
    switch (os) {
        case OS.LINUX:
            icon = 'fa fa-linux';
            break;
        case OS.WINDOWS:
            icon = 'fa fa-windows';
            break;
        case OS.SOLARIS:
            icon = 'fa fa-sun-o';
            break;
        case OS.HPUX:
            icon = 'fa fa-laptop';
            break;
        default:
            break;
    }

    return icon;
}

export interface IContainer {
    name?: string;
    os?: OS;
}

export class Container implements IContainer {
    name?: string;
    os?: OS;

    public static initialize(): IContainer {
        const result = new Container();
        result.name = '';
        result.os = OS.LINUX;
        return result;
    }

    public static fromResult(res: any): IContainer {
        const template = <IContainer>({
            name: res.name,
            os: OS[res.os]
        });
        return template;
    }
}
