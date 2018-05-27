import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import {
  async
} from '@angular/core/testing';
import {
  Route
} from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/content/dashboard/dashboard.component';
import { SidebarComponent } from './pages/content/layout/sidebar/sidebar.component';
import { HeaderbarComponent } from './pages/content/layout/headerbar/headerbar.component';
import { FixAlertsComponent } from './common/components/widgets/fix-alerts-bar/fix-alerts-bar.component';
import { ModuleWidgetComponent } from './pages/content/dashboard/module-widget/module-widget.component';
import { FixWidgetBodyComponent } from './common/components/widgets/fix-widget-body/fix-widget-body.component';
import { FixWidgetComponent } from './common/components/widgets/fix-widget/fix-widget.component';
import { FixLoadingComponent } from './common/components/widgets/fix-loading/fix-loading.component';
import { PackageInfosComponent } from './pages/content/dashboard/package-infos/package-infos.component';
import { FixWidgetHeaderComponent } from './common/components/widgets/fix-widget-header/fix-widget-header.component';
import { ActionsComponent } from './pages/content/dashboard/actions/actions.component';

export function main() {

  describe('App component', () => {

    const config: Route[] = [
      { path: '', component: DashboardComponent },
      // { path: 'about', component: AboutComponent }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule.withRoutes(config)],
        declarations: [TestComponent, SidebarComponent,
          HeaderbarComponent, FixAlertsComponent, ModuleWidgetComponent, PackageInfosComponent,
          FixWidgetHeaderComponent, ActionsComponent,
          FixWidgetBodyComponent, FixWidgetComponent, FixLoadingComponent, AppComponent,
          DashboardComponent],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      });
    });

    it('should build without a problem',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            const compiled = fixture.nativeElement;

            expect(compiled).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<fix-app></fix-app>'
})

class TestComponent {
}



