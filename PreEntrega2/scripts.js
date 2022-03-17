//array de usuarios para login localstorage
// let login = [
//     {nombre: 'Manu', contraseña: '123'},
//     {nombre: 'Test', contraseña: '1234'}
// ]
// let login = {nombre: 'Manu', contraseña: '123'}

//array de objetos para cada producto
let productos = [
  { id: 1, nombre: "Pizza", precio: 500, estado: true },
  { id: 2, nombre: "Nuggets", precio: 50, estado: true },
  { id: 3, nombre: "Empanadas", precio: 100, estado: true },
  { id: 4, nombre: "Franui", precio: 400, estado: true },
];

console.log('PreEntrega 2');

guardarLocalStorage(productos);

function guardarLocalStorage (productos){

  productos.forEach(element => {
        localStorage.setItem( element, JSON.stringify(productos))
    });
}