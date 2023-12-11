let products = JSON.parse(localStorage.getItem('arrSp'))
function addtoCart(){
for (let i = 0; i < products.length; i++) {
  // console.log(products.length)
    const login = localStorage.getItem('currentUser')
    // *********** Kiểm tra tình trạng login **********************
    if (!login){
      alert('Bạn phải đăng nhập để mua hàng')
      break;
    }
    else {
      alert("Sản phẩm đã được thêm vào giỏ hàng");
      const currProduct = JSON.parse(localStorage.getItem('sanpham'))
      console.log(currProduct)
      // localStorage.setItem("productsIncart", currProduct)
      window.location.reload();
      cartNumbers(currProduct);
      // console.log(products[i])
      totalPrice(currProduct);
      break;
  }}
};
///////--------------------changetocart-----------------////////
function changetocart(){
    document.getElementById('homePage1').style.display = "none";
    document.getElementById('footeron').style.display = "block";
    document.getElementById('showCart').style.display="block";
    document.getElementById("main1").style.display="none";
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    // document.querySelector(".nav-item span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    // document.querySelector('.nav-item span').textContent = 1
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsIncart");
  let cartList;
  if (cartItems == null) cartList = [];
  else cartList = JSON.parse(cartItems);
  for (const cart of cartList) {
    if (cart.id === product.id) {
      cart.quantity++;
      localStorage.setItem("productsIncart", JSON.stringify(cartList));
      return;
    }
  }
  product.quantity = 1;
  cartList.push(product);
  localStorage.setItem("productsIncart", JSON.stringify(cartList));
}

function totalPrice(product) {
  let cartPrice = localStorage.getItem("totalPrice");
  if (cartPrice != null) {
    cartPrice = parseInt(cartPrice);
    localStorage.setItem("totalPrice", cartPrice + product.price);
  } else {
    localStorage.setItem("totalPrice", product.price);
  }
  // for (let product of products) {
  //   cartPrice += product.price * product.quantity;
  // };
  // localStorage.setItem("totalPrice", cartPrice);
  // return cartPrice;
}

function deleleProdcut(product) {
  let cartItems = localStorage.getItem("productsIncart");
  let cartList;
  if (!cartItems) {
    cartList = [];
  } else cartList = JSON.parse(cartItems);
  let cartPrice = localStorage.getItem("totalPrice");
  cartPrice = parseInt(cartPrice);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  for (const cart of cartList) {
    if (cart.id == product) {
      cart.quantity == 0;
      cartPrice -= cart.price * cart.quantity;
      productNumbers -= cart.quantity;
      cartList = cartList.filter((item) => item.id != cart.id);

      localStorage.setItem("productsIncart", JSON.stringify(cartList));
      localStorage.setItem("productsIncart", JSON.stringify(cartList));
      localStorage.setItem("totalPrice", cartPrice);
      localStorage.setItem("cartNumbers", productNumbers);
      displayCart();
      // onLoadCartNumbers();
      return;
    }
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsIncart");
  cartItems = JSON.parse(cartItems);
  let cartPrice = localStorage.getItem("totalPrice");
  let productContainer = document.querySelector(".products");
  if (cartItems && Object.keys(cartItems).length > 0) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      // console.log(item.id);
      productContainer.innerHTML += `
            <div class="product">
                <img src="./image/product_${item.id}.jpg">
                <span>${item.name}</span>
                <button class="btn-delete" id="${item.id}">Xóa</button>
            </div>     
            <div class="price">${item.price}đ</div>
            <div class="quantity">
            <button type="button" value="${
              item.id
            }" class="decrease-btn" id="decrease${item.id}">-</button> 
                <span >${item.quantity}</span>
            <button type="button" value="${
              item.id
            }" class="increase-btn" id="increase${item.id}">+</button> 
            </div>
            <div class="total">
                ${item.quantity * item.price}đ
            </div>
            `;
    });

    productContainer.innerHTML += `
        <div class="totalPrice">
            <h3 class="title-totalPrice">  Total Price</h3>
            <h4 class="text"> ${cartPrice}đ </h4>`;
  } else {
    productContainer.innerHTML = `
        <div class="emptyCart">
            <h3 class="title-emptyCart">  Your cart is empty</h3>
            <h4 class="text"> Please add some products to your cart  </h4>
        </div>`;
  }
  let btnDelete = document.querySelectorAll(".btn-delete");
  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", () => {
      //   let product = products.find((item) => item.id == btnDelete[i].id)
      //   decrease(product)
      deleleProdcut(btnDelete[i].id);
    });
  }
  const decreasebtn = document.getElementsByClassName("decrease-btn");
  const increasebtn = document.getElementsByClassName("increase-btn");
  // console.log(decreasebtn)
  for (const btn of decreasebtn) {
    btn.addEventListener("click", () => {
      // console.log('decrease ' + btn.value)
      decrease(btn.value);
    });
  }
  for (const btn of increasebtn) {
    // console.log(btn)
    btn.addEventListener("click", () => {
      // console.log("increase " + btn.value);
      increase(btn.value);
    });
  }
}

