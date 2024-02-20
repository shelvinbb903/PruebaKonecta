import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { ProductosService } from 'src/app/core/services/productos.service';
import { AlertsService } from 'src/app/core/utils/alerts.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.scss']
})
export class GuardarComponent implements OnInit {
  listado_categorias: any = [];
  @Input() tipo_envio = "";
  @Input() id_producto = "";

  producto: any = {
    nombre: "",
    referencia: "",
    precio: 0,
    peso: 0,
    categoria_id: "",
    stock: 0
  }

  constructor(
    private categoriaSer: CategoriasService, 
    private productoSer: ProductosService, 
    private activeModal: NgbActiveModal,
    private alertSer: AlertsService
    ){}

  async ngOnInit() {
    await this.reiniciarCampos();
    await this.listarCategorias();

    if(this.tipo_envio == 'editar') {
      await this.consultarProducto();
    }
  }

  /**
   * Metodo generar el listado de categorias registradas
   */
  async listarCategorias() {
    this.listado_categorias = [];
    const {error, data}: any = await this.categoriaSer.listData(`api/categoria`);
    if(!error) {
      this.listado_categorias = [...data];
      return;
    }  
    this.alertSer.abrirAlerta(`Se presentó un error en el servidor al realizar la operación`);
    return;
  }

  /**
   * Metodo para guardar los datos del producto, ya sea registrar o editar
   */
  async guardarDatos(){
    const validar = this.validarCampos();
    if(validar.length == 0){      
      if(this.tipo_envio == 'guardar') {
        const {error, data}: any = await this.productoSer.registerData(`api/producto`, this.producto);
        if(!error) {
          this.alertSer.abrirAlerta(`Producto se guardó correctamente!`, () => {this.activeModal.close();});
          await this.reiniciarCampos();
          return;
        } 
        const errores = [];
        for (let [key, value] of Object.entries(data)) {
          switch(key){
            case "nombre":
              value = 'Debe ingresar el nombre'
              break;
            case "referencia":
              value = 'Debe ingresar la referencia'
              break;
            case "precio":
              value = 'Debe ingresar un precio mayor a cero'
              break;
            case "peso":
              value = 'Debe ingresar un peso mayor a cero'
              break;
            case "categoria_id":
              value = 'Debe seleccionar la categoría'
              break;
            case "stock":
              value = 'Debe ingresar un stock mayor a cero'
              break;
          }
          errores.push(value);
        }
        this.alertSer.abrirAlerta(`Se presentaron los siguientes errores: ${errores.join(", ")}`);
        
      } else {
        const {error, data}: any = await this.productoSer.updateData(`api/producto/${this.id_producto}`, this.producto);
        if(!error) {
          this.alertSer.abrirAlerta(`Producto se guardó correctamente!`, () => {this.activeModal.close();});
          await this.reiniciarCampos();
        } 
      }
      return;
    }
    this.alertSer.abrirAlerta(`Se presentaron los siguientes errores: ${validar.join(", ")}`);
     
  }

  /**
   * Metodo para consultar los datos del producto a editar
   */
  async consultarProducto() {
    const {error, data}: any = await this.categoriaSer.listData(`api/producto/${this.id_producto}`);
    if(!error) {
      this.producto = {...data};
      return;
    }  
    this.alertSer.abrirAlerta(`Se presentó un error en el servidor al realizar la operación`);
    return;
  }

  /**
   * Cerrar la ventana de guardar los datos
   */
  async cerrarVentana() {
    await this.reiniciarCampos()
    this.activeModal.close();
  }

  /**
   * Metodo para reiniciar los valores de los campos del formulario
   */
  reiniciarCampos(){
    this.producto = {
      nombre: "",
      referencia: "",
      precio: 0,
      peso: 0,
      categoria_id: "",
      stock: 0
    }
  }
  
  /**
   * Metodo para validar los campos del formulario
   */
  validarCampos(){
    let esCorrecto = [];

    if(this.producto.nombre.trim() == ""){
      esCorrecto.push("Debe ingresar el nombre");
    }

    if(this.producto.referencia.trim() == ""){
      esCorrecto.push("Debe ingresar la referencia");
    }

    if(this.producto.precio == "" || this.producto.precio == 0){
      esCorrecto.push("Debe ingresar un precio mayor a cero");
    }

    if(this.producto.peso == "" || this.producto.peso == 0){
      esCorrecto.push("Debe ingresar un peso mayor a cero");
    }

    if(this.producto.categoria_id == ""){
      esCorrecto.push("Debe seleccionar la categoría");
    }

    if(this.producto.stock == "" || this.producto.stock == 0){
      esCorrecto.push("Debe ingresar un stock mayor a cero");
    }
    return esCorrecto;
  }


}
