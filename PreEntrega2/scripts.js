//array de objetos para cada producto
const productos = [
  { id: 1, nombre: "Pizza", precio: 500, inCart: 0,estado: true },
  { id: 2, nombre: "Empanadas", precio: 100, inCart: 0, estado: true },
  { id: 3, nombre: "Nuggets", precio: 50, inCart: 0, estado: true },
  { id: 4, nombre: "Franui", precio: 400, inCart: 0, estado: true }
];



let carts = document.querySelectorAll('.add-cart');

for(let i=0 ; i < carts.length; i++){
    carts[i].addEventListener('click', () => {

    cartNumbers(productos[i]);
  })
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.cart span').textContent = productNumbers + 1;
  }else{
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.cart span').textContent = 1;
  }

  setItems(product);
}

function setItems (product){
  let cartItems = localStorage.getItem('productosInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null){
    if(cartItems[product.nombre] != undefined){
      cartItems = {
        ...cartItems,
        [product.nombre]: product
      }
    }
    cartItems[product.nombre].inCart += 1;
  } else{
    product.inCart = 1;
    cartItems = {
      [product.nombre]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

//No pierdo la cant del carrito en el reload de la pagina
onLoadCartNumbers();