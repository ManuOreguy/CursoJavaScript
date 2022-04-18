let products = [];
let cart = [];

const productsContainer = document.querySelector(".prodContainer");
const productsInCart = document.querySelector(".products");

//Primeros pasos

const getData = async () => {
  try {
    const res = await fetch(`./productos.json`);
    const data = await res.json();
    products = data; //Agrego los datos del json en un array de productos
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
};

getData();

const checkoutCart = () => {
  cartItems = localStorage.getItem("cart");
  cartItems = JSON.parse(cartItems);
};

const renderProducts = (products) => {
  productsContainer.innerHTML = "";
  products.forEach((item) => {
    productsContainer.innerHTML += `
      <div class="item">
      <img class="image" src="./images/${item.img}">
      </div>
      <div class="item">
        ${item.nombre}
      </div>
      <div class="item">
        ${item.precio}
      </div>
      <div class="item">
        <button onclick="addToCart(${item.id})"> Agregar al Carrito </button>
      </div>
    `;
  });
};

const addToCart = (id) => {
  if(cart.some((item)=> item.id === id)){
    alert("Product already in cart")
  }else{
    const item = products.find((product) => product.id === id);
    item.inCart = 1;
    cart.push({
      ...item
    })

    console.log(cart);
  }
}

const totalProduct = (id) => {

}

const renderCartItems = () => {
  productsInCart.innerHTML="";
  cart.forEach((item) => {
    productsInCart.innerHTML += `
    <div class="">
      <img class="image" src="./images/${item.img}">
      <h4>${item.nombre}</h4>
      </div>
      <div class="">
        <small>Cantidad: ${item.inCart}</small>
      </div>
      <div class="">
        <small>Precio: ${item.inCart}</small>
      </div>
    `
  })
}

renderCartItems();
