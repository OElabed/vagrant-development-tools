import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Wizard, WizardStep } from '../../../common/models/view/wizard.model';
import { IPackageConfig, PackageConfig } from '../../../common/models/domain/package-config.model';
import { PackageConfigDataService } from '../../../common/services/data/package.data.service';

declare let jQuery: any;

enum ConfigType {
  YAML = 'YAML',
  FORM = 'FORM',
  TEMPLATE = 'TEMPLATE'
}

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

  configType: ConfigType = ConfigType.FORM;

  constructor(private packageConfigDataService: PackageConfigDataService) {}

  ngOnInit() {
    this.packageConfigDataService.initPackage();
  }

  onChangeConfigType(type: any) {
    this.configType = type;
  }

}
