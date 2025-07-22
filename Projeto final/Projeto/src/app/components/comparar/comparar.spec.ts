import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comparar } from './comparar';

describe('Comparar', () => {
  let component: Comparar;
  let fixture: ComponentFixture<Comparar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comparar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comparar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
