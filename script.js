const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

const cartItems = [];

function addToCart(event) {
  const menuItem = event.target.parentNode;
  const itemName = menuItem.querySelector('h2').textContent;
  if (!cartItems.includes(itemName)) {
    cartItems.push(itemName);
    menuItem.classList.add('selected');
    updateCart();
  }
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cartItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });
}

document.getElementById('clear-cart').addEventListener('click', clearCart);

function clearCart() {
  cartItems.length = 0;
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    item.classList.remove('selected');
  });
  updateCart();
}
