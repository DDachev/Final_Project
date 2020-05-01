import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLibraryByNameComponent } from './get-library-by-name.component';

describe('GetLibraryByNameComponent', () => {
  let component: GetLibraryByNameComponent;
  let fixture: ComponentFixture<GetLibraryByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLibraryByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLibraryByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
