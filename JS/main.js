








function renderProductos(){
    let productos = obtenerProductosLS();
    
    for (let producto of productos){
        let columna = document.createElement("div");
        columna.className ="col-md-4";
        let card = document.createElement("div");
        card.className = "card border-0 fondo";
        let imagen =document.createElement("img");
        imagen.src = `images/${producto.imagen}`;
        imagen.className = "card-img-top";
        imagen.alt =producto.nombre;
        let card_body = document.createElement("div");
        card_body.classname ="card-body";
        let titulo = document.createElement("h5");
        titulo.className ="card-tittle text-center";
        titulo.innerHTML = producto.nombre;
        let precio = document.createElement("p");
        titulo.className ="card-tittle text-center";
        titulo.innerHTML = "$" + producto.precio;
        let parrafo_boton = document.createElement("h5");
        parrafo_boton.className ="card-tittle text-center";
        parrafo_boton.innerHTML =`<a href="#" class="btn btn-danger" onclick="agregarCarrito(${producto.id})">Agregar</a></p>`;

        card_body.appendChild(titulo);
        card_body.appendChild(precio);
        card_body.appendChild(parrafo_boton);
        card.appendChild(imagen);
        card.appendChild(card_body);
        columna.appendChild(card);

        document.getElementById("productos").appendChild(columna)
;
    }

};



guardarProductosLS(productos);
actualizarBotonCarrito();
renderProductos();