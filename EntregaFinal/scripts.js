let products = [];
let cart = [];

const productsContainer = document.querySelector(".prodContainer");
const productsInCart = document.querySelector(".cartProducts");

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

checkoutCart();

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
  //Me fijo si el articulo esta en el carrito
    if(cart.some((item)=> item.id === id)){
      alert("Product already in cart")
    }else{
      const item = products.find((product) => product.id === id);
      
      

      cart.push({
        ...item,
        inCart: 1,
      })
    } 

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart();
  }

  // const productosEnCarrito = localStorage.getItem('cart');
  // console.log(productosEnCarrito);

  const totalProduct = (id) => {
    
  }
  
  
  const updateCart = () => {
    renderCartItems();
    // renderTotal();
  }


const renderCartItems = () => {
  productsInCart.innerHTML = "";
  cartItems.map((item) => {
    productsInCart.innerHTML += `
      <div class="cartItems">
        <div class="itemInfo">
          <h4>${item.nombre}</h4>
        </div>
        <div class="itemPrice">
          Total: $${item.precio * item.inCart}
        </div>
        <div class="units">
          <div class="btn minus" onclick="changeNumberOfUnits('minus',${item.id})">-</div>
          <div> Cantidad: ${item.inCart} </div>
          <div class="btn plus" onclick="changeNumberOfUnits('plus',${item.id})">+</div>
        </div>
      </div>
    `;
  });
};

const changeNumberOfUnits = (action,id) => {
  cart = localStorage.getItem("cart");
  cart = JSON.parse(cart);

  cart.map((item) => {
    let numberOfUnits = item.inCart;



    if(item.id === id){
      if(action === "minus"){
        numberOfUnits--;
      }else if(action === "plus"){
        numberOfUnits++;
      }
    }
    console.log(numberOfUnits);
    return{
      ...item,
      inCart: numberOfUnits,
    };
  });
  console.log(cart);
  // localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

renderCartItems();

