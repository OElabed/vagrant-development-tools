import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Config } from '../../common/shared/config/env.config';
import { IPackageConfig, PackageConfig } from '../../common/models/domain/package-config.model';

declare let jQuery: any;

/**
 * This class represents the lazy loaded PackageCreationComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})
export class ContentComponent {

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
