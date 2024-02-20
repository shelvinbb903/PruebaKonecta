<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetalleVentaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_venta', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->unsignedInteger('venta_id');
            $table->unsignedInteger('producto_id');
            $table->integer('precio');
            $table->integer('cantidad');
            $table->integer('total');
            $table->timestamps();
        });

        Schema::table('detalle_venta', function($table) {
            $table->foreign('venta_id')->references('id')->on('venta')->onDelete('cascade');
        });

        Schema::table('detalle_venta', function($table) {
            $table->foreign('producto_id')->references('id')->on('producto')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detalle_venta');
    }
}
