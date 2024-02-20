import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaActualComponent } from './venta-actual.component';

describe('VentaActualComponent', () => {
  let component: VentaActualComponent;
  let fixture: ComponentFixture<VentaActualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaActualComponent]
    });
    fixture = TestBed.createComponent(VentaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
