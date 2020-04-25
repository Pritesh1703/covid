import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidContainerComponent } from './covid-container.component';

describe('CovidContainerComponent', () => {
  let component: CovidContainerComponent;
  let fixture: ComponentFixture<CovidContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
