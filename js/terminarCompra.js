let compraFinal = []
let total;
let lista = document.getElementById('compra');
let totalCompra = document.getElementById('total');

const recuperarObjetos = () => {

    compraFinal = JSON.parse(localStorage.getItem("productos"));
    total = localStorage.getItem("precioTotal");

    for (let i = 0; i < compraFinal.length; i++) {

        lista.innerHTML += `<li> Producto: ${compraFinal[i].nombre} </li>
                              <li> Precio: U$D${compraFinal[i].precio} </li>
                              `
    }
}

totalCompra.innerHTML = `TOTAL = U$D ${ localStorage.getItem("precioTotal")}`
recuperarObjetos()
console.log(compraFinal)
console.log(total)