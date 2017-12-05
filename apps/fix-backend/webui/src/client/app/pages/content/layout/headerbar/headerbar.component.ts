import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onLogout() {
    this.router.navigate(['/login']);
  }
}

