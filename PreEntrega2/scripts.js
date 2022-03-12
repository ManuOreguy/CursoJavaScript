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

guardarLocalStorage(login);

function guardarLocalStorage (login){

    // let nombre = 'Manu'

    // localStorage.setItem("Nombre" , nombre)
    let login = {nombre: 'Manu', contraseña: '123'}

    login.forEach(element => {
        let nombre = element.nombre;
        // let password = element.password;
        console.log(element);
        // localStorage.setItem( `${nombre}` , JSON.stringify(login))

    });
}


// //Login
// //Declaro variables
// const botonLogin = document.getElementById('sendLogin')
// const user = document.getElementById('user')
// const password = document.getElementById('password')

// //Accion del boton de login para saludar y validar inputs de usuario
// botonLogin.onclick = e => { 
//     if(validarInputs(user,password)===true){
//         saludar(user)
//     }else{
//         alert('Ingresar nombre de usuario y contraseña')
//     }
// }

// //Funcion para validar usuario y contraseña vacios
// let validarInputs = (user,password) => {
//     if(user.value.length > 0 && password.value.length > 0){
//         return true
//     }else{
//         return false
//     }
// }

// //Funcion saluda al nombre del usuario ingresado
// let saludar = (user) => {
//     alert(`Bienvenido ${user.value}`)
// }

// //Boton para mostrar el menu (array de productos)
// const botonMenu = document.getElementById('verMenu')
// const menu = document.getElementById('menu')

// botonMenu.onclick = event => {    

//     productos.forEach( (producto) => {    
//         const listarProductos = document.createElement('li')
//         listarProductos.innerText = producto.nombre

//         menu.append(listarProductos)
//     })
// }
