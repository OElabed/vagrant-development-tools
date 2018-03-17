import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodemirrorModule } from 'ng2-codemirror';

import { FixWidgetComponent } from '../components/widgets/fix-widget/fix-widget.component';
import { FixWidgetHeaderComponent } from '../components/widgets/fix-widget-header/fix-widget-header.component';
import { FixWidgetFooterComponent } from '../components/widgets/fix-widget-footer/fix-widget-footer.component';
import { FixWidgetBodyComponent } from '../components/widgets/fix-widget-body/fix-widget-body.component';
import { FixLoadingComponent } from '../components/widgets/fix-loading/fix-loading.component';
import { FixAlertsComponent } from '../components/widgets/fix-alerts-bar/fix-alerts-bar.component';

import { FieldErrorDisplayComponent } from '../components/forms/field-error-display/field-error-display.component';
import { BootstrapSelectComponent } from '../components/forms/bootstrap-select/bootstrap-select.component';


import { RoutingGlobalService } from '../services/data/routing-global.data.service';
import { FileEditorGlobalService } from '../services/data/file-editor-service.data.service';

import { TooltipModule } from 'ngx-bootstrap';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CodemirrorModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    FixWidgetComponent,
    FixWidgetHeaderComponent,
    FixWidgetFooterComponent,
    FixWidgetBodyComponent,
    FixLoadingComponent,
    FixAlertsComponent,
    FieldErrorDisplayComponent,
    BootstrapSelectComponent
  ],
  exports: [
    FixWidgetComponent,
    FixWidgetHeaderComponent,
    FixWidgetFooterComponent,
    FixWidgetBodyComponent,
    FixLoadingComponent,
    FixAlertsComponent,
    FieldErrorDisplayComponent,
    BootstrapSelectComponent,

    TooltipModule,
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
