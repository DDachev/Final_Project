import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookinfoByGenreComponent } from './get-bookinfo-by-genre.component';

describe('GetBookinfoByGenreComponent', () => {
  let component: GetBookinfoByGenreComponent;
  let fixture: ComponentFixture<GetBookinfoByGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBookinfoByGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookinfoByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
