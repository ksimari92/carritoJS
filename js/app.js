let productos = document.getElementById("cont-productos");
// let btnVaciar = document.getElementById('btn-vaciar');

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
          <!--    <p id="unidad"> <strong> Unidades: </strong> ${datos.cantidad} </p> -->


             <button class="btn-comprar" onclick="agregarProducto(this)" id="${datos.id}">Agregar</button>
             </div>
          </div>`


    }
}

//Agregar producto al carro 
async function agregarProducto(comp) {
    let datos = await cargarDatos()
    let storage = [];
    let cantidadProductos= 0;

    let id = comp.id;

    for (const data of datos) {
        if (id == data.id) {
            console.log(data);
            if(data.cantidad > 0){
                data.cantidad = data.cantidad - 1;
               alert(`Quedan ${data.cantidad} unidades`);
            }
            productosCarrito.push(Number(data.precio));
            cantidadProductos = productosCarrito.length;
            localStorage.setItem('cantidadProductos', cantidadProductos);
         
            console.log(productosCarrito);

            if (!localStorage.getItem("productos")) {
                storage.push(data);
                localStorage.setItem("productos", JSON.stringify(storage));
            } else {
                storage = JSON.parse(localStorage.getItem("productos"));
                storage.push(data);
                localStorage.setItem("productos", JSON.stringify(storage));
            }

        }

    }

    document.getElementById("btn-total").innerHTML = ` <img src="img/shopping-cart_icon-icons.com_72552.png" alt="icono carrito">  ` + cantidadProductos;

}

//Sumar el total 

function sumaTotal(productosCarrito) {
    let totalPrecio = 0;

    for (let i = 0; i < productosCarrito.length; i++) {

        totalPrecio = productosCarrito[i] + totalPrecio;

    }
    console.log(totalPrecio)

    localStorage.setItem("precioTotal", totalPrecio);

    return totalPrecio;
}

//Guardar en storage
function agregarStorage(producto) {

    if (!localStorage.getItem("productos")) {
        storage.push(producto);
        localStorage.setItem("productos", JSON.stringify(storage));
    } else {
        storage = JSON.parse(localStorage.getItem("productos"));
        storage.push(producto);
        localStorage.setItem("productos", JSON.stringify(storage));
    }

}
//Vaciar carro
function borrarCarrito() {
    productosCarrito = [];
    totalPrecio = 0;
    localStorage.clear();
}

//LLAMADA DE FUNCIONES Y ASIGNACION DE EVENTOS

cargarDatos();
document.getElementById("btn-total").addEventListener('click', () => {
    document.getElementById("modal-des").innerHTML = "El total de su compra es: U$D " + sumaTotal(productosCarrito);
});

document.getElementById("btn-borrar").addEventListener('click', () => {
    borrarCarrito();
    document.getElementById("btn-total").innerHTML=  ` <img src="img/shopping-cart_icon-icons.com_72552.png" alt="icono carrito"> `;

});

console.log(localStorage.getItem("productos"))