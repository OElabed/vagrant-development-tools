import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { SimpleChanges, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { BaseFormComponent } from '../../../components/forms/base-form.component';
import { IPackageConfig, PackageConfig } from '../../../models/domain/package-config.model';
import { BootstrapSelect, Option } from '../../../models/view/bootstrap-select.model';
import { IContainer, findIconContainer } from '../../../models/domain/container.model';
import { ContainerService } from '../../../services/external/containers.api.service';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-general-edit',
    templateUrl: 'general-edit.component.html',
    styleUrls: ['general-edit.component.css']
})
export class GeneralEditComponent extends BaseFormComponent implements OnInit, OnChanges {


    @Input() config: IPackageConfig;
    @Output() configChange: EventEmitter<IPackageConfig>;

    private containerSelect: BootstrapSelect;
    private containerList: IContainer[];
    private currentContainer: IContainer;
    private containerSelectedOption: Option;


    private errorMessage = '';
    private isLoading = true;


    constructor(
        private containerService: ContainerService,
        private formBuilder: FormBuilder
    ) {
        super();
        this.config = PackageConfig.initialize();
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

    onSelectedContainerOption(option: Option) {
        this.containerSelectedOption = option;
        const containerName = String(option.value);
        this.currentContainer = this.containerList.filter((container: IContainer) => container.name === containerName)[0];
        // this.form.controls.plateform.setValue(this.currentContainer, { onlySelf: true });
        this.initializeForm(this.form, this.config);
    }

    buildForm() {
        this.form = this.formBuilder.group({
            // plateform: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            generalOptions: this.formBuilder.group({
                commonEnv: new FormControl(false)

            })
        });
    }

    initializeForm(form: FormGroup, packageConfig: IPackageConfig) {
        this.form.setValue({
            // plateform: packageConfig.plateform,
            name: packageConfig.name,
            generalOptions: {
                commonEnv: packageConfig.commonEnvConfig.enable
            }
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (typeof (changes['config'].currentValue) !== 'undefined') {
            this.initializeForm(this.form, this.config);
        }
    }

}

