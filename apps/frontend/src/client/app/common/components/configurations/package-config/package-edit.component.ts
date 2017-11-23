import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TreeNode, FileType, TreeNodeParams } from '../../../modules/fix-tree-folder/tree-node.model';


declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-package-edit',
    templateUrl: 'package-edit.component.html',
    styleUrls: ['package-edit.component.css']
})
export class PackageEditComponent {

    dir: TreeNode;
    data: string;

    constructor() {




        var treeNodeParam: TreeNodeParams = {
            name: 'photos',
            type: FileType.dir,
            children: [
                {
                    name: 'summer',
                    type: FileType.dir,
                    focus: true,
                    children: [
                        {
                            name: 'june',
                            type: FileType.dir,
                            children: [
                                { name: 'abc.jpg', type: FileType.file },
                                { name: 'def.jpg', type: FileType.file },
                                { name: 'test.jpg', type: FileType.file },
                                { name: 'test2.jpg', type: FileType.file },
                                { name: 'zzzz.jpg', type: FileType.file },
                            ]
                        }
                    ]
                },
                { name: 'global.jpg', type: FileType.file }
            ]
        };

        this.dir = new TreeNode(treeNodeParam);
    }

    updateData(node: TreeNode) {
        console.log(node);
        this.data = node.stringify();
    }

}
