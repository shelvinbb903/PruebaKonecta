<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('producto', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->string('nombre', 128);
            $table->string('referencia', 128);
            $table->integer('precio');
            $table->integer('peso');
            $table->unsignedInteger('categoria_id');
            $table->integer('stock');
            $table->timestamps();
        });
        Schema::table('producto', function($table) {
            $table->foreign('categoria_id')->references('id')->on('categoria')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('producto');
    }
}
