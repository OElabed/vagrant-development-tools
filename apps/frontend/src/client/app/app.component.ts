import { Component } from '@angular/core';
import { Config } from './common/shared/config/env.config';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {

  toggle = false;
  mobileView = 992;

  constructor() {
    console.log('Environment config', Config);
    this.attachEvents();
    this.toggle = localStorage.getItem('toggle') === 'true' ? true : false;
  }

  attachEvents() {
    window.onresize = () => {
      if (this.getWidth() <= this.mobileView) {
        if (localStorage.getItem('toggle') === 'true') {
          this.toggle = false;
        }
      } else {
        if (localStorage.getItem('toggle') === 'true') {
          this.toggle = true;
        }
      }
    };
  }

  getWidth() {
    return window.innerWidth;
  }

  toggleChange(event: any) {
    this.toggle = !this.toggle;
    localStorage.setItem('toggle', this.toggle.toString());
  }
}
