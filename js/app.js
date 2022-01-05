let productos = document.getElementById("cont-productos");
let productosCarrito = [];


//Cargar los datos desde la api

const cargarDatos = async() => {
    try {
        const res = await fetch('js/productos.json');
        const data = await res.json();
        dibujar(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}

//Pintar las cards de productos
async function dibujar(data) {
    for (const datos of data) {
        productos.innerHTML += `<div class="card">
                <img src=${datos.imagen} alt="">
              <div class="info">
              <p> <strong> Nombre: </strong> ${datos.nombre} </p>
              <p> <strong> Precio: </strong> U$D ${datos.precio} </p>
              <p> <strong> Descripcion: </strong> ${datos.descripcion}</p>

             <button class="btn-comprar" onclick="agregarProducto(this)" id="${datos.id}">Agregar</button>
             </div>
          </div>`


    }
}

//Agregar producto al carro 
async function agregarProducto(comp) {
    let datos = await cargarDatos()

    let id = comp.id;

    for (const data of datos) {
        if (id == data.id) {
            // localStorage.setItem("producto", JSON.parse(data.nombre, data.precio));
            productosCarrito.push(Number(data.precio));
            console.log(productosCarrito);
        }
    }

    document.getElementById("btn-total").innerHTML = ` <img src="img/shopping-cart_icon-icons.com_72552.png" alt="icono carrito"> U$D ` + sumaTotal(productosCarrito);

}

//Sumar el total 
function sumaTotal(productosCarrito) {
    let totalPrecio = 0;

    for (let i = 0; i < productosCarrito.length; i++) {

        totalPrecio = productosCarrito[i] + totalPrecio;

    }
    console.log(totalPrecio)

    return totalPrecio;
}

//Vaciar carro
function borrarCarrito() {
    productosCarrito = [];
    totalPrecio = 0;
}

// function recuperarProductos() {
//     let productosRecuperados = localStorage.getItem("producto");

//     console.log(productosRecuperados)
// }
//LLAMADA DE FUNCIONES Y ASIGNACION DE EVENTOS

cargarDatos();
document.getElementById("btn-total").addEventListener('click', () => {
    document.getElementById("modal-des").innerHTML = "El total de su compra es: U$D " + sumaTotal(productosCarrito);
});

document.getElementById("btn-borrar").addEventListener('click', () => {
    borrarCarrito();
    document.getElementById("btn-total").innerHTML = ` <img src="img/shopping-cart_icon-icons.com_72552.png" alt="icono carrito"> U$D ` + 0;

});