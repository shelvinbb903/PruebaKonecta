import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts-confirmation',
  templateUrl: './alerts-confirmation.component.html',
  styleUrls: ['./alerts-confirmation.component.scss']
})
export class AlertsConfirmationComponent {
  @Input() mensaje: String = "";
  @Input() funcion_aceptar: Function = () => {};
  @Input() funcion_cancelar: Function = () => {};


  constructor(
    private activeModal: NgbActiveModal
  ){}  
  
  /**
   * Cerrar la ventana de la alerta
   */
  async cerrarVentana() {
    this.activeModal.close();
  }

  /**
   * Ejecutar la funcion enviada alboton aceptar
   */
  async btnAceptar() {
    await this.funcion_aceptar();
    this.cerrarVentana();
  }

  /**
   * Ejecutar la funcion enviada alboton aceptar
   */
  async btnCancelar() {
    await this.funcion_cancelar();
    this.cerrarVentana();
  }

}
