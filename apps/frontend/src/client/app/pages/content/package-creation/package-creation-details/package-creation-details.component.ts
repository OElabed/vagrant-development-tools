import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PackageConfigDataService } from '../../../../common/services/data/package.data.service';
import { TreeNode, FileType, TreeNodeParams } from '../../../../common/modules/fix-tree-folder/tree-node.model';
import { OS, findIconContainer } from '../../../../common/models/domain/container.model';
import { IPackageConfig } from '../../../../common/models/domain/package-config.model';

declare let jQuery: any;

/**
 * This class represents the lazy loaded PackageDetailsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-package-creation-details',
  templateUrl: 'package-creation-details.component.html',
  styleUrls: ['package-creation-details.component.css']
})
export class PackageCreationDetailsComponent implements OnInit {

  packageConfig: Observable<IPackageConfig>;

  constructor(
    private packageConfigDataService: PackageConfigDataService
  ) {
    // this.intitializeFilesTree();
  }

  ngOnInit() {
    this.packageConfig = this.packageConfigDataService.config;
  }
}
