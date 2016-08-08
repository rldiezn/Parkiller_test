<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCliente extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cliente', function (Blueprint $table) {
            //$table->engine = 'InnoDB';

            $table->increments('id_cliente');
            $table->string('nom_cliente');
            $table->string('ape_cliente');
            $table->string('vehiculo');
            $table->string('color');
            $table->string('matricula')->unique();
            $table->string('rfc_cliente')->unique();
            $table->string('correo_cliente')->unique();
            $table->string('telef_cliente')->unique();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cliente');
    }
}
