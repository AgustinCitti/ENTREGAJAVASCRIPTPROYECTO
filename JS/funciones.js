function obtenerProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || []
}
function guardarProductosCarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function actualizarBotonCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido = `<button type="button" class="btn btn-warning position-relative">
    <img src="images/cajapedidos.png" width="24">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      0 <span class="visually-hidden"></span>
    </span></button>`;
   let total=0;
   
   if (productos.length > 0 ) {
       for (let producto of productos){
           total += producto.cantidad;
       }
       contenido = `<button type="button" class="btn btn-warning position-relative">
    <img src="images/cajapedidos.png" width="24">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      ${total} <span class="visually-hidden"></span>
    </span></button>`;
   }
   
       document.getElementById("boton_carrito").innerHTML =contenido;
   }
   function vaciarCarrito(){
    localStorage.removeItem("carrito");
    renderProductosCarrito();
   }


   function agregarCarrito(id){
    
    let producto = buscarProducto(id);
    let productos_carrito = obtenerProductosCarrito();
    let pos = productos_carrito.findIndex(x => x.id == id);
    
    if (pos > -1){
        productos_carrito[pos].cantidad += 1;
    } else{
        let producto =buscarProducto(id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }
    
    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
}






function eliminarCarrito(id){
    let productos_carrito = obtenerProductosCarrito();
    let pos = productos_carrito.findIndex(x => x.id == id);
    productos_carrito[pos].cantidad -= 1;

    if (productos_carrito[pos].cantidad == 0) {
        productos_carrito.splice(pos, 1);
    }
   
   
    guardarProductosCarrito(productos_carrito);
    
    renderProductosCarrito();
}