export enum OS {
    LINUX,
    WINDOWS,
    SOLARIS,
    HPUX
}

export interface IContainer {
    name?: string;
    os?: OS;
}

export class Container implements IContainer {
    name?: string;
    os?: OS;
}
