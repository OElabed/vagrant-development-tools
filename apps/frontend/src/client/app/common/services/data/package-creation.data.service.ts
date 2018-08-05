import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ICoreEngineConfig } from '../../models/domain/core-engine-config.model';
import { IDatabaseConfig } from '../../models/domain/database-config.model';
import { IFilterEngineConfig } from '../../models/domain/filter-engine-config.model';
import { IModuleConfig } from '../../models/domain/module-config.model';
import { IPackageConfig, PackageConfig } from '../../models/domain/package-config.model';
import { IYamlConfig, YamlConfig } from '../../models/domain/yaml-config.model';
import { YamlConfigService } from '../external/yaml-config.api.service';
import { IWizard, Wizard } from '../../models/view/wizard.model';

// sample : https://coryrylan.com/blog/angular-observable-data-services

@Injectable()
export class PackageCreationDataService {

  config: Observable<IPackageConfig>;
  yamlConfig: Observable<IYamlConfig>;
  wizardState: Observable<IWizard>;
  private _config: BehaviorSubject<IPackageConfig>;
  private _yamlConfig: BehaviorSubject<IYamlConfig>;
  private _wizardState: BehaviorSubject<IWizard>;
  private dataStore: {
    config: IPackageConfig,
    yamlConfig: IYamlConfig,
    wizardState: IWizard
  };

  private errorMessage = '';
  private isLoading = true;

  constructor(
    private yamlConfigService: YamlConfigService
  ) {
    this.dataStore = {
      config: PackageConfig.initialize(),
      yamlConfig: YamlConfig.initialize(),
      wizardState: new Wizard()
    };
    this._config = <BehaviorSubject<IPackageConfig>>new BehaviorSubject([]);
    this.config = this._config.asObservable();

    this._yamlConfig = <BehaviorSubject<IYamlConfig>>new BehaviorSubject([]);
    this.yamlConfig = this._yamlConfig.asObservable();


    this._wizardState = <BehaviorSubject<IWizard>>new BehaviorSubject([]);
    this.wizardState = this._wizardState.asObservable();
  }

  initWizard() {
    this._wizardState.next(Object.assign({}, this.dataStore).wizardState);
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
    this._wizardState.next(Object.assign({}, this.dataStore).wizardState);

    // TODO
    //this.refreshYamlConfig();
  }

  setWizardState(wizard: IWizard): void {
    this.dataStore.wizardState = wizard;
    this._wizardState.next(Object.assign({}, this.dataStore).wizardState);
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
