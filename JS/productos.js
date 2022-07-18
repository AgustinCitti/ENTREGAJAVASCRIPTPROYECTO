const productos = [
    {id:1, nombre:"Kolsch", descripcion:"lorem ipsum lorem ipsum lorem ipsum", imagen:"kolsch.jpg", precio:"250"},
    {id:2, nombre:"Honey", descripcion:"lorem ipsum lorem ipsum lorem ipsum", imagen:"honey.jpg", precio:"300"},
    {id:3, nombre:"Porter", descripcion:"lorem ipsum lorem ipsum lorem ipsum", imagen:"porter.jpg", precio:"300"},
    {id:4, nombre:"Scottish", descripcion:"lorem ipsum lorem ipsum lorem ipsum", imagen:"scottish.jpg", precio:"250"},
];

function obtenerProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || []
}
function guardarProductosLS(){
    localStorage.setItem("productos", JSON.stringify(productos));
}

function buscarProducto(id){
    let productos = obtenerProductosLS();
    return productos.find(x => x.id == id);
}