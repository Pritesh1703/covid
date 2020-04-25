import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpConnectComponent } from './help-connect.component';

describe('HelpConnectComponent', () => {
  let component: HelpConnectComponent;
  let fixture: ComponentFixture<HelpConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
