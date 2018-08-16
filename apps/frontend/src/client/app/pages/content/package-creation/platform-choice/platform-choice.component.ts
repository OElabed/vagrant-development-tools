import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { findIconContainer, IContainer } from '../../../../common/models/domain/container.model';
import { BootstrapSelect, Option } from '../../../../common/models/view/bootstrap-select.model';
import { PackageCreationDataService } from '../../../../common/services/data/package-creation.data.service';
import { ContainerService } from '../../../../common/services/external/containers.api.service';
import { PackageValidators } from '../../../../common/validators/package.validaors';
import { IWizard } from '../../../../common/models/view/wizard.model';
import { Observable } from 'rxjs/Observable';

declare let jQuery: any;

/**
 * This class represents the lazy loaded PlatformChoiceComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-platform-choice',
  templateUrl: 'platform-choice.component.html',
  styleUrls: ['platform-choice.component.css']
})
export class PlatformChoiceComponent implements AfterViewInit, OnInit {

  // https://plnkr.co/edit/p0ApU2yT62jnzu9nKkng?p=preview

  private containerForm: FormGroup;
  private formSumitAttempt: boolean;


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

  private wizard: Observable<IWizard>;


  constructor(
    private packageCreationDataService: PackageCreationDataService,
    private elementRef: ElementRef,
    private containerService: ContainerService,
    private formBuilder: FormBuilder) {
    this.containerSelect = new BootstrapSelect();
  }

  ngAfterViewInit() {
    console.log('contain');
  }

  ngOnInit() {

    this.buildForm();
    this.packageCreationDataService.init();
    this.wizard = this.packageCreationDataService.wizardState;

    this.packageCreationDataService.wizardState.subscribe(wizard => {
      console.log(wizard.getOrdredList());
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
    this.containerForm = this.formBuilder.group({

      container: this.formBuilder.group({
        platform: new FormControl('', [Validators.required, PackageValidators.version])
      })
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
      self.containerSelect.addOption(item.name, item.name, selected, findIconContainer(item.os));
    });
  }

  onSelectedContainerOption(option: Option) {
    this.containerSelectedOption = option;
    const idContainer = option.value;
    this.currentContainer = this.containerList.filter((container: IContainer) => container.name === idContainer)[0];
    this.setValueFormControl('container.platform', this.currentContainer);
    (<FormGroup>this.containerForm.controls.container)
      .controls.platform.setValue(this.currentContainer, { onlySelf: true });
  }

  isFieldNotValid(field: string) {
    const fieldControl = this.getFieldControl(field, this.containerForm);
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
    if (this.containerForm.valid) {
      console.log('form submitted');
    }
  }

  reset() {
    this.containerForm.reset();
    this.formSumitAttempt = false;
  }

  setValueFormControl(field: string, value: any) {
    const control = <FormControl>this.getFieldControl(field, this.containerForm);
    control.setValue(value, { onlySelf: true });
  }

}
