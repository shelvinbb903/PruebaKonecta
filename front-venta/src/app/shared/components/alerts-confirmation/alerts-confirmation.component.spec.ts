import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsConfirmationComponent } from './alerts-confirmation.component';

describe('AlertsConfirmationComponent', () => {
  let component: AlertsConfirmationComponent;
  let fixture: ComponentFixture<AlertsConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsConfirmationComponent]
    });
    fixture = TestBed.createComponent(AlertsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
