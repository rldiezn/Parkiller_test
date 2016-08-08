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

class clientesModel extends Model
{
    protected $table = "cliente";
    protected $primaryKey = "id_cliente";
    protected $fillable = ['nom_cliente','ape_cliente','vehiculo','color','matricula','rfc_cliente','correo_cliente','telef_cliente'];
    protected $guarded = ['id_cliente'];
    public $timestamps = false;

    public function obtenerTodosLosClientes(){
        return $clientes=$this->all();
    }

}
