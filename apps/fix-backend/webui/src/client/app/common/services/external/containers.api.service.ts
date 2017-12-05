import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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


    constructor(private http: HttpClient) {
        super();
    }

    getAll(): Observable<IContainer[]> {
        return this.http.get<IContainer[]>('/assets/mock-data/container-data.json')
           // .map(mapContainers)
            .catch(this.handleError);
    }
}
