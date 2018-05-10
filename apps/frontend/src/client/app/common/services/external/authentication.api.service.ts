import { Injectable } from '@angular/core';
import { ExternalResourceService } from './external-resource';
import { HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../shared/config/env.config';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthenticationService extends ExternalResourceService {

  public access_token: string;
  public refresh_token: string;

  constructor(private http: HttpClient, private csrfToken: HttpXsrfTokenExtractor) {
    super();
    this.access_token = localStorage.getItem('access_token');
    this.refresh_token = localStorage.getItem('refresh_token');
  }


  login(username: string, password: string): Observable<boolean> {

    if (Config.ENV === 'PROD') {

      const body = new URLSearchParams();
      body.set('username', username);
      body.set('password', password);
      body.set('grant_type', 'password');
      body.set('scope', 'read write');

      const options = {
        headers: new HttpHeaders()
          .append('Authorization', 'Basic ' + btoa('browser:secret'))
          .append('Content-Type', 'application/x-www-form-urlencoded')
      };

      return this.http.post(Config.API + '/oauth/token', body.toString(), options).pipe(
        map((response: any) => {
          // login successful if there's a jwt token in the response
          if (response.access_token && response.refresh_token) {
            // set token property
            this.access_token = response.access_token;
            this.refresh_token = response.refresh_token;

            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('refresh_token', response.refresh_token);

            // return true to indicate successful login
            return true;
          } else {
            // return false to indicate failed login
            return false;
          }
        }),
        catchError(this.handleError)
      );

    } else {
      return this.http.get<any>('/assets/mock-data/token-data.json').pipe(
        map((response: any) => {
          // login successful if there's a jwt token in the response
          if (response.access_token && response.refresh_token) {
            // set token property

            this.access_token = response.access_token;
            this.refresh_token = response.refresh_token;

            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('refresh_token', response.refresh_token);

            // return true to indicate successful login
            return true;
          } else {
            // return false to indicate failed login
            return false;
          }
        }),
        catchError(this.handleError)
      );
    }

  }

  logout(): Observable<boolean> {
    // clear token remove user from local storage to log user out

    if (Config.ENV === 'PROD') {

      const options = {
        headers: new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.access_token)
          .append('X-XSRF-TOKEN', this.csrfToken.getToken()),
        // .append('X-Requested-With', 'XMLHttpRequest'),
        params: new HttpParams().set('refreshToken', this.refresh_token),
        withCredentials: true
      };

      return this.http.post(Config.API + '/oauth/revoke-token', null, options).pipe(

        map((response: any) => {
          // login successful if there's a jwt token in the response
          this.access_token = null;
          this.refresh_token = null;
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');

          return true;

        }),
        catchError(this.handleError)
      );
    } else {

      this.access_token = null;
      this.refresh_token = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');

      return Observable.of(true);
    }
  }

}
