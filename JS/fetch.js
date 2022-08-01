const resultado = document.getElementById("resultado");
fetch('JS/recetas.json')
.then((response)=>response.json())
.then((data)=>{
    console.log(data);

    data.forEach(valor =>{
        let columna = document.createElement("div");
        columna.className="col-md-3";
        let div_padre = document.createElement("div");
        div_padre.className="card my-3";
        let div_hijo1= document.createElement("div");
        div_hijo1.className="card-header";
        let div_hijo2= document.createElement("div");
        div_hijo2.className="card-body";
        let parrafo=document.createElement("p");
        div_hijo1.innerText=valor.title;
        parrafo.innerText=valor.body;
        div_hijo2.appendChild(parrafo);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        resultado.appendChild(div_padre);
})
})

//https://jsonplaceholder.typicode.com/posts