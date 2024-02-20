import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { GuardarComponent } from './guardar/guardar.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ListadoComponent,
    GuardarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductosRoutingModule,
    ComponentsModule
  ]
})
export class ProductosModule { }
