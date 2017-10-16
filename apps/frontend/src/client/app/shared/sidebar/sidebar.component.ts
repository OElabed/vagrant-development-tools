import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * This class represents the sidebar component.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent {

  @Input()
  toggle: boolean;

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  toggleSidebar() {
    this.change.emit();
  }

}

