import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertsConfirmationComponent } from 'src/app/shared/components/alerts-confirmation/alerts-confirmation.component';
import { AlertsComponent } from 'src/app/shared/components/alerts/alerts.component';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private modalService: NgbModal) { }

  /**
   * Metodo para abrir la ventana de guardar datos del productos, ya sea para registrar o editar
   */
  abrirAlerta(mensaje: String, funcion_ejecutar: Function = () => {}) {
    const modalRef = this.modalService.open(AlertsComponent,
      { backdrop: 'static', keyboard: false, windowClass:'my-modal' 
    });
    modalRef.componentInstance.mensaje = mensaje;
    modalRef.componentInstance.funcion_ejecutar = funcion_ejecutar;
  }

  /**
   * Metodo para abrir la ventana de guardar datos del productos, ya sea para registrar o editar
   */
  abrirAlertaConfirmacion(mensaje: String, funcion_aceptar: Function = () => {}, funcion_cancelar: Function = () => {}) {
    const modalRef = this.modalService.open(AlertsConfirmationComponent,
      { backdrop: 'static', keyboard: false, windowClass:'my-modal' 
    });
    modalRef.componentInstance.mensaje = mensaje;
    modalRef.componentInstance.funcion_aceptar = funcion_aceptar;
    modalRef.componentInstance.funcion_cancelar = funcion_cancelar;
  }
}
