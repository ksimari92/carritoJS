let productos = document.getElementById("cont-productos");
let productosCarrito = [];




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

async function agregarProducto(comp) {
    let datos = await cargarDatos()

    let id = comp.id;

    for (const data of datos) {
        if (id == data.id) {

            productosCarrito.push(Number(data.precio));
            console.log(productosCarrito);
        }
    }

    document.getElementById("btn-total").innerHTML = ` <img src="img/shopping-cart_icon-icons.com_72552.png" alt="icono carrito"> $` + sumaTotal(productosCarrito);

}

function sumaTotal(productosCarrito) {
    let totalPrecio = 0;

    for (let i = 0; i < productosCarrito.length; i++) {

        totalPrecio = productosCarrito[i] + totalPrecio;

    }
    console.log(totalPrecio)

    return totalPrecio;
}


cargarDatos();
document.getElementById("btn-total").addEventListener('click', () => {
    document.getElementById("modal-des").innerHTML = "El total de su compra es: $" + sumaTotal(productosCarrito);
})