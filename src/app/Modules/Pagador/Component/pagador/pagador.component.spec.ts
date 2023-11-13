import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagadorComponent } from './pagador.component';

describe('PagadorComponent', () => {
  let component: PagadorComponent;
  let fixture: ComponentFixture<PagadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagadorComponent]
    });
    fixture = TestBed.createComponent(PagadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
