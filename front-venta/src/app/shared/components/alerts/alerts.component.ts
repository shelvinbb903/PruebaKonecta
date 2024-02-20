import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  @Input() mensaje: String = "";
  @Input() funcion_ejecutar: Function = () => {};
  ;

  constructor(
    private activeModal: NgbActiveModal
  ){
    
  }

  ngOnInit(): void {
    
  }
  
  /**
   * Cerrar la ventana de la alerta
   */
  async cerrarVentana() {
    await this.funcion_ejecutar();
    this.activeModal.close();
  }

}
