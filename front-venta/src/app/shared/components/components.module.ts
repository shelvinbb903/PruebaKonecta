import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertsConfirmationComponent } from './alerts-confirmation/alerts-confirmation.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AlertsComponent,
    AlertsConfirmationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
