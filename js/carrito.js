
var carroDeCompras = {};
var datoID = 1;

function CarritoDeCompras() {
    productosLista();
   

}


function productosLista() {
   for (var i = 0; i < DatosProductos.length; i++) {
        $('#ProductosListado').append(
            '<div class="col-lg-3 col-sm-3 col-xs-3  mb-4">' +
            '<div class="card border border-warning">' +
            '<a href="#"><img class="card-img-top img-responsive img-fluid " src="img/' + DatosProductos[i].img + '" ></a>' +
            '<div class="card-body">' +
            '<h3 class="card-title">' +
            '<a href="#" style="text-decoration:none;color:yellow">' + DatosProductos[i].nombre + '</a>' +
            '</h3>' +
            '<h4 style="color:black">$ ' + DatosProductos[i].precio + '</h4>' +
            '<p class="card-text dark">' + DatosProductos[i].descripcion + '</p>' +
            '</div>' +
            '<div class="card-footer">' +
            '<button type="button" class="btn btn-warning" onclick="sumarACarrito(' + i + ')">AGREGAR</button>' +
            '</div>' +
            '</div >' +
            '</div >'
        )
    }
   
}

function agregarACarrito(id) {
    var producto =DatosProductos[id];

    $('#listadoCarritoDeCompras').append(
        '<div id="' + carroDeCompras[id].elemento_id + '">' +
        '<div class="row p-4">' +
        '<div class="card w-100">' +
        '<div class="card-body">' +
        '<div class="row">' +
        '<div class="col-8">' +
       '  <ul><li class="card-title ">'+'Producto:'+' '+ producto.nombre +'</li></ul> ' +
       '  <ul><li >' +'Precio:'+' '+ producto.precio +' '+'Pesos'+'</li></ul> ' +
       '  <ul><li class="cantidad">' +'cantidad:'+' ' + 1 + '</li></ul> ' +
        '<button class="btn btn-warning text-center " onclick="sumarACarrito(' + id + ')"> + </button>' +
        '<button class="btn btn-danger text-center ml-3 " onclick="eliminarDeCarrito(' + id + ')"> - </button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div >' +
        '</div >' +
        '</div >'
    )

    upDateCarrito();

}

 
function upDateCarrito() {
    var actualiCarrito = cantidad();
    if (actualiCarrito > 0) $("#carro").html(actualiCarrito);
    else $("#carro").html("");
    $("#total-compra").html("$" + precioTotal()+" "+ "PESOS");
    
}
function cantidad() {
    var total = 0

    for (var id in carroDeCompras) {

        total += carroDeCompras[id].cantidad



    }
    return total;

}




function eliminarDeCarrito(id) {
    carroDeCompras[id].cantidad--;

    if (carroDeCompras[id].cantidad > 0) {


        actualizarCantidad(id);

    } else {

        var element = document.getElementById(carroDeCompras[id].elemento_id);



        element.parentNode.removeChild(element); 


    }

    upDateCarrito();

}

function precioTotal() {
    var total = 0;
    for (var id in carroDeCompras) {

        total += DatosProductos[id].precio * carroDeCompras[id].cantidad;

    }
    return total;




}

function limpiarCarrito(id) {
    carroDeCompras = {};
    $("#listadoCarritoDeCompras").empty();
    upDateCarrito();
    
    if (carroDeCompras[id].cantidad == 0){
        $("#total-compra").html("$" + precioTotal());
        
    }
}

function sumarACarrito(id) {
    

    if (id in carroDeCompras && carroDeCompras[id].cantidad > 0) {

        carroDeCompras[id].cantidad++;
        actualizarCantidad(id);
    } else {

        carroDeCompras[id] = {
            cantidad: 1,
            elemento_id: + datoID
        };
        datoID++;

        agregarACarrito(id);

    }
    upDateCarrito();

}

function actualizarCantidad(id) {
    $("#" + carroDeCompras[id].elemento_id + " .cantidad").html('Cantidad ' + carroDeCompras[id].cantidad);


}





