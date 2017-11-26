import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


import { ExternalResourceService } from './external-resource';
import { IContainer, Container } from '../../models/domain/container.model';

declare let jQuery: any;

/**
 * This class provides the RoutingGlobal service with methods to read names and add names.
 */
@Injectable()
export class ContainerService extends ExternalResourceService {


    constructor(private http: Http) {
        super();
    }

    getAll(): Observable<IContainer[]> {
        return this.http.get('/assets/mock-data/container-data.json')
            .map(mapContainers)
            .catch(this.handleError);
    }
}

function mapContainers(response: Response): IContainer[] {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    return response.json().map(Container.fromResult);
}
