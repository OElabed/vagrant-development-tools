import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Wizard, WizardStep } from '../../../common/models/view/wizard.model';
import { IPackageConfig, PackageConfig } from '../../../common/models/domain/package-config.model';
import { PackageCreationDataService } from '../../../common/services/data/package-creation.data.service';

declare let jQuery: any;

/**
 * This class represents the lazy loaded PackageCreationComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-package-creation',
  templateUrl: 'package-creation.component.html',
  styleUrls: ['package-creation.component.css']
})
export class PackageCreationComponent implements OnInit {

  constructor(private packageCreationDataService: PackageCreationDataService) { }

  ngOnInit() {
    this.packageCreationDataService.initPackage();
  }
}
