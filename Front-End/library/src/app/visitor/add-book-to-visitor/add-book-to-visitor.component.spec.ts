import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookToVisitorComponent } from './add-book-to-visitor.component';

describe('AddBookToVisitorComponent', () => {
  let component: AddBookToVisitorComponent;
  let fixture: ComponentFixture<AddBookToVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookToVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookToVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
