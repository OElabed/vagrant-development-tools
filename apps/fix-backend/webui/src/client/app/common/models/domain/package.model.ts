import { State } from './state.model';
import { IContainer } from './container.model';
import { IFileWrapper } from './file.model';


export interface IPackage {
    id?: string;
    name?: string;
    commonEnv?: boolean;
    plateform?: IContainer;
    state?: State;
}

export class Package implements IPackage {
    id?: string;
    name?: string;
    commonEnv?: boolean;
    plateform?: IContainer;
    state?: State;
}
