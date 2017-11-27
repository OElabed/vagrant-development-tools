import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


import { ExternalResourceService } from './external-resource';
import { ITemplatePackage, TemplatePackage } from '../../models/domain/template-package.model';

declare let jQuery: any;

/**
 * This class provides the RoutingGlobal service with methods to read names and add names.
 */
@Injectable()
export class TemplatePackageService extends ExternalResourceService {


    constructor(private http: HttpClient) {
        super();
    }

    getAll(): Observable<ITemplatePackage[]> {
        return this.http.get<ITemplatePackage[]>('/assets/mock-data/template-data.json')
            //.map(mapTemplates)
            .catch(this.handleError);
    }
}
