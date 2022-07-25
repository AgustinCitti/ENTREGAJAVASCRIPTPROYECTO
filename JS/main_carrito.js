function renderProductosCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido=`<p class="alert alert-warning text-center" role="alert">No hay productos seleccionados</p>`;
    if (productos.length > 0){
         contenido=`<p class="text-center"><a href="#" id="btn_conf_borrar" class="btn btn-danger" onclick="borrarPedidoAlerta()">Borrar Pedido</a></p>
    <table class="table text-center bg-white"`;
    let total =0;

    



    
    for (let producto of productos) {
        let precio = producto.precio * producto.cantidad;
        contenido += ` <tr >
        <td><img src="images/${producto.imagen}" alt="${producto.nombre}" width="100"></td>
        <td class="pt-5">${producto.nombre}</td>
        <td class="pt-5">$${precio}</td>
        <td class="pt-5">x${producto.cantidad}</td>
        <td class="pt-5"> <p class="card-text text-center"><a href="#" class="btn btn-danger" onclick="eliminarCarrito(${producto.id})">Quitar</a></p></td>
        </tr>`;
        total += precio;
        
    }
    contenido += `<tr class="p-5">
    <td>&nbsp;</td>
    <td class="p-5">TOTAL A PAGAR:</td>
    <td class="p-5"><b>$${total}</b></td>
    <td id="finPedido" class="p-5"><a href="#" id="btn_fin" onclic" class="btn btn-danger">FINALIZAR PEDIDO</a></td>
    </tr>`

    contenido += `</table>`;
}

    document.getElementById("productos_carrito").innerHTML =contenido;
}

renderProductosCarrito();

