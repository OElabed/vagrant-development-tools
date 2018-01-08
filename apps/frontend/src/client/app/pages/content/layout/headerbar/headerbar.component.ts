import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../../common/services/external/authentication.api.service';
import { IUser, User } from '../../../../common/models/domain/user.model';

/**
 * This class represents the headerbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-headerbar',
  templateUrl: 'headerbar.component.html',
  styleUrls: ['headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

  private errorMessage = '';
  private isLoading = true;

  private userInfos: IUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.userInfos = User.initialize();
  }

  ngOnInit(): void {
    this.userInfos = this.route.snapshot.data['user'];
    console.log(this.userInfos);
  }

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

