import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVisitorByIdComponent } from './get-visitor-by-id.component';

describe('GetVisitorByIdComponent', () => {
  let component: GetVisitorByIdComponent;
  let fixture: ComponentFixture<GetVisitorByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVisitorByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVisitorByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
