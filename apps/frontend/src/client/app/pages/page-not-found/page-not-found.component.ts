import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Wizard, WizardStep } from '../../common/models/view/wizard.model';
import { IPackageConfig, PackageConfig } from '../../common/models/domain/package-config.model';
import { ActivatedRoute, Router } from '@angular/router';

declare let jQuery: any;

/**
 * This class represents the lazy loaded PackageCreationComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-page-not-found',
  templateUrl: 'page-not-found.component.html',
  styleUrls: ['page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    jQuery('body').addClass('login-background');
  }

  onSubmit() {
    this.router.navigate(['/content']);
  }

}
