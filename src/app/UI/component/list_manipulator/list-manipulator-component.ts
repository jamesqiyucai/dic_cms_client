import {ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {ListManipulatorComponentModelImpl} from './list-manipulator-component-model-impl';
import {ListManipulatorModel} from './list-manipulator-model';

@Component({
  selector: 'app-list-manipulator',
  templateUrl: './list-manipulator-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListManipulatorComponent {
  @Input() public model: ListManipulatorModel<unknown>;
  @ContentChild(TemplateRef, {static: false}) template?: TemplateRef<any>;
  constructor() {
    this.model = new ListManipulatorComponentModelImpl<unknown>();
  }
  public onDelete(index: number) {
    this.model.delete(index);
  }
  public onMove(from: number, to: number) {
    this.model.move(from, to);
  }
  public onAdd() {
    this.model.add();
  }
}
