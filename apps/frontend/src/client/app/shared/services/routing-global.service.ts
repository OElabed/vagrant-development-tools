import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

/**
 * This class provides the RoutingGlobal service with methods to read names and add names.
 */
@Injectable()
export class RoutingGlobalService {

  private subjectActivePage = new Subject<any>();

  setActivePage(pageName: string) {
    this.subjectActivePage.next({ text: pageName });
  }

  getActivePage(): Observable<any> {
    return this.subjectActivePage.asObservable();
  }

}
