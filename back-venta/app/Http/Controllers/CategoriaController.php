<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{ 
  /**
   * Obtener los todos datos de las categorias
   * @return Object Listado de todos los categorias registradas
   */
  public function listAllData(){
    $categorias = Categoria::all();
    return response()->json($categorias, 200);
  }
}
