//array de usuarios para login localstorage
// let login = [
//     {nombre: 'Manu', contraseña: '123'},
//     {nombre: 'Test', contraseña: '1234'}
// ]
// let login = {nombre: 'Manu', contraseña: '123'}

// //array de objetos para cada producto
// let productos = [
//   { id: 1, nombre: "Pizza", precio: 500, estado: true },
//   { id: 2, nombre: "Nuggets", precio: 50, estado: true },
//   { id: 3, nombre: "Empanadas", precio: 100, estado: true },
//   { id: 4, nombre: "Franui", precio: 400, estado: true },
// ];

let productos = {id: 1, nombre: "Pizza", precio: 500, estado: true }

localStorage.setItem( "productos", JSON.stringify(productos))

console.log('PreEntrega 2');

// function guardarLocalStorage (productos){

//   productos.forEach(element => {
//         localStorage.setItem( element, JSON.stringify(productos))
//     });
// }

// guardarLocalStorage(productos);

let prod = obtenerProductos()

function obtenerProductos (){
if (localStorage.getItem("productos")) {
  const producto = JSON.parse(localStorage.getItem("productos"));
  return producto
}
}

const sectionProductos = document.getElementById('sectionProductos')

// stockProductos.forEach((producto) => {
  const divNuevo = document.createElement('div')
  divNuevo.classList.add('prod')
  divNuevo.innerHTML= `
    <h1>${prod.nombre}</h1>
    <p>$${prod.precio}</p>   
    <button id="btnAgregar"> Agregar al Carrito </button>
  `
  sectionProductos.appendChild(divNuevo)
// })

const btnAgregar = document.getElementById('btnAgregar')


//La accion del boton se refleja en el localStorage, todavia no se ve en pantalla
btnAgregar.addEventListener('click',() =>{
  localStorage.setItem( "carrito", JSON.stringify(prod))

})

const btnBorrar = document.getElementById('btnBorrar')
btnBorrar.addEventListener('click',() => {
  console.log('apreto boton');
  localStorage.removeItem("carrito")
})



