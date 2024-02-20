import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/core/services/productos.service';
import { GuardarComponent } from '../guardar/guardar.component';
import { AlertsService } from 'src/app/core/utils/alerts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  listado_productos: any = [];

  constructor(private productoSer: ProductosService, private modalService: NgbModal, private alertSer: AlertsService) {}

  async ngOnInit() {
    await this.listarProductos();
  }

  /**
   * Metodo generar el listado de productos registrados
   */
  async listarProductos() {
    this.listado_productos = [];
    const {error, data}: any = await this.productoSer.listData(`api/producto`);
    if(!error) {
      this.listado_productos = [...data];
      return;
    }  
    this.alertSer.abrirAlerta(`Se presentó un error en el servidor al realizar la operación`);
    return;
  }

  /**
   * Metodo para abrir la ventana de guardar datos del productos, ya sea para registrar o editar
   */
  abrirModalGuardarProducto(tipo:String = "guardar", id:String = "") {
    const modalRef = this.modalService.open(GuardarComponent,
      { backdrop: 'static', keyboard: false, windowClass:'my-modal' 
    });
    modalRef.componentInstance.tipo_envio = tipo;
    modalRef.componentInstance.id_producto = id;
    modalRef.result.then(async (data) => {
      await this.listarProductos();
    },
    async (error) => {
    });
  }

  /**
   * Metodo para eliminar un producto del inventario
   */
  eliminarProducto(id: any) {
    const eliminar = async () => {
      const {error, data}: any = await this.productoSer.deleteData(`api/producto/${id}`);
      this.listarProductos();
    }
    this.alertSer.abrirAlertaConfirmacion("¿Desea eliminar este producto?", eliminar)
  }
}
