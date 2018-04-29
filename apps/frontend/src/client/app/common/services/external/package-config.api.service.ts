import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


import { ExternalResourceService } from './external-resource';
import { ITemplatePackage, TemplatePackage } from '../../models/domain/template-package.model';
import { IPackageConfig, PackageConfig } from '../../models/domain/package-config.model';

declare let jQuery: any;

/**
 * This class provides the RoutingGlobal service with methods to read names and add names.
 */
@Injectable()
export class PackageConfigService extends ExternalResourceService {


  constructor(private http: HttpClient) {
    super();
  }

  create(config: IPackageConfig): Observable<IPackageConfig> {
    return this.http.post('/assets/mock-data/template-data.json', JSON.stringify(config))
      .catch(this.handleError);
  }
}
