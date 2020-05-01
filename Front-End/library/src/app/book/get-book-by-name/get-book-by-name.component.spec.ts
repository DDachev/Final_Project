import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookByNameComponent } from './get-book-by-name.component';

describe('GetBookByNameComponent', () => {
  let component: GetBookByNameComponent;
  let fixture: ComponentFixture<GetBookByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBookByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
