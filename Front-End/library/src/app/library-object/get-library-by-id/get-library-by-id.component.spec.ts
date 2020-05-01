import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLibraryByIdComponent } from './get-library-by-id.component';

describe('GetLibraryByIdComponent', () => {
  let component: GetLibraryByIdComponent;
  let fixture: ComponentFixture<GetLibraryByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLibraryByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLibraryByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
