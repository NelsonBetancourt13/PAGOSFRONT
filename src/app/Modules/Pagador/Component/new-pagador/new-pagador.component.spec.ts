import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPagadorComponent } from './new-pagador.component';

describe('NewPagadorComponent', () => {
  let component: NewPagadorComponent;
  let fixture: ComponentFixture<NewPagadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPagadorComponent]
    });
    fixture = TestBed.createComponent(NewPagadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
