import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { BootstrapSelect, Option } from '../../../../models/view/bootstrap-select.model';
import { IContainer, findIconContainer } from '../../../../models/domain/container.model';
import { ContainerService } from '../../../../services/containers.service';
import { PackageConfig, IPackageConfig } from '../../../../models/domain/package-config.model';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-general-edit',
    templateUrl: 'general-edit.component.html',
    styleUrls: ['general-edit.component.css']
})
export class GeneralEditComponent implements OnInit {

    private generalForm: FormGroup;
    private formSumitAttempt: boolean;

    private packageConfig: IPackageConfig;

    private containerSelect: BootstrapSelect;
    private containerList: IContainer[];
    private currentContainer: IContainer;
    private containerSelectedOption: Option;


    private errorMessage: string = '';
    private isLoading: boolean = true;


    constructor(
        private containerService: ContainerService,
        private formBuilder: FormBuilder
    ) {
        this.packageConfig = PackageConfig.initialize();
        this.containerSelect = new BootstrapSelect();
    }


    ngOnInit() {
        this.buildForm();

        this.containerService
            .getAll()
            .subscribe(containers => {
                this.containerList = containers;
                this.initializeContainerSelect(containers);
            },
            e => this.errorMessage = e,
            () => {
                this.isLoading = false;
            });
    }


    initializeContainerSelect(containers: IContainer[], containerSelected: IContainer = null): void {
        var self = this;
        this.containerSelect = new BootstrapSelect();
        this.containerSelect.placeholder = 'Choose Container ...';
        containers.forEach((item, index) => {
            var selected = false;
            if (containerSelected !== null && containerSelected.id === item.id) {
                selected = true;
            }
            self.containerSelect.addOption('' + item.id, item.name, selected, findIconContainer(item.os));
        });
    }

    onSelectedContainerOption(option: Option) {
        this.containerSelectedOption = option;
        var idContainer = Number(option.value);
        this.currentContainer = this.containerList.filter((container: IContainer) => container.id === idContainer)[0];
        this.generalForm.controls.plateform.setValue(this.currentContainer, { onlySelf: true });
        this.initializeForm(this.generalForm, this.packageConfig);
    }

    buildForm() {
        this.generalForm = this.formBuilder.group({
            plateform: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            generalOptions: this.formBuilder.group({
                commonEnv: new FormControl(false)

            })
        });
    }

    initializeForm(form: FormGroup, packageConfig: IPackageConfig) {
        this.generalForm.setValue({
            plateform: packageConfig.plateform,
            name: packageConfig.name,
            generalOptions: {
                commonEnv: packageConfig.commonEnvConfig.enable
            }
        });
    }

}

