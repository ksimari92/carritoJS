let compraFinal = []
let total;
let lista = document.getElementById('compra');
let totalCompra = document.getElementById('total');
let btnVaciar = document.getElementById('btn-vaciar');

const recuperarObjetos = () => {

    compraFinal = JSON.parse(localStorage.getItem("productos"));
    total = localStorage.getItem("precioTotal");

    for (let i = 0; i < compraFinal.length; i++) {

        lista.innerHTML += `  <div class="item"> 
                              <p>${compraFinal[i].nombre} U$D ${compraFinal[i].precio} </p>
                              </div>
                              `
    }
}

total = localStorage.getItem("precioTotal");
totalCompra.innerHTML = `TOTAL = U$D ${total}`
recuperarObjetos()
console.log(compraFinal)
console.log(total)

btnVaciar.addEventListener("click", borrarCarrito)