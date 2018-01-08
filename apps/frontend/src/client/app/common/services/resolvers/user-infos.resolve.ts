import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { IUser } from '../../models/domain/user.model';
import { Config } from '../../shared/config/env.config';
import { Resolve } from '@angular/router';
import { UserService } from '../external/user.api.service';


@Injectable()
export class UserInfosResolver implements Resolve<any> {


    constructor(private userService: UserService) { }

    resolve(): Observable<any> {
        return this.userService.getUserInfos();
    }
}
