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


document.getElementById("btn-total").innerHTML = ` <img src="img/shopping-cart_icon-icons.com_72552.png" alt="icono carrito">  ` + localStorage.getItem('cantidadProductos');


total = localStorage.getItem("precioTotal");
totalCompra.innerHTML = `TOTAL = U$D ${total}`
recuperarObjetos()
console.log(compraFinal)
console.log(total)

btnVaciar.addEventListener("click", () => {
    localStorage.clear();
    localStorage.setItem('precioTotal', 0);
    lista.innerHTML = "";
    totalCompra.innerHTML = `TOTAL = U$D ${localStorage.getItem("precioTotal")}`;
    document.getElementById("btn-total").innerHTML = ` <img src="img/shopping-cart_icon-icons.com_72552.png" alt="icono carrito">`;

})


//SECCION TENES DESCUENTO
let cupon = document.getElementById('cupon');
let descuento = document.getElementById("total-descuento");

const aplicarDescuento = (cupon) => {
    console.log("click descuento")
    console.log(cupon.value)
    if(localStorage.getItem('precioTotal') < 0 || localStorage.getItem('precioTotal') == null){
        descuento.innerHTML= `<p style="color: red">¡DEBE SELECCIONAR ARTICULOS DE LA TIENDA!</p>`
    }
    if (cupon.value === "UNDESCUENTO") {
        total = localStorage.getItem('precioTotal') - (total * 0.1);
        descuento.innerHTML = `<br>  Su total con el descuento es ${total}`
    } else if (cupon.value === "DOSDESCUENTO") {
        total = localStorage.getItem('precioTotal') - (total * 0.15);
        descuento.innerHTML = `<br>  Su total con el descuento es ${total}`
    } else if (cupon.value === "SUPERDESCUENTO") {
        total = localStorage.getItem('precioTotal') - (total * 0.5);
        descuento.innerHTML = `<br>  Su total con el descuento es ${total}`
    } else {
        descuento.innerHTML = `<p style="color: red">¡LO SENTIMOS! EL CÓDIGO NO ES VÁLIDO</p>`
    }
}

document.getElementById('descuento').addEventListener("click", function () {
    aplicarDescuento(cupon)
});