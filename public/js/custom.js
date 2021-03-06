/**
 * Created by Ricardo Diez on 05/08/2016.
 */
var common = {
    random: function (minimo, maximo)//funcion para generar numeros aleatorios
    {
        var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
        return numero;
    }
}
var map;
var i = 0;
var polyline;
var destinations = [];
//calcular distancia entre un punta A y un puntoB del mapa
var getKilometros = function(lat1,lon1,lat2,lon2) {

    rad = function(x) {return x*Math.PI/180;}
    R = 6378.137; //Radio de la tierra en km
    dLat = rad( lat2 - lat1 );
    dLong = rad( lon2 - lon1 );
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    /*if( d < 1 ){
        $scope.resultados = 1;
    }*/

    return d.toFixed(3); //Retorna tres decimales

}

//Inicio de Js para el mapa
function initMap() {
    //Instancias Objeto del mapa
    map = new google.maps.Map(document.getElementById('map'), {
        //center: {lat: -34.397, lng: 150.644},
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
        //mapTypeId: google.maps.MapTypeId.TERRAIN

    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var arrayLat=new Array();
            var arrayLong=new Array();
            arrayLat=new Array();
            arrayLat[0]=0.003;
            arrayLat[1]=0.005;
            arrayLat[2]=0.002;
            arrayLat[3]=0.001;
            arrayLong[0]=0.003;
            arrayLong[1]=0.004;
            arrayLong[2]=0.002;
            arrayLong[3]=0.008;
            var pos = {
                lat: (position.coords.latitude),
                lng: (position.coords.longitude)
            };

            //Crear una marka
            //Marca Actual

            var titulo = datosParkiller.clientes[0].nom_cliente+' '+datosParkiller.clientes[0].ape_cliente;
            //var icono = '/parkiller_test/public/img/blue-car.png';
            var icono = '/img/blue-car.png';
            var draggable = false;
            var marcadorActual  = crearMarkador(pos, map, titulo, icono, draggable);

            //Marca Bucle
            var minDist=0;
            var parkeroCercano;
            for (i = 0; i < datosParkiller.parkeros.length; i++) {
                var parkero = {
                    lat: (position.coords.latitude)+arrayLat[common.random(0,3)],
                    lng: (position.coords.longitude)+arrayLong[common.random(0,3)]
                };

                //Metodo de calcular distancia entre un punto A y un punto B de google
                //var sevilla = new google.maps.LatLng(pos.lat, pos.lng);
                //var buenos_aires = new google.maps.LatLng(parkero.lat, parkero.lng);
                //var distanciaGOOGLE = google.maps.geometry.spherical.computeDistanceBetween(sevilla, buenos_aires);

                var distancia=getKilometros(pos.lat,pos.lng,parkero.lat,parkero.lng);

                if(minDist==0 || minDist>distancia){
                    minDist=distancia;
                    datosParkiller.parkeros[i].lat=parkero.lat;
                    datosParkiller.parkeros[i].lng=parkero.lng;
                    parkeroCercano=datosParkiller.parkeros[i];
                }
                $("#parkero_"+datosParkiller.parkeros[i].id_parkero).html(distancia+' Km');


                var tituloPark = datosParkiller.parkeros[i].nom_parkero+' '+datosParkiller.parkeros[i].ape_parkero ;
                var iconoPark = '/img/people.png';
                var draggablePark = false;

                crearMarkador(parkero, map, tituloPark, iconoPark, draggablePark);
            }


            destinations.push(new google.maps.LatLng(pos.lat, pos.lng));
            destinations.push(new google.maps.LatLng(parkeroCercano.lat, parkeroCercano.lng));


            //Crear una ventana
            var infoWindow =  new google.maps.InfoWindow();
            var msg ='Hola, <strong>'+
                datosParkiller.clientes[0].nom_cliente+
                '</strong><br/>Tu parkero mas cercano es: '+
                '<strong>'+
                parkeroCercano.nom_parkero+
                '</strong>'+
                'Deseas conectar con el?'+
                '<br/><button id="conectar_si" data-your-lat="'+pos.lat+'" data-your-lng="'+pos.lng+'" data-park-lat="'+parkeroCercano.lat+'" data-par-lng="'+parkeroCercano.lng+'" >Solicitar Parkero</button>.';
            openInfoWindow(marcadorActual, map, infoWindow,msg);
            ventanaSobreMarca(marcadorActual, map, infoWindow,msg);
            infoWindow.setPosition(pos);

            //centra el mapa con la posición que deseas
            map.setCenter(pos);

        }, function() {
            var infoWindow =  new google.maps.InfoWindow();
            handleLocationError(true, infoWindow, map.getCenter());
        });

    } else {
        // Browser doesn't support Geolocation
        var infoWindow =  new google.maps.InfoWindow();
        handleLocationError(false, infoWindow, map.getCenter());
    }
}//fin del iniciador


/*
 Descripcion: Permite manejar un error en caso que el navegador no sea compatible
 param@:browserHasGeolocation -> Boolean
 param@:infoWindow ->Objeto ventanas mapas
 param@:pos -> Arreglo con coordenadas
 */
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: El servicio ha fallado.' :
        'Error: Tu navegador no soporta Geolocation.');
}//fin

/*
 Descripcion: Permite crear un marcador
 param@:myLatLng  ->
 param@:map       ->
 param@:titulo    ->
 param@:iconno    ->
 param@:draggable ->
 */
function crearMarkador(myLatLng, map, titulo, iconno, draggable) {
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: titulo,
        draggable:draggable,
        animation: google.maps.Animation.DROP,
        icon: iconno,
    });

    return marker;

}//fin

/*
 Descripcion: Permite crear una ventana para una marca en especifico
 param@:marker     ->
 param@:map        ->
 param@:infoWindow ->
 */

function ventanaSobreMarca(marker, map, infoWindow,msg) {
    google.maps.event.addListener(marker, 'click', function(){ openInfoWindow(marker, map, infoWindow,msg); });
}//fin


/*
 Descripcion: Permite pasar los valores para el contexto del mensaje
 param@:marker     ->
 param@:map        ->
 param@:infoWindow ->
 */
function openInfoWindow(marker, map, infoWindow,msg) {
    //animarToggleBounce(marker);
    var markerLatLng = marker.getPosition();
    infoWindow.setContent([msg].join(''));
    infoWindow.open(map, marker);
}//fin


/*
 Descripcion: Permite crear una animación
 param@:marker->
 */
function animarToggleBounce(marker) {
    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

var datosParkiller;

$(document).ready(function(){
    $(".sidebar-toggle").trigger("click");

    $.ajax({
        type     : "POST",
        url      : '/obtenerDatosParkiller',
        //url      : '/parkiller_test/public/obtenerDatosParkiller',
        dataType : "json",
        async: false,
        success  : function(data){
            datosParkiller=data;
        },
        error: function (request, status, error){
            //mostrar_modal_dinamic("ERROR<br>Estatus: "+status+"<br>Request status: "+request.status+"<br>Error: "+error,'success');
        },
        complete: function(){

        }
    });

    $(document).on('click','#conectar_si',function(){
        var polylineOptions={
            path:destinations,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 3,
            map: map
        };

        polyline = new google.maps.Polyline(polylineOptions);
        polyline.setMap(map);
    });



});//end document ready


