import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictcmsUiSourceComponent } from './dictcms-ui-source.component';

describe('DictcmsUiSourceComponent', () => {
  let component: DictcmsUiSourceComponent;
  let fixture: ComponentFixture<DictcmsUiSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictcmsUiSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictcmsUiSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
