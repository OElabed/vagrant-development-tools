import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileTreeComponent } from './file-tree.component';
import { NodeComponent } from './node.component';
import { ContextmenuModule } from '../fix-context-menu/contextmenu.module';

@NgModule({
  imports: [CommonModule, ContextmenuModule],
  declarations: [FileTreeComponent, NodeComponent],
  exports: [FileTreeComponent, NodeComponent]
})
export class FixFileTreeModule {
}
