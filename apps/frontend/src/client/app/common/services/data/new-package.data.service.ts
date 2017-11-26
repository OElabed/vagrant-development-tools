import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { IPackageConfig, PackageConfig } from '../../models/domain/package-config.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PackageConfigService } from '../external/package-config.api.service';
import { YamlConfigService } from '../external/yaml-config.api.service';
import { IFilterEngineConfig } from '../../models/domain/filter-engine-config.model';
import { ICoreEngineConfig } from '../../models/domain/core-engine-config.model';
import { IDatabaseConfig } from '../../models/domain/database-config.model';
import { IModuleConfig } from '../../models/domain/module-config.model';


@Injectable()
export class NewPackageConfigDataService {

    config: Observable<IPackageConfig>;
    yamlConfig: Observable<string>;
    private _config: BehaviorSubject<IPackageConfig>;
    private _yamlConfig: BehaviorSubject<string>;
    private dataStore: {
        config: IPackageConfig
        yamlConfig: string
    };

    private errorMessage: string = '';
    private isLoading: boolean = true;

    constructor(
        private packageConfigService: PackageConfigService,
        private yamlConfigService: YamlConfigService
    ) {
        this.dataStore = {
            config: PackageConfig.initialize(),
            yamlConfig: ''
        };
        this._config = <BehaviorSubject<IPackageConfig>>new BehaviorSubject([]);
        this.config = this._config.asObservable();
    }

    create(config: IPackageConfig): void {
        this.packageConfigService
            .create(config)
            .subscribe(packageConfig => {
                this.dataStore.config = packageConfig;
                this._config.next(Object.assign({}, this.dataStore).config);
            },
            e => this.errorMessage = e,
            () => {
                this.isLoading = false;
            });
    }

    getYamlConfig() {
        this.yamlConfigService
            .convertToYaml(this.dataStore.config)
            .subscribe(yamlConfig => {
                this.dataStore.yamlConfig = yamlConfig;
                this._yamlConfig.next(Object.assign({}, this.dataStore).yamlConfig);
            },
            e => this.errorMessage = e,
            () => {
                this.isLoading = false;
            });
    }

    setGeneralConfig(config: IPackageConfig): void {
        this.dataStore.config.name = config.name;
        this.dataStore.config.plateform = config.plateform;
        this.dataStore.config.commonEnvConfig = config.commonEnvConfig;
        this._config.next(Object.assign({}, this.dataStore).config);
    }

    setFilterEngineConfig(config: IFilterEngineConfig): void {

        this.dataStore.config.filterEngineConfig = config;
        this._config.next(Object.assign({}, this.dataStore).config);
    }

    setCoreEngineConfig(config: ICoreEngineConfig): void {
        this.dataStore.config.filterEngineConfig = config;
        this._config.next(Object.assign({}, this.dataStore).config);
    }

    setDatabaseConfig(config: IDatabaseConfig): void {
        this.dataStore.config.databaseConfig = config;
        this._config.next(Object.assign({}, this.dataStore).config);
    }

    setAllModulesConfig(config: IModuleConfig[]): void {
        this.dataStore.config.modulesConfig = config;
        this._config.next(Object.assign({}, this.dataStore).config);
    }
}
