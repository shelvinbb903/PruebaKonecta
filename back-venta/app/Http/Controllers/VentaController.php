<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Venta;
use App\Models\DetalleVenta;
use App\Models\Producto;

class VentaController extends Controller
{
    /**
     * Registrar en la base de datos la informacion del producto
     * @param  Request $request Payload con los datos enviados por el usuario
     * @return Object Datos del producto creado
     */
    public function register(Request $request) {
        // Validar que los campos enviados sean correctos
        $validator = Validator::make($request->all(), [
            'total' => 'required',
            'detalle' => 'required'
        ]);

        // Si hay algun error en un valor enviado se genera una respuesta con error
        if ($validator->fails()) {
            return response()->json($validator->messages(), 401);
        }

        $errores = [];

        foreach ($request->detalle as $key => $value) {
            $producto = Producto::where('id', $value["producto_id"])->first();
            if(isset($producto)) {
                if($value["cantidad"] > $producto->stock) {
                    return response()->json("Producto " . $producto->nombre . " no tiene suficiente stock en el inventario", 401);
                }
            } else {
                return response()->json("Producto no existe", 401);
            }
        }

        $venta = new Venta;
        // Asignar los valores a las propiedades
        $venta->fecha_creacion = date('Y-m-d');
        $venta->total = $request->total;
        // Generar en la base de datos el nuevo registro
        $venta->save();

        $venta->detalle = [];
        $array_detalles = [];

        // Guardar los datos del detalle de la venta
        foreach ($request->detalle as $key => $value) {
            $producto = Producto::where('id', $value["producto_id"])->first();
            
            $detalle_venta = new DetalleVenta;
            // Asignar los valores a las propiedades
            $detalle_venta->venta_id = $venta->id;
            $detalle_venta->producto_id = $value["producto_id"];
            $detalle_venta->precio = $value["precio"];
            $detalle_venta->cantidad = $value["cantidad"];
            $detalle_venta->total = $value["total"];
            // Generar en la base de datos el nuevo registro
            $detalle_venta->save();

            $producto->stock = $producto->stock - $value["cantidad"];
            // Ejecutar la accion de actualizar
            Producto::where('id', '=', $producto->id)->update(
                $producto->toArray()
            );
            $array_detalles[] = array_merge($venta->detalle, $detalle_venta->toArray());
            
                
        }
        $venta->detalle = array_merge($venta->detalle, $array_detalles);
      
        return response()->json($venta, 200);
    }
}
