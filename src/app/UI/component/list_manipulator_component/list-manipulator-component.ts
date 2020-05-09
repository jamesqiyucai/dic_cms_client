import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef} from '@angular/core';
import {ListManipulatorComponentModel} from './list-manipulator-component-model';
import {ListElementComponent} from './list-element-component';

@Component({
  selector: 'app-list-manipulator',
  templateUrl: './list-manipulator-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListManipulatorComponent implements AfterContentInit {
  @Input() public model?: ListManipulatorComponentModel<any>;
  @ContentChild(TemplateRef, {static: false}) template?: TemplateRef<any>;
  @ContentChildren('child', {descendants: true}) components?: QueryList<ListElementComponent>;
  public ngAfterContentInit() {
    if (this.model) {
      this.model.array$.subscribe(models => {
        if (this.components) {
          this.components.forEach((component, index) => {
            component.model = models.get(index);
          });
        }
      });
    }
  }
  public onDelete(index: number) {
    if (this.model) {
      this.model.delete(index);
    }
  }
  public onMove(from: number, to: number) {
    if (this.model) {
      this.model.move(from, to);
    }
  }
  public onAdd() {
    if (this.model) {
      this.model.add();
    }
  }
}
