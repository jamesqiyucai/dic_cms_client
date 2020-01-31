import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import {ListElementComponent} from './list-element-component';
import {List} from 'immutable';
import {ListOrigin} from './list-origin';

@Component({
  selector: 'app-list-manipulator',
  templateUrl: './list-manipulator-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListManipulatorComponent implements OnInit, AfterContentChecked {
  private _array: any[] = [];
  private _handle: ListOrigin;
  @Input() public draggable: boolean;
  @Input()
  set handle(newHandle: ListOrigin) {
    this._handle = newHandle;
  }
  private set list(newList: List<any>) {
    if (!this.list.equals(newList)) {
      this._array = newList.toArray();
      this._handle.list = this.list;
    }
  }
  @ContentChild(TemplateRef) template: TemplateRef<any>;
  @ContentChildren('child', {descendants: true}) components: QueryList<ListElementComponent>;
  private get list() {
    return List(this._array);
  }
  ngOnInit(): void {
    this._handle.$list.subscribe(list => this.list = list);
  }
  onDelete(index: number) {
    this.list = this.list.remove(index);
  }
  onMove(from: number, to: number) {
    this._handle.move(from, to);
  }
  onAdd() {
    this._handle.add();
  }
  ngAfterContentChecked(): void {
    this.components.forEach(
      (component, index) => {
        if (!component.hasHandle()) {
          component.handle = this._array[index];
        }
        component.index = index;
      }
    );
  }
}
