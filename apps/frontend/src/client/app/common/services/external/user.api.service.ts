import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { ExternalResourceService } from './external-resource';
import { IUser } from '../../models/domain/user.model';
import { Config } from '../../shared/config/env.config';

declare let jQuery: any;

@Injectable()
export class UserService extends ExternalResourceService {

    public access_token: string;

    constructor(private http: HttpClient, private csrfToken: HttpXsrfTokenExtractor) {
        super();
        this.access_token = localStorage.getItem('access_token');
    }

    getUserInfos(): Observable<IUser> {
        if (Config.ENV === 'PROD') {
            const options = {
                headers: new HttpHeaders()
                    .append('Authorization', 'Bearer ' + this.access_token),
                // .append('X-XSRF-TOKEN', this.csrfToken.getToken()),
                withCredentials: true
            };

            return this.http.get<IUser>(Config.API + '/api/whoami', options)
                // .map(mapContainers)
                .catch(this.handleError);
        } else {
            return this.http.get<IUser>('/assets/mock-data/user-data.json')
                // .map(mapContainers)
                .catch(this.handleError);
        }
    }
}
