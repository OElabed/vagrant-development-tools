import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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


    constructor(private http: Http) {
        super();
    }

    getAll(): Observable<ITemplatePackage[]> {
        return this.http.get('/assets/mock-data/template-data.json')
            .map(mapTemplates)
            .catch(this.handleError);
    }
}

function mapTemplates(response: Response): ITemplatePackage[] {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    return response.json().map(TemplatePackage.fromResult);
}
