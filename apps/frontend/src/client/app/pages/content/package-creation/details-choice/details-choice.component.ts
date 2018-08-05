import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PackageCreationDataService } from '../../../../common/services/data/package-creation.data.service';
import { TreeNode, FileType, TreeNodeParams } from '../../../../common/modules/fix-tree-folder/tree-node.model';
import { OS, findIconContainer } from '../../../../common/models/domain/container.model';
import { IPackageConfig } from '../../../../common/models/domain/package-config.model';

declare let jQuery: any;

/**
 * This class represents the lazy loaded PackageDetailsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-details-choice',
  templateUrl: 'details-choice.component.html',
  styleUrls: ['details-choice.component.css']
})
export class DetailsChoiceComponent implements OnInit {

  packageConfig: Observable<IPackageConfig>;

  constructor(
    private packageCreationDataService: PackageCreationDataService
  ) {
    // this.intitializeFilesTree();
  }

  ngOnInit() {
    this.packageConfig = this.packageCreationDataService.config;
  }
}
