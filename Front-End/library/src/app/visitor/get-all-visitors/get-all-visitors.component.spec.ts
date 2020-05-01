import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllVisitorsComponent } from './get-all-visitors.component';

describe('GetAllVisitorsComponent', () => {
  let component: GetAllVisitorsComponent;
  let fixture: ComponentFixture<GetAllVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
