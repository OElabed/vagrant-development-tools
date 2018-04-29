import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { IPackageConfig, PackageConfig } from '../../../models/domain/package-config.model';
import { BootstrapSelect, Option } from '../../../models/view/bootstrap-select.model';

import { IAddFileFormConfig, AddFileFormConfig, AddFileFormType } from '../../../models/view/add-file-config.model';
import { FileUploaderFormConfig } from '../../../models/view/file-upload-config.model';
import { PackageValidators } from '../../../validators/package.validaors';
// import { ContainerService } from '../../../services/external/containers.api.service';
import { ModuleConfig } from '../../../models/domain/module-config.model';
import { ModuleType } from '../../../models/domain/module.model';
import { IContainer, findIconContainer, OS, Container } from '../../../models/domain/container.model';
import { SelectValidators } from '../../../validators/select.validator';

//declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-package-config-details',
  templateUrl: 'package-config-details.component.html',
  styleUrls: ['package-config-details.component.css']
})
export class PackageConfigDetailsComponent implements OnInit {

  // https://plnkr.co/edit/p0ApU2yT62jnzu9nKkng?p=preview

  private packageForm: FormGroup;
  private formSumitAttempt: boolean;

  private currentPackage: IPackageConfig;

  private containerSelect: BootstrapSelect;
  private containerList: IContainer[];
  private currentContainer: IContainer;
  private containerSelectedOption: Option;



  private errorMessage = '';
  private isLoading = true;

  constructor(
    // private containerService: ContainerService,
    private formBuilder: FormBuilder) {
    this.currentPackage = PackageConfig.initialize();
    // this.containerSelect = new BootstrapSelect();
  }

  ngOnInit() {

    this.buildForm();
    // this.containerService
    //   .getAll()
    //   .subscribe(containers => {
    //     this.containerList = containers;
    //     this.initializeContainerSelect(containers);

    //     console.log(containers);
    //   },
    //     e => this.errorMessage = e,
    //     () => {
    //       this.isLoading = false;
    //     });
  }


  buildForm() {
    this.packageForm = this.formBuilder.group({
      general: this.formBuilder.group({
        plateform: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        generalOptions: this.formBuilder.group({
          commonEnv: new FormControl(false)
        })
      }),
      coreEngine: this.formBuilder.group({
        version: new FormControl('', [Validators.required, PackageValidators.version]),
      }),
      filterEngine: this.formBuilder.group({
        version: new FormControl('', [Validators.required, PackageValidators.version]),
        filterEngineOptions: this.formBuilder.group({
          fmlFile1: new FormControl(false),
          fmlFile2: new FormControl(false),
          scoreFile: new FormControl(false)
        })
      }),
      continuityBackend: this.formBuilder.group({
        version: new FormControl('', [Validators.required, PackageValidators.version]),
        modules: this.formBuilder.group({
          aquisition: new FormControl(false),
          requester: new FormControl(false),
          dbclient: new FormControl(false)
        })
      }),
      database: this.formBuilder.group({
        dbtype: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        hostname: new FormControl('', Validators.required),
        port: new FormControl('', Validators.required),
        service: new FormControl('', Validators.required)
      })
    });
  }


  // initializeContainerSelect(containers: IContainer[], containerSelected: IContainer = null): void {
  //   const self = this;
  //   this.containerSelect = new BootstrapSelect();
  //   this.containerSelect.placeholder = 'Choose Container ...';
  //   containers.forEach((item, index) => {
  //     let selected = false;
  //     if (containerSelected !== null && containerSelected.name === item.name) {
  //       selected = true;
  //     }
  //     self.containerSelect.addOption('' + item.name, item.name, selected, findIconContainer(item.os));
  //   });
  // }

  // onSelectedContainerOption(option: Option) {
  //   this.containerSelectedOption = option;
  //   const containerName = String(option.value);
  //   this.currentContainer = this.containerList.filter((container: IContainer) => container.name === containerName)[0];
  //   // this.setValueFormControl('general.plateform', this.currentContainer);
  //   // (<FormGroup>this.packageForm.controls.general)
  //   // .controls.plateform.setValue(this.currentContainer, { onlySelf: true });
  // }

  isFieldNotValid(field: string) {
    const fieldControl = this.getFieldControl(field, this.packageForm);
    const isValid = (
      (fieldControl.valid) ||
      (fieldControl.pristine && !this.formSumitAttempt)
    );
    return !isValid;
  }

  getFieldControl(field: string, form: AbstractControl): AbstractControl {
    const splitted = field.split('.');
    let formGroup: AbstractControl = form;
    let control: AbstractControl;
    splitted.forEach((item, index) => {
      if (index === (splitted.length - 1)) {
        control = formGroup.get(item);
      } else {
        formGroup = formGroup.get(item);
      }
    });
    return control;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldNotValid(field),
      'has-feedback': this.isFieldNotValid(field)
    };
  }

  onSubmit() {
    this.formSumitAttempt = true;
    if (this.packageForm.valid) {
      console.log('form submitted');
    }
  }

  reset() {
    this.packageForm.reset();
    this.formSumitAttempt = false;
  }

  setValueFormControl(field: string, value: any) {
    const control = <FormControl>this.getFieldControl(field, this.packageForm);
    control.setValue(value, { onlySelf: true });
  }

  initializeForm(form: FormGroup, packageConfig: IPackageConfig) {
    this.packageForm.setValue({
      // general: {
      //   // plateform: template.packageConfig.plateform,
      //   plateform: Container.initialize(),
      //   name: template.packageConfig.name,
      //   generalOptions: {
      //     commonEnv: template.packageConfig.commonEnvConfig.enable
      //   }
      // },
      coreEngine: {
        version: packageConfig.coreEngineConfig.version,
      },
      filterEngine: {
        version: packageConfig.filterEngineConfig.version,
        filterEngineOptions: {
          fmlFile1: packageConfig.filterEngineConfig.fmlFile1Url !== '',
          fmlFile2: packageConfig.filterEngineConfig.fmlFile2Url !== '',
          scoreFile: packageConfig.filterEngineConfig.scoreFileUrl !== ''
        }
      },
      continuityBackend: {
        version: packageConfig.modulesConfig[0].version,
        modules: {
          aquisition: ModuleConfig.moduleIsActivate(packageConfig.modulesConfig, ModuleType.AQUISITION),
          requester: ModuleConfig.moduleIsActivate(packageConfig.modulesConfig, ModuleType.REQUESTER),
          dbclient: ModuleConfig.moduleIsActivate(packageConfig.modulesConfig, ModuleType.DBCLIENT)
        }
      },
      database: {
        dbtype: packageConfig.databaseConfig.type,
        username: packageConfig.databaseConfig.username,
        password: packageConfig.databaseConfig.password,
        hostname: packageConfig.databaseConfig.hostname,
        port: packageConfig.databaseConfig.port,
        service: packageConfig.databaseConfig.service
      }
    }, { onlySelf: true });

  }

}
