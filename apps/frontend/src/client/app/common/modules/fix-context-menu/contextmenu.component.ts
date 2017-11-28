import {
  Component,
  Input,
  ElementRef,
  Renderer,
  HostListener
} from '@angular/core';
import { HostBinding } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'context-menu',
  template: `
    <div class="contextmenu">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `:host(.contextmenu-container) {
        display: none;
        position: absolute;
        z-index: 1300;
    }`,
    `:host(.contextmenu-container.show) {
        display: block;
      }
    `
  ],
  /* tslint:disable */
  host: {
    '[class.contextmenu-container]': '1',
    '[class.show]': 'isVisible'
  }
  /* tslint:enable */
})
export class ContextmenuComponent {

  @Input('id') id: string;

  // @HostBinding('class.show') isVisible = false;
  // @HostBinding('class.contextmenu-container')

  context: any = {};
  isVisible = false;


  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  show(x: number, y: number) {
    this.isVisible = true;

    // timeout required that menu is visible, otherwise offsetParent is always null
    setTimeout(() => {
      const offsetParent = this.element.nativeElement.offsetParent;
      if (offsetParent && offsetParent !== document.body) {
        // compute position relative to offset parent
        const bb = offsetParent.getBoundingClientRect();
        x -= bb.left;
        y -= bb.top;
      }
      this.renderer.setElementStyle(this.element.nativeElement, 'left', x + 'px');
      this.renderer.setElementStyle(this.element.nativeElement, 'top', y + 'px');
    });
  }

  hide() {
    this.isVisible = false;
  }

  setContext(context: any) {
    this.context = context;
  }

  get(path: string | string[]) {
    return this.baseGet(this.context, path) || '';
  }

  @HostListener('document:click', [])
  public onClick(): void {
    this.hide();
  }

  @HostListener('document:scroll', [])
  public onScroll(): void {
    this.hide();
  }

  // This function is borrowed from lodash
  // https://github.com/lodash/lodash/blob/master/lodash.js
  // Copyright JS Foundation and other contributors <https://js.foundation/>
  private baseGet(object: any, path: string | string[]) {
    path = Array.isArray(path) ? path : path.split('.');

    let index = 0;
    const length = path.length;

    while (object != null && index < length) {
      object = object[(path[index++])];
    }
    return (index && index === length) ? object : undefined;
  }
}
