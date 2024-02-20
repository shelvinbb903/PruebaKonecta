import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { HomeVentasComponent } from './home-ventas/home-ventas.component';

const routes: Routes = [
  {
    path: "home", component: HomeVentasComponent
  }, 
  {
    path: "confirmacion", component: ConfirmacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
