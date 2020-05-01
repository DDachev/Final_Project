import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookinfoByIdComponent } from './get-bookinfo-by-id.component';

describe('GetBookinfoByIdComponent', () => {
  let component: GetBookinfoByIdComponent;
  let fixture: ComponentFixture<GetBookinfoByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBookinfoByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookinfoByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
