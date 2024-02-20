import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/core/services/productos.service';
import { VentaActualComponent } from '../venta-actual/venta-actual.component';
import { VentasService } from 'src/app/core/services/ventas.service';
import { AlertsService } from 'src/app/core/utils/alerts.service';

@Component({
  selector: 'app-home-ventas',
  templateUrl: './home-ventas.component.html',
  styleUrls: ['./home-ventas.component.scss']
})
export class HomeVentasComponent {
  listado_productos: any = [];

  constructor(
    private productoSer: ProductosService, 
    public ventaSer: VentasService,
    private alertSer: AlertsService,
    private modalService: NgbModal
    ) {}

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
  abrirModalVentaActual() {
    const modalRef = this.modalService.open(VentaActualComponent,
      { backdrop: 'static', keyboard: false, windowClass:'my-modal' 
    });
  }

  /**
   * Metodo para agregar un producto a la venta o aumentar la cantidad
   *  
   * @param item Producto a agregar a la venta
   */
  agregarProductoVenta(item: any){
    if(Number(item.cantidad) > 0){
      if(Number(item.stock) >= Number(item.cantidad)){
        const existe = this.ventaSer.detalle_venta_actual.find((obj: any) => obj.producto_id == item.id);
    
        if(existe){
          existe.cantidad += Number(item.cantidad);
          existe.total = existe.precio * existe.cantidad;
        } else {
          this.ventaSer.detalle_venta_actual.push({
            producto_id: item.id,
            nombre: item.nombre,
            referencia: item.referencia,
            precio: Number(item.precio),
            cantidad: Number(item.cantidad),
            total: Number(item.precio) * Number(item.cantidad)
          });
        }
        item.cantidad = 0;
      } else {
        this.alertSer.abrirAlerta("El producto no tiene sucifiente stock para realizar la venta")
      }
      
    } else {
      this.alertSer.abrirAlerta("Debe ingresar una cantidad mayor a cero del producto a agregar")
    }
    
  }

}
