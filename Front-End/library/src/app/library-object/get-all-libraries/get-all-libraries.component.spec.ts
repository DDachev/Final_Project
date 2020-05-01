import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLibrariesComponent } from './get-all-libraries.component';

describe('GetAllLibrariesComponent', () => {
  let component: GetAllLibrariesComponent;
  let fixture: ComponentFixture<GetAllLibrariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllLibrariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
