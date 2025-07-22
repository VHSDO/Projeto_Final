import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCompra } from './reserva-compra';

describe('ReservaCompra', () => {
  let component: ReservaCompra;
  let fixture: ComponentFixture<ReservaCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaCompra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaCompra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
