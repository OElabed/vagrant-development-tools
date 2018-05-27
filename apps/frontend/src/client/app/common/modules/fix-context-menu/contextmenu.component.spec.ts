import { ContextmenuComponent } from './contextmenu.component';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function main() {
  describe('ContextmenuComponent', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({ declarations: [ContextmenuComponent] });
    });

    it('should instantiate component', () => {
      const fixture = TestBed.createComponent(ContextmenuComponent);
      expect(fixture.componentInstance instanceof ContextmenuComponent).toBe(true, 'should create ContextmenuComponent');
    });

  });
}
