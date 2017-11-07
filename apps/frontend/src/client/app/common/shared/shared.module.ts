import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodemirrorModule } from 'ng2-codemirror';

import { HeaderbarComponent } from '../components/layout/headerbar/headerbar.component';
import { SidebarComponent } from '../components/layout/sidebar/sidebar.component';
import { FixWidgetComponent } from '../components/widgets/fix-widget/fix-widget.component';
import { FixWidgetHeaderComponent } from '../components/widgets/fix-widget-header/fix-widget-header.component';
import { FixWidgetFooterComponent } from '../components/widgets/fix-widget-footer/fix-widget-footer.component';
import { FixWidgetBodyComponent } from '../components/widgets/fix-widget-body/fix-widget-body.component';
import { FixLoadingComponent } from '../components/widgets/fix-loading/fix-loading.component';
import { FixAlertsComponent } from '../components/widgets/fix-alerts-bar/fix-alerts-bar.component';


import { RoutingGlobalService } from '../services/routing-global.service';
import { FileEditorGlobalService } from '../services/file-editor-service.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, CodemirrorModule],
  declarations: [
    HeaderbarComponent,
    SidebarComponent,
    FixWidgetComponent,
    FixWidgetHeaderComponent,
    FixWidgetFooterComponent,
    FixWidgetBodyComponent,
    FixLoadingComponent,
    FixAlertsComponent
  ],
  exports: [
    HeaderbarComponent,
    SidebarComponent,
    FixWidgetComponent,
    FixWidgetHeaderComponent,
    FixWidgetFooterComponent,
    FixWidgetBodyComponent,
    FixLoadingComponent,
    FixAlertsComponent,

    CodemirrorModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RoutingGlobalService, FileEditorGlobalService]
    };
  }
}
