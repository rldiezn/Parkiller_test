<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParkero extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parkero', function (Blueprint $table) {
            $table->increments('id_parkero');
            $table->string('nom_parkero');
            $table->string('ape_parkero');
            $table->string('correo_parkero')->unique();
            $table->string('telef_parkero');
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
        Schema::drop('parkero');
    }
}
