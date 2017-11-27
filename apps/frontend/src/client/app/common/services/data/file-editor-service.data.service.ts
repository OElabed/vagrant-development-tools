import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

declare let jQuery: any;

/**
 * This class provides the RoutingGlobal service with methods to read names and add names.
 */
@Injectable()
export class FileEditorGlobalService {

  contentFile: String;

  openFileEditor(content: string) {
    this.contentFile = content;
    var sidebar = jQuery('#fileeditsidebar');
    var overlay = jQuery('.overlay');
    sidebar.toggleClass('open');
    if (this.isOpenFileEditor()) {
      overlay.fadeIn();
    } else {
      overlay.fadeOut();
    }
  }

  closeFileEditor() {
    var sidebar = jQuery('#fileeditsidebar');
    var overlay = jQuery('.overlay');

    overlay.fadeOut();
    sidebar.removeClass('open');
  }

  isOpenFileEditor(): boolean {
    return jQuery('.file-edit-sidebar').hasClass('open');
  }

  setActivePage(contentFile: string) {
    this.contentFile = contentFile;
  }

  getActivePage(): String {
    return this.contentFile;
  }


}
