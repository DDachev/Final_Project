import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVisitorByAgeComponent } from './get-visitor-by-age.component';

describe('GetVisitorByAgeComponent', () => {
  let component: GetVisitorByAgeComponent;
  let fixture: ComponentFixture<GetVisitorByAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVisitorByAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVisitorByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
