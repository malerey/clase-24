const carrito = document.querySelector(".carrito")
const subtotal = document.querySelector("#subtotal")
const total = document.querySelector("#total")
const recargoParrafo = document.querySelector("#recargo")
const checkboxTarjeta = document.querySelector("#tarjeta")
const botonMostrarCarrito = document.querySelector("#abrir-carrito")
const botonOcultarCarrito = document.querySelector("#cerrar-carrito")

const subtotalProductos = 5999

carrito.classList.add("ocultar")

botonMostrarCarrito.onclick = () => {
  subtotal.textContent = subtotalProductos
 carrito.classList.remove("ocultar")
}

botonOcultarCarrito.onclick = () => {
  carrito.classList.add("ocultar")
}

checkboxTarjeta.onclick = () => {
  const recargo = subtotalProductos * 0.1
  recargoParrafo.textContent = recargo
  total.textContent = subtotalProductos + recargo
}





