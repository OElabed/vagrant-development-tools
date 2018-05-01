import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Wizard, WizardStep } from '../../../../common/models/view/wizard.model';
import { IPackageConfig, PackageConfig } from '../../../../common/models/domain/package-config.model';
import { PackageConfigDataService } from '../../../../common/services/data/package.data.service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { BootstrapSelect, Option } from '../../../../common/models/view/bootstrap-select.model';
import { ITemplatePackage, TemplatePackage } from '../../../../common/models/domain/template-package.model';
import { IContainer, findIconContainer, Container } from '../../../../common/models/domain/container.model';
import { TemplatePackageService } from '../../../../common/services/external/template-package.api.service';
import { ContainerService } from '../../../../common/services/external/containers.api.service';
import { PackageValidators } from '../../../../common/validators/package.validaors';
import { ModuleConfig } from '../../../../common/models/domain/module-config.model';
import { ModuleType } from '../../../../common/models/domain/module.model';

declare let jQuery: any;

/**
 * This class represents the lazy loaded TemplateChoiceComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-template-choice',
  templateUrl: 'template-choice.component.html',
  styleUrls: ['template-choice.component.css']
})
export class TemplateChoiceComponent implements OnInit {

  // https://plnkr.co/edit/p0ApU2yT62jnzu9nKkng?p=preview

  private templateForm: FormGroup;
  private formSumitAttempt: boolean;

  private templateSelect: BootstrapSelect;
  private templateSelectedOption: Option;
  private currentTemplatePackage: ITemplatePackage;
  private templatePackageList: ITemplatePackage[];

  private containerSelect: BootstrapSelect;
  private containerList: IContainer[];
  private currentContainer: IContainer;
  private containerSelectedOption: Option;



  private errorMessage = '';
  private isLoading = true;

  constructor(
    private templatePackageService: TemplatePackageService,
    private containerService: ContainerService,
    private formBuilder: FormBuilder) {
    this.currentTemplatePackage = TemplatePackage.initialize();
    this.templateSelect = new BootstrapSelect();
    this.containerSelect = new BootstrapSelect();
  }

  ngOnInit() {

    this.buildForm();

    this.templatePackageService
      .getAll()
      .subscribe(templates => {
        this.templatePackageList = templates;
        this.initializeTemplateSelect(templates);
      },
        e => this.errorMessage = e,
        () => {
          this.isLoading = false;
        });

    this.containerService
      .getAll()
      .subscribe(containers => {
        this.containerList = containers;
        this.initializeContainerSelect(containers);

        console.log(containers);
      },
        e => this.errorMessage = e,
        () => {
          this.isLoading = false;
        });
  }


  buildForm() {
    this.templateForm = this.formBuilder.group({
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

  initializeTemplateSelect(templates: ITemplatePackage[]): void {
    const self = this;
    this.templateSelect = new BootstrapSelect();
    this.templateSelect.placeholder = 'Choose Template ...';
    templates.forEach((item, index) => {
      self.templateSelect.addOption('' + item.id, item.name, false);
    });
  }

  initializeContainerSelect(containers: IContainer[], containerSelected: IContainer = null): void {
    const self = this;
    this.containerSelect = new BootstrapSelect();
    this.containerSelect.placeholder = 'Choose Container ...';
    containers.forEach((item, index) => {
      let selected = false;
      if (containerSelected !== null && containerSelected.name === item.name) {
        selected = true;
      }
      self.containerSelect.addOption('' + item.name, item.name, selected, findIconContainer(item.os));
    });
  }

  onSelectedTemplateOption(option: Option) {
    this.templateSelectedOption = option;
    const idTemplate = Number(option.value);
    this.currentTemplatePackage = this.templatePackageList.filter((template: ITemplatePackage) => template.id === idTemplate)[0];
    // this.initializeContainerSelect(this.containerList, this.currentTemplatePackage.packageConfig.plateform);
    this.initializeForm(this.templateForm, this.currentTemplatePackage);
  }

  onSelectedContainerOption(option: Option) {
    this.containerSelectedOption = option;
    const containerName = String(option.value);
    this.currentContainer = this.containerList.filter((container: IContainer) => container.name === containerName)[0];
    // this.setValueFormControl('general.plateform', this.currentContainer);
    // (<FormGroup>this.templateForm.controls.general)
    // .controls.plateform.setValue(this.currentContainer, { onlySelf: true });
  }

  isFieldNotValid(field: string) {
    const fieldControl = this.getFieldControl(field, this.templateForm);
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
    if (this.templateForm.valid) {
      console.log('form submitted');
    }
  }

  reset() {
    this.templateForm.reset();
    this.formSumitAttempt = false;
  }

  setValueFormControl(field: string, value: any) {
    const control = <FormControl>this.getFieldControl(field, this.templateForm);
    control.setValue(value, { onlySelf: true });
  }

  initializeForm(form: FormGroup, template: ITemplatePackage) {
    this.templateForm.setValue({
      general: {
        // plateform: template.packageConfig.plateform,
        plateform: Container.initialize(),
        name: template.packageConfig.name,
        generalOptions: {
          commonEnv: template.packageConfig.commonEnvConfig.enable
        }
      },
      coreEngine: {
        version: template.packageConfig.coreEngineConfig.version,
      },
      filterEngine: {
        version: template.packageConfig.filterEngineConfig.version,
        filterEngineOptions: {
          fmlFile1: template.packageConfig.filterEngineConfig.fmlFile1Url !== '',
          fmlFile2: template.packageConfig.filterEngineConfig.fmlFile2Url !== '',
          scoreFile: template.packageConfig.filterEngineConfig.scoreFileUrl !== ''
        }
      },
      continuityBackend: {
        version: template.packageConfig.modulesConfig[0].version,
        modules: {
          aquisition: ModuleConfig.moduleIsActivate(template.packageConfig.modulesConfig, ModuleType.AQUISITION),
          requester: ModuleConfig.moduleIsActivate(template.packageConfig.modulesConfig, ModuleType.REQUESTER),
          dbclient: ModuleConfig.moduleIsActivate(template.packageConfig.modulesConfig, ModuleType.DBCLIENT)
        }
      },
      database: {
        dbtype: template.packageConfig.databaseConfig.type,
        username: template.packageConfig.databaseConfig.username,
        password: template.packageConfig.databaseConfig.password,
        hostname: template.packageConfig.databaseConfig.hostname,
        port: template.packageConfig.databaseConfig.port,
        service: template.packageConfig.databaseConfig.service
      }
    }, { onlySelf: true });

  }
}
