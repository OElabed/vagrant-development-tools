import { State } from './state.model';
import { IContainer } from './container.model';
import { IFileWrapper } from './file.model';
import { ICoreEngine } from './core-engine.model';
import { IFilterEngine } from './filter-engine.model';


export interface ICommonEnv {
    enable?: boolean;
    file?: IFileWrapper;
}

export class CommonEnv implements ICommonEnv {
    enable?: boolean;
    file?: IFileWrapper;
}

export interface IPackage {
    id?: string;
    name?: string;
    plateform?: IContainer;
    state?: State;
    commonEnv?: ICommonEnv;
    coreEngine?: ICoreEngine;
    filterEngine?: IFilterEngine;
    licence?: IFileWrapper;
}

export class Package implements IPackage {
    id?: string;
    name?: string;
    plateform?: IContainer;
    state?: State;
    commonEnv?: ICommonEnv;
    coreEngine?: ICoreEngine;
    filterEngine?: IFilterEngine;
    licence?: IFileWrapper;
}
