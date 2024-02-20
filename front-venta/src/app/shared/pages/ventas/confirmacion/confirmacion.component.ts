import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent {

  constructor(private router: Router) {}

  /**
   * Metodo para volver a la pagina principal al hacer click en el boton
   */
  volver = () => {
    this.router.navigateByUrl("/ventas/home")
  }

}
