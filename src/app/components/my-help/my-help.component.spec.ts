import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelpComponent } from './my-help.component';

describe('MyHelpComponent', () => {
  let component: MyHelpComponent;
  let fixture: ComponentFixture<MyHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
