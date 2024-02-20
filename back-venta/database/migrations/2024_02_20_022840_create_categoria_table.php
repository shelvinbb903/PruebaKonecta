<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categoria', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->string('descripcion');
            $table->timestamps();
        });
        // Insertar data inicial
        DB::table('categoria')->insert(
            array(
              'descripcion' => 'Mercado'
            )
        );
        DB::table('categoria')->insert(
            array(
              'descripcion' => 'Ropa'
            )
        );
        DB::table('categoria')->insert(
            array(
              'descripcion' => 'Tecnología'
            )
        );
        DB::table('categoria')->insert(
            array(
              'descripcion' => 'Mascotas'
            )
        );
        DB::table('categoria')->insert(
            array(
              'descripcion' => 'Ferretería'
            )
        );
        DB::table('categoria')->insert(
            array(
              'descripcion' => 'Iluminación'
            )
        );
        DB::table('categoria')->insert(
            array(
              'descripcion' => 'Construccion'
            )
        );
        DB::table('categoria')->insert(
            array(
              'descripcion' => 'Maquinaria'
            )
        );
        DB::table('categoria')->insert(
            array(
              'descripcion' => 'Muebles'
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categoria');
    }
}
