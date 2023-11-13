import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioComponent } from './comercio.component';

describe('ComercioComponent', () => {
  let component: ComercioComponent;
  let fixture: ComponentFixture<ComercioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComercioComponent]
    });
    fixture = TestBed.createComponent(ComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
