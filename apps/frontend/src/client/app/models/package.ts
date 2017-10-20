import { State } from './state';

export interface IPackage {
    id: string;
    name: string;
    state: State;
}

export class Package implements IPackage {
    constructor(public id: string, public name: string, public state: State) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
}
