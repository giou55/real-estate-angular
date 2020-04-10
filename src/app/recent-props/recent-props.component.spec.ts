import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPropsComponent } from './recent-props.component';

describe('RecentPropsComponent', () => {
  let component: RecentPropsComponent;
  let fixture: ComponentFixture<RecentPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
