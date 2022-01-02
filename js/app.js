let productos = document.getElementById("cont-productos");
let url = "/js/productos.json";
let productosCarrito = [];

async function dibujar() {

    await fetch(url)
        .then(datos => datos.json())
        .then(data => {
            for (const datos of data) {
                productos.innerHTML += `<div class="card">
                <img src=${datos.imagen} alt="">
              <div class="info">
              <p> <strong> Nombre: </strong> ${datos.nombre} </p>
              <p> <strong> Precio: </strong> U$D ${datos.precio} </p>
              <p> <strong> Descripcion: </strong> ${datos.descripcion}</p>

             <button class="btn-comprar" id="${datos.id}">Agregar</button>
             </div>
          </div>`
            }
        })

}

dibujar();


// async function obtenerProductos(url) {
//     let datos = await fetch(url);
//     let productos = await datos.json();

//     console.log(productos);
//     return productos;
// }

// obtenerProductos(url);

// function agregarAlCarrito() {

// }