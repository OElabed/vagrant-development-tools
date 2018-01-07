import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../../common/services/external/authentication.api.service';

/**
 * This class represents the headerbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-headerbar',
  templateUrl: 'headerbar.component.html',
  styleUrls: ['headerbar.component.css']
})
export class HeaderbarComponent {

  private errorMessage = '';
  private isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  onLogout() {
    this.authService.logout()
      .subscribe(isLogged => {
        if (isLogged) {
          this.router.navigate(['/login']);
        }
      },
      e => this.errorMessage = e,
      () => {
        this.isLoading = false;
      });

  }
}

