@extends('templates.main')
@section('title')
    @lang('titles.main-title')
@stop
@section('content')
    <div class="box">
        <div id="map" style="width: 100%; height: 400px;"></div>
    </div>

    <div class="box">
        <div class="box-header">
            <h3 class="box-title">@lang('titles.main-title-table')</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body no-padding">
            <table class="table table-condensed">
                <tr>
                    <th style="width: 10px">#</th>
                    <th>@lang('titles.name-table')</th>
                    <th>@lang('titles.distancia-table')</th>
                    <th style="width: 40px">@lang('titles.correo-table')</th>
                </tr>
                <?php
                    foreach($datos['parkeros'] as $ind=>$d){
                ?>
                    <tr>
                        <td>{{$ind+1}}.</td>
                        <td>{{ $d->nom_parkero.' '.$d->ape_parkero}}</td>
                        <td id="parkero_{{$d->id_parkero}}">
                            <div class="progress progress-xs">
                                0 Km
                            </div>
                        </td>
                        <td><span class="badge bg-green">{{$d->correo_parkero}}</span></td>
                    </tr>
                <?php
                }
                ?>

            </table>
        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->

@endsection