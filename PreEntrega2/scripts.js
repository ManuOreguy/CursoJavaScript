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


console.log(prod);


// const mainProductos = document.getElementById('mainProductos')

// stockProductos.forEach((producto) => {
//   const divNuevo = document.createElement('div')
//   divNuevo.classList.add('producto')
//   divNuevo.innerHTML= `
//     <h1>${producto.nombre}</h1>
//     <p>${producto.precio}</p>   
//     <button id="agregar${producto.id}"> Agregar </button>
//   `
//   mainProductos.appendChild(divNuevo)
// })