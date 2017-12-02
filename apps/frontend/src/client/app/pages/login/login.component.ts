import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Wizard, WizardStep } from '../../common/models/view/wizard.model';
import { IPackageConfig, PackageConfig } from '../../common/models/domain/package-config.model';

declare let jQuery: any;

/**
 * This class represents the lazy loaded PackageCreationComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
    document.querySelector('body').className = 'login-background';
  }

}
