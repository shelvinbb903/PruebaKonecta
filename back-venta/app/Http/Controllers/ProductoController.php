<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Producto;

class ProductoController extends Controller
{
  /**
   * Registrar en la base de datos la informacion del producto
   * @param  Request $request Payload con los datos enviados por el usuario
   * @return Object Datos del producto creado
   */
  public function register(Request $request) {
    // Validar que los campos enviados sean correctos
    $validator = Validator::make($request->all(), [
      'nombre' => 'required|max:128',
      'referencia' => 'required|max:128',
      'precio' => 'required',
      'peso' => 'required',
      'categoria_id' => 'required',
      'stock' => 'required'
    ]);

    // Si hay algun error en un valor enviado se genera una respuesta con error
    if ($validator->fails()) {
      return response()->json($validator->messages(), 401);
    }
    $producto = new Producto;
    // Asignar los valores a las propiedades
    $producto->nombre = $request->nombre;
    $producto->referencia = $request->referencia;
    $producto->precio = $request->precio;
    $producto->peso = $request->peso;
    $producto->categoria_id = $request->categoria_id;
    $producto->stock = $request->stock;
    // Generar en la base de datos el nuevo registro
    $producto->save();    
    return response()->json($producto, 200);
  }

  /**
   * Editar todos o parte de los datos un registro en la base de datos
   * @param  Request $request Payload con los datos enviados por el usuario
   * @param  [type]  $id      Id del usuario a modificar
   * @return Object Datos del usuario creado
   */
  public function update(Request $request) {
    // Si hay algun error en un valor enviado se genera una respuesta con error
    if ($request->id == '' || !isset($request->id)) {
        return response()->json(["error" => "El id del producto es requerido"], 403);
    }
    // Validar que los campos enviados sean correctos
    $validator = Validator::make($request->all(), [
      'nombre' => 'required|max:128',
      'referencia' => 'required|max:128',
      'precio' => 'required',
      'peso' => 'required',
      'categoria_id' => 'required',
      'stock' => 'required'
    ]);

    // Si hay algun error en un valor enviado se genera una respuesta con error
    if ($validator->fails()) {
      return response()->json($validator->messages(), 401);
    }   
    $requestData = $request->all();
    // Ejecutar la accion de actualizar
    Producto::where('id', '=', $request->id)->update(
      $requestData
    );
    $producto = Producto::where('id', $request->id)->first();
    return response()->json($producto, 200);
  }

  /**
   * Eliminar un registro en la base de datos
   * @param  Request $request Payload con los datos enviados por el usuario
   * @return Object Datos del Producto eliminado
   */
  public function delete(Request $request) {
    // Si hay algun error en un valor enviado se genera una respuesta con error
    if ($request->id == '' || !isset($request->id)) {
      return response()->json(["error" => "El id del producto es requerido"], 403);
    }

    $producto = Producto::where('id', $request->id)->first();

    Producto::where('id', '=', $request->id)->delete();
    return response()->json($producto, 200);
  }

  /**
   * Obtener los datos de un solo producto
   * @param  Request $request Payload con los datos enviados por el usuario
   * @return Object Datos del producto consultado
   */
  public function getData(Request $request){
    // Si hay algun error en un valor enviado se genera una respuesta con error
    if ($request->id == '' || !isset($request->id)) {
      return response()->json(["error" => "El id del producto es requerido"], 403);
    }

    $producto = Producto::where([
      ['id', '=', $request->id]
      ])->first();
    return response()->json($producto, 200);
  }

  /**
   * Obtener los todos datos de los productos
   * @return Object Listado de todos los productos registrados
   */
  public function listAllData(){
    $productos = Producto::orderBy('id')->get();
    return response()->json($productos, 200);
  }

  /**
   * Generar error 404
   * @return Object Mensaje de error al intentar consumir una api rest que no existe
   */
  public function error404(){
    return response()->json(["error" => "No se encuentra la api rest"], 200);
  }
}
