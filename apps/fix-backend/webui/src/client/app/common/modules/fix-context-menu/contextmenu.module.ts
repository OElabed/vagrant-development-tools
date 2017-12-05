import { NgModule, ModuleWithProviders } from '@angular/core';

import { ContextmenuComponent } from './contextmenu.component';
import { ContextmenuDirective } from './contextmenu.directive';

@NgModule({
  declarations: [
    ContextmenuDirective,
    ContextmenuComponent
  ],
  bootstrap: [

  ],
  providers: [
  ],
  exports: [
    ContextmenuDirective,
    ContextmenuComponent
  ]
})
export class ContextmenuModule {

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ContextmenuModule
    };
  }
}
