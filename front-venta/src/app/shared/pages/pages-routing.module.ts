import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
