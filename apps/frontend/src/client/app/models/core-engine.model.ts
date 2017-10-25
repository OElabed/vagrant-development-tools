import { IArchive } from './archive.model';

export interface ICoreEngine {
    archive?: IArchive;
}

export class CoreEngine implements ICoreEngine {
    archive?: IArchive;
}
