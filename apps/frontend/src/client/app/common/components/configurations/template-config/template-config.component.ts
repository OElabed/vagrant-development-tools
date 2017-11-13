import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { ITemplatePackage, TemplatePackage } from '../../../models/domain/template-package.model';

import { IAddFileFormConfig, AddFileFormConfig, AddFileFormType } from '../../../models/view/add-file-config.model';
import { FileUploaderFormConfig } from '../../../models/view/file-upload-config.model';
import { PackageValidators } from '../../../validators/package.validaors';
import { TemplatePackageService } from '../../../services/template-package.service';

declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-template-config',
    templateUrl: 'template-config.component.html',
    styleUrls: ['template-config.component.css']
})
export class TemplateConfigComponent implements AfterViewInit, OnInit {

    // https://plnkr.co/edit/p0ApU2yT62jnzu9nKkng?p=preview

    private templateForm: FormGroup;
    private formSumitAttempt: boolean;

    private currentTemplatePackage: ITemplatePackage;
    private templatePackageList: ITemplatePackage[];

    private errorMessage: string = '';
    private isLoading: boolean = true;

    constructor(private templatePackageService: TemplatePackageService) {

        this.currentTemplatePackage = TemplatePackage.initialize();
    }

    ngOnInit() {
        this.templateForm = new FormGroup({
            'general': new FormGroup({
                'plateform': new FormControl('', Validators.required),
                'name': new FormControl('', Validators.required),
                'generalOptions': new FormGroup({
                    'commonEnv': new FormControl('')
                })
            }),
            'coreEngine': new FormGroup({
                'version': new FormControl('', [Validators.required, PackageValidators.version]),
                'push': new FormControl('', [Validators.required, PackageValidators.number])
            }),
            'filterEngine': new FormGroup({
                'version': new FormControl('', [Validators.required, PackageValidators.version]),
                'filterEngineOptions': new FormGroup({
                    'fmlFile1': new FormControl(''),
                    'fmlFile2': new FormControl(''),
                    'scoreFile': new FormControl(''),
                })
            }),
            'continuityBackend': new FormGroup({
                'version': new FormControl('', [Validators.required, PackageValidators.version]),
                'push': new FormControl('', [Validators.required, PackageValidators.number]),
                'modules': new FormGroup({
                    'aquisition': new FormControl(''),
                    'requester': new FormControl(''),
                    'dbclient': new FormControl('')
                })
            }),
            'database': new FormGroup({
                'dbtype': new FormControl('', Validators.required),
                'username': new FormControl('', Validators.required),
                'password': new FormControl('', Validators.required),
                'hostname': new FormControl('', Validators.required),
                'port': new FormControl('', Validators.required),
                'service': new FormControl('', Validators.required)
            })
        });

        this.templatePackageService
            .getAll()
            .subscribe(
         /* happy path */ p => this.templatePackageList = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
    }

    ngAfterViewInit(): void {
        jQuery('.selecttemplate').selectpicker();
        jQuery('.selectplateform').selectpicker();
    }

    isFieldValid(field: string) {
        var fieldControl = this.getFieldControl(field);
        return (
            (!fieldControl.valid && fieldControl.touched) ||
            (fieldControl.untouched && this.formSumitAttempt)
        );
    }

    getFieldControl(field: string): AbstractControl {
        var splitted = field.split('.');
        var formGroup: AbstractControl = this.templateForm;
        var control: AbstractControl;
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
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
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

}
