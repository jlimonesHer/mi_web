function initMap() {
    var punto = new google.maps.LatLng(37.38587585664468, -5.7231120830960265);
    var opciones = {
        zoom: 15,
        center: punto,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    mapa = new google.maps.Map(document.getElementById("mapa"), opciones);
    var marca = new google.maps.Marker({
        position: punto,
        map: mapa,
        title: "Mi marca"
    });
}
function calcularRuta() {
    mostrar_direcciones = new google.maps.DirectionsRenderer();
    var servicios_rutas = new google.maps.DirectionsService();
    var punto = new google.maps.LatLng(37.38587585664468, -5.7231120830960265);
    var partida = document.getElementById("input_geo").value;
    var destino = punto;
    var opciones = {
        origin: partida,
        destination: destino,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
        //indicamos en este caso que hacemos el viaje en coche/moto
    };
    servicios_rutas.route(opciones, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            mostrar_direcciones.setDirections(response);
            mostrar_direcciones.setMap(mapa);
            mostrar_direcciones.setPanel(document.getElementById("container_map"));
        }
    });
}



