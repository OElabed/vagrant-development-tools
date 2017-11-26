import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


import { ExternalResourceService } from './external-resource';
import { ITemplatePackage, TemplatePackage } from '../../models/domain/template-package.model';
import { IPackageConfig, PackageConfig } from '../../models/domain/package-config.model';

/**
 * This class provides the RoutingGlobal service with methods to read names and add names.
 */
@Injectable()
export class YamlConfigService extends ExternalResourceService {


    constructor(private http: Http) {
        super();
    }

    convertToYaml(config: IPackageConfig): Observable<string> {
        return this.http.post('/assets/mock-data/template-data.json', JSON.stringify(config))
            .map(mapYamlConfig)
            .catch(this.handleError);
    }
}

function mapYamlConfig(response: Response): string {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    return response.json().map(
        (res: any) => res.content
    );
}
