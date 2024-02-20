import { Injectable } from '@angular/core';
import { RestService } from 'src/app/intranet/connection/rest.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private rest: RestService) { }

  /**
   * Metodo para consumir el servicio de obtener las categorias registradas
   *
   * @param   {string}  url   URL del servicio
   * @param   {any}     data  Datos que se pasan como parametro. Si no hay se envio un objeto vacio
   *
   * @return  {Promise<Object>}        Retorna una promesa con un objeto, el cual contiene la respuesta del servicio y un atributo para indicar si se genero error
   */
  listData = (url:string, data: any = {}) => {
    return this.rest.connectionGET(url, data);
  }
}
