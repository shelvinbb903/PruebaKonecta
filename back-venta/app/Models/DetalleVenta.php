<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetalleVenta extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'detalle_venta';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'venta_id',
        'producto_id',
        'precio',
        'cantidad',
        'total',
    ];
}
