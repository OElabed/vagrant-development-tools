import { IArchive } from './archive.model';
import { IFileWrapper } from './file.model';

export interface IModule {
    archive?: IArchive;
    configFile?: IFileWrapper;
}

export class Module implements IModule {
    archive?: IArchive;
    configFile?: IFileWrapper;
}
