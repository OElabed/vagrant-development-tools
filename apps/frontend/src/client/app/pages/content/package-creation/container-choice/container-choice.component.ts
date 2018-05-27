import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
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
 * This class represents the lazy loaded ContainerChoiceComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-container-choice',
  templateUrl: 'container-choice.component.html',
  styleUrls: ['container-choice.component.css']
})
export class ContainerChoiceComponent implements AfterViewInit, OnInit {

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

  private collapsedEelements: Map<string, any> = new Map<string, any>();
  private collapsedEelementsStatus: Map<string, boolean> = new Map<string, boolean>();

  private panelHeader: number;
  private panelFooter: number;

  constructor(
    private elementRef: ElementRef,
    private templatePackageService: TemplatePackageService,
    private containerService: ContainerService,
    private formBuilder: FormBuilder) {
    this.currentTemplatePackage = TemplatePackage.initialize();
    this.templateSelect = new BootstrapSelect();
    this.containerSelect = new BootstrapSelect();
  }

  ngAfterViewInit() {
    const $component = jQuery(this.elementRef.nativeElement);
    this.collapsedEelements = this.initializeCollapsedElements($component);
    this.collapsedEelementsStatus = this.initializeCollapsedElementsStatus($component);
    this.panelHeader = jQuery('.panel-heading').innerHeight();
    this.panelFooter = jQuery('.panel-footer').innerHeight();
    this.setCollapseBodiesHeight();
    const self = this;
    this.collapsedEelements.forEach((value: any, key: string) => {
      jQuery(value).on('show.bs.collapse', function (element: any) {
        self.collapsedEelementsStatus.set(key, true);
        self.setCollapseBodiesHeight();
      });
      jQuery(value).on('hide.bs.collapse', function (element: any) {
        self.collapsedEelementsStatus.set(key, false);
        jQuery('a[href^="#' + key + '"]').removeClass('pointer-disable');
      });
    });

    jQuery(window).resize(function () {
      self.setCollapseBodiesHeight();
    });
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
    this.templateForm = this.formBuilder.group({
      general: this.formBuilder.group({
        name: new FormControl('', Validators.required),
        generalOptions: this.formBuilder.group({
          commonEnv: new FormControl(false)
        })
      }),
      coreEngine: this.formBuilder.group({
        version: new FormControl('', [Validators.required, PackageValidators.version])
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

  initializeCollapsedElements($component: any): Map<string, any> {
    const map = new Map<string, any>();
    map.set('collapseGeneralConfig', jQuery($component).find('#collapseGeneralConfig'));
    map.set('collapseCoreEngine', jQuery($component).find('#collapseCoreEngine'));
    map.set('collapseFilterEngine', jQuery($component).find('#collapseFilterEngine'));
    map.set('collapseContinuityBackend', jQuery($component).find('#collapseContinuityBackend'));
    map.set('collapseDatabase', jQuery($component).find('#collapseDatabase'));
    return map;
  }

  initializeCollapsedElementsStatus($component: any): Map<string, boolean> {
    const map = new Map<string, boolean>();
    map.set('collapseGeneralConfig', jQuery($component).find('#collapseGeneralConfig').hasClass('in'));
    map.set('collapseCoreEngine', jQuery($component).find('#collapseCoreEngine').hasClass('in'));
    map.set('collapseFilterEngine', jQuery($component).find('#collapseFilterEngine').hasClass('in'));
    map.set('collapseContinuityBackend', jQuery($component).find('#collapseContinuityBackend').hasClass('in'));
    map.set('collapseDatabase', jQuery($component).find('#collapseDatabase').hasClass('in'));
    return map;
  }

  setCollapseBodiesHeight() {
    const activeCollapse = this.getCollapsedComponentsActive(this.collapsedEelementsStatus);

    this.collapsedEelementsStatus.forEach((value: boolean, key: string) => {
      const self = this;
      if (activeCollapse === key) {
        const wrapperHeight = jQuery('.container-choice-config').innerHeight();
        const collapseHeight = wrapperHeight - 6 * (this.panelHeader + 9) - this.panelFooter;
        jQuery('#' + key).find('.panel-body').height(collapseHeight + 'px');
        jQuery('a[href^="#' + key + '"]').addClass('pointer-disable');
      } else {
        jQuery('#' + key).css('height', null);
      }
    });
  }

  getCollapsedComponentsIndex(map: Map<string, number>, component: string): number {
    let index = 0;
    map.forEach((value: number, key: string) => {
      if (key === component) {
        index = value;
      }
    });
    return index;
  }

  getCollapsedComponentsActive(map: Map<string, boolean>): string {
    let active = '';
    map.forEach((value: boolean, key: string) => {
      if (value === true) {
        active = key;
      }
    });
    return active;
  }

  initializeTemplateSelect(templates: ITemplatePackage[]): void {
    const self = this;
    this.templateSelect = new BootstrapSelect();
    this.templateSelect.placeholder = 'Choose Template ...';
    templates.forEach((item, index) => {
      self.templateSelect.addOption('' + item.id, item.name, false);
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
  //     self.containerSelect.addOption(item.name, item.name, selected, findIconContainer(item.os));
  //   });
  // }

  onSelectedTemplateOption(option: Option) {
    this.templateSelectedOption = option;
    const idTemplate = Number(option.value);
    this.currentTemplatePackage = this.templatePackageList.filter((template: ITemplatePackage) => template.id === idTemplate)[0];
    // this.initializeContainerSelect(this.containerList, this.currentTemplatePackage.packageConfig.plateform);
    this.initializeForm(this.templateForm, this.currentTemplatePackage);
  }

  // onSelectedContainerOption(option: Option) {
  //   this.containerSelectedOption = option;
  //   const idContainer = option.value;
  //   this.currentContainer = this.containerList.filter((container: IContainer) => container.name === idContainer)[0];
  //   this.setValueFormControl('container.platform', this.currentContainer);
  //   (<FormGroup>this.templateForm.controls.container)
  //     .controls.plateform.setValue(this.currentContainer, { onlySelf: true });
  // }

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
    const self = this;
    this.templateForm.setValue({
      general: {
        name: template.packageConfig.name,
        generalOptions: {
          commonEnv: template.packageConfig.commonEnvConfig.enable
        }
      },
      coreEngine: {
        version: template.packageConfig.coreEngineConfig.version
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
