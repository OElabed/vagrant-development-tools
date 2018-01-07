import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Wizard, WizardStep } from '../../common/models/view/wizard.model';
import { IPackageConfig, PackageConfig } from '../../common/models/domain/package-config.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../common/services/external/authentication.api.service';

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

  username: string;
  password: string;

  private errorMessage = '';
  private isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    jQuery('body').addClass('login-background');
  }

  onSubmit() {

    this.authService.login(this.username, this.password)
      .subscribe(isLogged => {
        if (isLogged) {
          this.router.navigate(['/content']);
        }
      },
      e => this.errorMessage = e,
      () => {
        this.isLoading = false;
      });

  }

}
