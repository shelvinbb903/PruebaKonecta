import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentaActualComponent } from './venta-actual/venta-actual.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { HomeVentasComponent } from './home-ventas/home-ventas.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    VentaActualComponent,
    ConfirmacionComponent,
    HomeVentasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VentasRoutingModule,
    ComponentsModule
  ]
})
export class VentasModule { }
