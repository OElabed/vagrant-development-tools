import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../common/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { ActionsComponent } from './actions/actions.component';
import { ModuleWidgetComponent } from './module-widget/module-widget.component';
import { PackageInfosComponent } from './package-infos/package-infos.component';

@NgModule({
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
  declarations: [DashboardComponent, ActionsComponent, ModuleWidgetComponent, PackageInfosComponent],
  exports: [DashboardComponent, ActionsComponent, ModuleWidgetComponent, PackageInfosComponent]
})
export class DashboardModule { }
