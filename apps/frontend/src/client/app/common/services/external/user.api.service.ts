import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


import { ExternalResourceService } from './external-resource';
import { IUser } from '../../models/domain/user.model';
import { Config } from '../../shared/config/env.config';

declare let jQuery: any;

@Injectable()
export class UserService extends ExternalResourceService {


    constructor(private http: HttpClient) {
        super();
    }

    getUserInfos(): Observable<IUser> {
        if (Config.ENV === 'PROD') {
            return this.http.get<IUser>(Config.API + '/api/whoami')
                // .map(mapContainers)
                .catch(this.handleError);
        } else {
            return this.http.get<IUser>('/assets/mock-data/user-data.json')
                // .map(mapContainers)
                .catch(this.handleError);
        }
    }
}
