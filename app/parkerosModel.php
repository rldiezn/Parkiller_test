<?php
/*
 * Btouch Inc
 * Ricardo Diez
 * Angeles Digital
 * */

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;
use DB;
use Response;

class parkerosModel extends Model
{
    protected $table = "parkero";
    protected $primaryKey = "id_parkero";
    protected $fillable = ['nom_parkero','ape_parkero','correo_parkero','telef_parkero'];
    protected $guarded = ['id_parkero'];
    public $timestamps = false;

    public function obtenerTodosLosParkeros(){
        return $parkeros=$this->all();
    }

}
