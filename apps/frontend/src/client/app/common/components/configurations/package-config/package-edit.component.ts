import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TreeNode, FileType, TreeNodeParams } from '../../../modules/fix-tree-folder/tree-node.model';
import { IPackageConfig, PackageConfig } from '../../../models/domain/package-config.model';
import { Container, OS, findIconContainer } from '../../../models/domain/container.model';
import { PackageConfigDataService } from '../../../services/data/package.data.service';


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
export class PackageEditComponent implements OnInit {

  dir: TreeNode;
  data: string;

  packageConfig: Observable<IPackageConfig>;

  constructor(
    private packageConfigDataService: PackageConfigDataService
  ) {
    this.intitializeFilesTree();
  }

  ngOnInit() {
    this.packageConfig = this.packageConfigDataService.config;
  }

  intitializeFilesTree() {
    const treeNodeParam: TreeNodeParams = {
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
                { name: 'test2.jpg', type: FileType.file, edit: true },
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
  editData(node: TreeNode) {
    console.log(node);
    this.data = node.stringify();
  }
  deleteData(node: TreeNode) {
    console.log(node);
    this.data = node.stringify();
  }

  getContainerIcon(os: OS): string {
    return findIconContainer(os);
  }

}
