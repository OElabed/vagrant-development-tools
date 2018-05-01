import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PackageConfigDataService } from '../../../common/services/data/package.data.service';
import { TreeNode, FileType, TreeNodeParams } from '../../../common/modules/fix-tree-folder/tree-node.model';
import { OS, findIconContainer } from '../../../common/models/domain/container.model';
import { IPackageConfig } from '../../../common/models/domain/package-config.model';

declare let jQuery: any;

enum ConfigType {
  YAML = 'YAML',
  FORM = 'FORM'
}

/**
 * This class represents the lazy loaded PackageDetailsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-package-details',
  templateUrl: 'package-details.component.html',
  styleUrls: ['package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

  dir: TreeNode;
  data: string;

  @Input()
  packageConfig: Observable<IPackageConfig>;

  configType: ConfigType;

  constructor() {
    this.intitializeFilesTree();
  }

  ngOnInit() {
    //this.packageConfig = this.packageConfigDataService.config;
    //console.log(this.packageConfig);
    this.configType = ConfigType.FORM;
  }

  onChangeConfigType(type: any) {
    this.configType = type;
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
