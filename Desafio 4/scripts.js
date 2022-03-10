//array de objetos para cada producto
let productos = [
    {id: 1,nombre: "Pizza",precio: 500,estado: true},
    {id: 2,nombre: "Nuggets",precio: 50,estado: true},
    {id: 3,nombre: "Empanadas",precio: 100,estado: true},
    {id: 4,nombre: "Franui",precio: 400,estado: true},
  ];

  const title = document.getElementById('title')
  //Cambio el nombre del titulo del desafio a "Desafio DOM"
  title.innerText = 'Desafio DOM'



let opcion = prompt("Queres ver el menu?\n Ingresar Opcion\n 1.Si\n 2.No")

const root = document.getElementById('root')

if(opcion == 1){
//Muestro la lista de productos en html
    root.innerHTML = "<h2> Menu <h2>"

productos.forEach( (producto) => {
    console.log(producto.nombre);

    const listarProductos = document.createElement('li')
    listarProductos.innerText = producto.nombre
    
    root.append(listarProductos)
})
}else{
    //No muestro la lista de productos
    root.innerHTML = "<h2> No mostraremos el menu <h2>"
}
