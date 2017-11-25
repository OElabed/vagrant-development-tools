import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Wizard, WizardStep } from '../../common/models/view/wizard.model';
import { IPackageConfig } from '../../common/models/domain/package-config.model';

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
export class PackageCreationComponent {

  packageConfig: IPackageConfig;

  configType: ConfigType = ConfigType.FORM;

  // constructor() {

  // }


  onChangeConfigType(type: any) {
    this.configType = type;
  }

}
