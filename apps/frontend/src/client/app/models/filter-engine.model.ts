import { IArchive } from './archive.model';
import { IFileWrapper } from './file.model';

export interface IFilterEngine {
    archive?: IArchive;
    kzFile?: IFileWrapper;
    fmlFiles?: IFileWrapper[];
    scoreFile?: IFileWrapper;
    licenceFile?: IFileWrapper;
}

export class FilterEngine implements IFilterEngine {
    archive?: IArchive;
    kzFile?: IFileWrapper;
    fmlFiles?: IFileWrapper[];
    scoreFile?: IFileWrapper;
    licenceFile?: IFileWrapper;
}
