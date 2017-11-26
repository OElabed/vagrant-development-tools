import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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


    constructor(private http: Http) {
        super();
    }

    create(config: IPackageConfig): Observable<IPackageConfig> {
        return this.http.post('/assets/mock-data/template-data.json', JSON.stringify(config))
            .map(mapPackageConfig)
            .catch(this.handleError);
    }
}

function mapPackageConfig(response: Response): IPackageConfig {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    return response.json().map(PackageConfig.fromResult);
}