function increase(product) {
  let cartItems = localStorage.getItem("productsIncart");
  let cartList;
  if (!cartItems) {
    cartList = [];
  } else cartList = JSON.parse(cartItems);
  let cartPrice = localStorage.getItem("totalPrice");
  cartPrice = parseInt(cartPrice);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  // console.log('product id' + product)
  for (const cart of cartList) {
    if (cart.id == product) {
      cart.quantity++;
      //   totalPrice(products.find((item) => item.id == product));
      cartPrice += cart.price;
      productNumbers += 1;

      // console.log(cartList);

      localStorage.setItem("productsIncart", JSON.stringify(cartList));
      localStorage.setItem("productsIncart", JSON.stringify(cartList));
      localStorage.setItem("totalPrice", cartPrice);
      localStorage.setItem("cartNumbers", productNumbers);
      displayCart();
      onLoadCartNumbers();
      return;
    }
  }
}

function decrease(product) {
  let cartItems = localStorage.getItem("productsIncart");
  let cartList;
  if (!cartItems) {
    cartList = [];
  } else cartList = JSON.parse(cartItems);
  let cartPrice = localStorage.getItem("totalPrice");
  cartPrice = parseInt(cartPrice);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  for (const cart of cartList) {
    if (cart.id == product) {
      cart.quantity--;
      cartPrice -= cart.price;
      productNumbers -= 1;

      if (cart.quantity == 0)
        cartList = cartList.filter((item) => item.id != cart.id);

      // console.log(cartList);

      localStorage.setItem("productsIncart", JSON.stringify(cartList));
      localStorage.setItem("productsIncart", JSON.stringify(cartList));
      localStorage.setItem("totalPrice", cartPrice);
      localStorage.setItem("cartNumbers", productNumbers);
      displayCart();
      // onLoadCartNumbers();
      return;
    }
  }
}

const btnLogout = document.getElementById("btn-logout");
btnLogout.addEventListener("click", () => {
  window.location.href = "../index.html";
});

// onLoadCartNumbers();
displayCart();

const checkOutBtn = document.getElementById("checkout");
const currUSer = localStorage.getItem("currentUser");

checkOutBtn.onclick = () => {
  const bill = [];
  const price = localStorage.getItem('totalPrice')
  const quantity = localStorage.getItem('cartNumbers')
  const order = JSON.parse(localStorage.getItem('productsIncart'))
  console.log(order)
  console.log (typeof order.id)
  // console.log(price + quantity + order)
  alert('Ban da mua hang thanh cong')
  localStorage.removeItem('productsIncart')
  // window.location.reload();
  localStorage.removeItem('totalPrice')
  localStorage.removeItem('cartNumbers')
 // tiep them
 displayCart();
};


