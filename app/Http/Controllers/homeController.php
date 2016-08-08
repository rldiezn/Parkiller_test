<?php
/*
 * Btouch Inc
 * Ricardo Diez
 * Angeles Digital
 * */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\parkerosModel;
use App\clientesModel;

class HomeController extends Controller
{

    public function __construct()
    {
        /***/
    }

    protected $redirectTo = '/';

    public function index()
    {
        return view('home.home',['datos'=>$this->obtenerDatosParkiller()]);
    }
    public function obtenerDatosParkiller()
    {
        $parkeros=new parkerosModel();
        $clientes=new clientesModel();

        $datos['parkeros']=$parkeros->obtenerTodosLosParkeros();
        $datos['clientes']=$clientes->obtenerTodosLosClientes();

        return $datos;
    }

}