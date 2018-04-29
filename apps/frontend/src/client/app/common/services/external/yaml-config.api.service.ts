import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


import { ExternalResourceService } from './external-resource';
import { IPackageConfig, PackageConfig } from '../../models/domain/package-config.model';
import { IYamlConfig, YamlConfig } from '../../models/domain/yaml-config.model';

/**
 * This class provides the RoutingGlobal service with methods to read names and add names.
 */
@Injectable()
export class YamlConfigService extends ExternalResourceService {


    constructor(private http: HttpClient) {
        super();
    }

    convertToPackageYaml(config: IPackageConfig): Observable<IYamlConfig> {
        return this.http.post<IYamlConfig>('/assets/mock-data/template-data.json', JSON.stringify(config))
            .catch(this.handleError);
    }

    convertToPackageObject(config: IYamlConfig): Observable<IPackageConfig> {
      return this.http.post<IPackageConfig>('/assets/mock-data/template-data.json', JSON.stringify(config))
          .catch(this.handleError);
  }
}

