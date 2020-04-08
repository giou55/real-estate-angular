import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCallYouComponent } from './we-call-you.component';

describe('WeCallYouComponent', () => {
  let component: WeCallYouComponent;
  let fixture: ComponentFixture<WeCallYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeCallYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeCallYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
