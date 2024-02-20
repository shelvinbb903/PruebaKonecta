<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\VentaController;
use App\Http\Controllers\CategoriaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/producto', [ProductoController::class, 'register']);
Route::get('/producto', [ProductoController::class, 'listAllData']);
Route::get('/producto/{id}', [ProductoController::class, 'getData']);
Route::put('/producto/{id}', [ProductoController::class, 'update']);
Route::delete('/producto/{id}', [ProductoController::class, 'delete']);
Route::post('/venta', [VentaController::class, 'register']);
Route::get('/categoria', [CategoriaController::class, 'listAllData']);

Route::get('{anything}', [ProductoController::class, 'error404']);
Route::get('{anything}/{id}', [ProductoController::class, 'error404']);
