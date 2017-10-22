import { State } from './state';


export interface ICommonEnv {
    enable?: boolean;
    content?: string;
}

export class CommonEnv implements ICommonEnv {

}

export interface IPackage {
    id?: string;
    name?: string;
    state?: State;
    commonEnv?: ICommonEnv;
}

export class Package implements IPackage {
}
