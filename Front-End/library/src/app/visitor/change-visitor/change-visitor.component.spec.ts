import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeVisitorComponent } from './change-visitor.component';

describe('ChangeVisitorComponent', () => {
  let component: ChangeVisitorComponent;
  let fixture: ComponentFixture<ChangeVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
