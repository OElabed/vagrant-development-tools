import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { TreeNode } from './tree-node.model';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  moduleId: module.id,
  selector: 'fix-node-item',
  templateUrl: 'node.component.html',
  styleUrls: ['node.component.css']
})
export class NodeComponent {
  @Input() node: TreeNode;
  @Input() index: number;
  @Output() clicked: EventEmitter<TreeNode>;
  @Output() deleted: EventEmitter<TreeNode>;
  @Output() edited: EventEmitter<TreeNode>;

  constructor() {
    this.clicked = new EventEmitter<TreeNode>();
    this.deleted = new EventEmitter<TreeNode>();
    this.edited = new EventEmitter<TreeNode>();
  }

  isExpandable(): boolean {
    const isDirectory: boolean = this.node.isDir();
    return isDirectory;
  }

  isExpanded(): boolean {
    return this.node.isExpanded();
  }

  expandFolder(): void {
    if (this.node.isExpanded()) {
      this.node.fold();
    } else {
      this.node.expand();
    }
  }

  clickItem(node: TreeNode) {
    this.clicked.emit(node);
  }

  propagateClick(node: TreeNode) {
    this.clicked.emit(node);
  }

  propagateDelete(node: TreeNode) {
    this.deleted.emit(node);
  }

  propagateEdit(node: TreeNode) {
    this.edited.emit(node);
  }

  deleteItem(node: TreeNode) {
    this.deleted.emit(node);
  }

  editItem(node: TreeNode) {
    this.edited.emit(node);
  }
}
