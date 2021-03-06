import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVisitorComponent } from './delete-visitor.component';

describe('DeleteVisitorComponent', () => {
  let component: DeleteVisitorComponent;
  let fixture: ComponentFixture<DeleteVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
