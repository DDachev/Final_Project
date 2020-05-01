import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryObjectComponent } from './library-object.component';

describe('LibraryObjectComponent', () => {
  let component: LibraryObjectComponent;
  let fixture: ComponentFixture<LibraryObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
