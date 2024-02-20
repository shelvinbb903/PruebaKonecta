import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VentasService } from 'src/app/core/services/ventas.service';
import { AlertsService } from 'src/app/core/utils/alerts.service';

@Component({
  selector: 'app-venta-actual',
  templateUrl: './venta-actual.component.html',
  styleUrls: ['./venta-actual.component.scss']
})
export class VentaActualComponent implements OnInit {
  total_venta:number = 0

  constructor(
    private activeModal: NgbActiveModal,
    public ventaSer: VentasService,
    private alertSer: AlertsService,
    private router: Router
  ){}

  async ngOnInit() {
    await this.calcularTotal();
  }

  /**
   * Cerrar la ventana de guardar los datos
   */
  async cerrarVentana() {
    this.activeModal.close();
  }

  /**
   * Metodo para eliminar un producto de la venta actual
   * 
   * @param id id del producto a eliminar
   */
  eliminarProducto(id: any) {
    const eliminar = async () => {
      this.ventaSer.detalle_venta_actual = this.ventaSer.detalle_venta_actual.filter((obj:any) => obj.producto_id != id);
    }
    this.alertSer.abrirAlertaConfirmacion("¿Desea eliminar este producto?", eliminar)
  }

  /**
   * Metodo para eliminar un producto de la venta actual
   * 
   */
  guardarVenta() {
    const callBack = async () => {
      const request = {
        total: this.total_venta,
        detalle: this.ventaSer.detalle_venta_actual
      };

      const {error, data}: any = await this.ventaSer.registerData(`api/venta`, request);

      if(!error) {
        this.alertSer.abrirAlerta(
          `Venta se guardó correctamente!`, 
          () => {
            this.cerrarVentana();
            this.router.navigateByUrl("/ventas/confirmacion");
          }
        );
        this.ventaSer.detalle_venta_actual = [];
        this.total_venta = 0;
        return;
      }

      this.alertSer.abrirAlerta(`Se presentaron los siguientes errores: ${data}`);
            
    }
    this.alertSer.abrirAlertaConfirmacion("¿Desea guardar la venta actual?", callBack)
  }

  /**
   * Metodo para calcular el total de la venta actual
   */
  async calcularTotal(){
    this.total_venta = 0;  
    this.ventaSer.detalle_venta_actual.forEach((item:any) => {
      this.total_venta += item.total;
    });
  }

}
