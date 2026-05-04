// Lấy giỏ hàng từ localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Lưu giỏ hàng vào localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Gán sự kiện "Add to Cart" cho các nút
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productEl = button.closest('.product');
      const name = productEl.querySelector('span b').innerText;
      const priceText = productEl.querySelector('.price b').innerText;
      const price = parseFloat(priceText.replace('$', ''));

      const item = { name, price, quantity: 1 };

      const cart = getCart();
      const existing = cart.find(p => p.name === item.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push(item);
      }

      saveCart(cart);
      alert(`Added "${item.name}" to cart!`);
    });
  });
});

