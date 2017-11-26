import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FileEditorGlobalService } from '../../common/services/data/file-editor-service.data.service';

declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-file-editor',
    templateUrl: 'file-editor.component.html',
    styleUrls: ['file-editor.component.css']
})
export class FileEditorComponent implements AfterViewInit {

    configEditor: any = { lineNumbers: true };

    content: string;

    fileName: string = 'File Name';

    constructor(private fileEditorService: FileEditorGlobalService) {
        this.content = ``;
    }

    ngAfterViewInit(): void {
        var sidebar = jQuery('#fileeditsidebar');
        var overlay = jQuery('.overlay');

        jQuery(window).click(function (e: any) {
            var target = jQuery(e.target);

            var isOpen = jQuery('.file-edit-sidebar').hasClass('open');
            if (isOpen && target.parents('#fileeditsidebar').length === 0 && !target.hasClass('btn-file-editor')) {
                overlay.fadeOut();
                sidebar.removeClass('open');
            }
        });

        this.resizeBody();

        window.onresize = () => {
            this.resizeBody();
        };
    }

    resizeBody() {
        var wrapper = jQuery('#fileeditsidebar');
        var footer = jQuery('#fileeditsidebar .footer');
        var header = jQuery('#fileeditsidebar .wrapper .header');
        var body = jQuery('#fileeditsidebar .wrapper .body');
        body.outerHeight(wrapper.height() - (header.outerHeight() + footer.outerHeight()));
    }


    save() {
        this.fileEditorService.closeFileEditor();
    }

    cancel() {
        this.fileEditorService.closeFileEditor();
    }

}
