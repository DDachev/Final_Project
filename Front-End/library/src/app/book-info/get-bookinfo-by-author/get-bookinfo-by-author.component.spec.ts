import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookinfoByAuthorComponent } from './get-bookinfo-by-author.component';

describe('GetBookinfoByAuthorComponent', () => {
  let component: GetBookinfoByAuthorComponent;
  let fixture: ComponentFixture<GetBookinfoByAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBookinfoByAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookinfoByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
