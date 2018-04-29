import { Injectable } from '@angular/core';
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
import { IYamlConfig, YamlConfig } from '../../models/domain/yaml-config.model';

// sample : https://coryrylan.com/blog/angular-observable-data-services

@Injectable()
export class PackageConfigDataService {

  config: Observable<IPackageConfig>;
  yamlConfig: Observable<IYamlConfig>;
  private _config: BehaviorSubject<IPackageConfig>;
  private _yamlConfig: BehaviorSubject<IYamlConfig>;
  private dataStore: {
    config: IPackageConfig
    yamlConfig: IYamlConfig
  };

  private errorMessage = '';
  private isLoading = true;

  constructor(
    private yamlConfigService: YamlConfigService
  ) {
    this.dataStore = {
      config: PackageConfig.initialize(),
      yamlConfig: YamlConfig.initialize()
    };
    this._config = <BehaviorSubject<IPackageConfig>>new BehaviorSubject([]);
    this.config = this._config.asObservable();

    this._yamlConfig = <BehaviorSubject<IYamlConfig>>new BehaviorSubject([]);
    this.yamlConfig = this._yamlConfig.asObservable();
  }

  // create(config: IPackageConfig): void {
  //   this.packageConfigService
  //     .create(config)
  //     .subscribe(packageConfig => {
  //       this.dataStore.config = packageConfig;
  //       this._config.next(Object.assign({}, this.dataStore).config);
  //     },
  //       e => this.errorMessage = e,
  //       () => {
  //         this.isLoading = false;
  //       });
  // }

  initPackage(): void {
    this._config.next(Object.assign({}, this.dataStore).config);
    this._yamlConfig.next(Object.assign({}, this.dataStore).yamlConfig);

    // TODO
    //this.refreshYamlConfig();
  }

  setPackage(config: IPackageConfig): void {
    this.dataStore.config = config;
    this._config.next(Object.assign({}, this.dataStore).config);

    // TODO
    //this.refreshYamlConfig();
  }

  setYamlConfig(yamlConfig: IYamlConfig): void {
    this.dataStore.yamlConfig = yamlConfig;
    this._yamlConfig.next(Object.assign({}, this.dataStore).yamlConfig);
    this.refreshPackageObjectConfig();
  }

  refreshYamlConfig() {
    this.yamlConfigService
      .convertToPackageYaml(this.dataStore.config)
      .subscribe(yamlConfig => {
        this.dataStore.yamlConfig = yamlConfig;
        this._yamlConfig.next(Object.assign({}, this.dataStore).yamlConfig);
      },
        e => this.errorMessage = e,
        () => {
          this.isLoading = false;
        });
  }

  refreshPackageObjectConfig() {
    this.yamlConfigService
      .convertToPackageObject(this.dataStore.yamlConfig)
      .subscribe(config => {
        this.dataStore.config = config;
        this._config.next(Object.assign({}, this.dataStore).config);
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
