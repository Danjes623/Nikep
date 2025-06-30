// Cart Page JavaScript

// Initialize cart from localStorage or empty array if none exists
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
  updateCartTotal();
}

function addToCart(product) {
  const existingItem = cart.find(item => 
    item.id === product.id && item.size === product.size
  );
  if (existingItem) {
    existingItem.quantity += product.quantity;
  } else {
    cart.push(product);
  }
}

  updateCart();
showNotification(message) 
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2500); // La notificación se muestra por 2.5 segundos





function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateQuantity(index, newQuantity) {
  if (newQuantity > 0 && newQuantity <= 10) {
    cart[index].quantity = newQuantity;
    updateCart();
  }
}

function updateCartDisplay() {
  const cartContainer = document.querySelector('.cart-items');
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <p>Tu carrito está vacío.</p>
        <a href="index.html" class="continue-shopping">Continuar comprando</a>
      </div>
    `;
    return;
  }

  cartContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      
      <div class="item-details">
        <div class="item-info">
          <h3 class="item-title">${item.name}</h3>
          <div class="item-category">${item.category}</div>
          <div class="item-color">${item.color}</div>
          <div class="item-size">Talla: ${item.size}</div>
          <div class="item-actions">
            <a href="#" class="item-action-link">Opciones de regalo</a>
          </div>
        </div>
        
        <div class="item-quantity">
          <div class="quantity-controls">
            <button class="quantity-button decrease" onclick="updateQuantity(${index}, ${item.quantity - 1})">
              <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none">
                <path stroke="currentColor" stroke-width="1.5" d="M5 12h14"></path>
              </svg>
            </button>
            <input type="number" value="${item.quantity}" min="1" max="10" class="quantity-input" 
              onchange="updateQuantity(${index}, parseInt(this.value))">
            <button class="quantity-button increase" onclick="updateQuantity(${index}, ${item.quantity + 1})">
              <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none">
                <path stroke="currentColor" stroke-width="1.5" d="M12 5v14M5 12h14"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="item-price">${(item.price * item.quantity).toFixed(2)} €</div>
        
        <div class="item-actions-mobile">
          <button class="remove-button" onclick="removeFromCart(${index})">
            <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none">
              <path stroke="currentColor" stroke-width="1.5" d="M16.5 7.5l-9 9M7.5 7.5l9 9"></path>
            </svg>
          </button>
          <button class="favorite-button">
            <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none">
              <path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="item-pickup">
        <div class="pickup-info">Recogida gratuita</div>
        <a href="#" class="store-link">Buscar una tienda</a>
      </div>
    </div>
  `).join('');
}

function updateCartTotal() {
  const subtotalElement = document.querySelector('.summary-row:first-child .summary-value');
  const totalElement = document.querySelector('.total-row .summary-value');
  
  if (!subtotalElement || !totalElement) return;

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  subtotalElement.textContent = `${subtotal.toFixed(2)} €`;
  totalElement.textContent = `${subtotal.toFixed(2)} €`;
}

function showNotification(message) {
  let notification = document.querySelector('.cart-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.className = 'cart-notification';
    document.body.appendChild(notification);
    
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--color-black)';
    notification.style.color = 'var(--color-white)';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '4px';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s, transform 0.3s';
  }
  
  notification.textContent = message;
  notification.style.opacity = '1';
  notification.style.transform = 'translateY(0)';
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
  }, 3000);
}

// Initialize cart display when page loads
document.addEventListener('DOMContentLoaded', () => {
  updateCartDisplay();
  updateCartTotal();

  // Handle checkout button
  const checkoutButton = document.querySelector('.checkout-button');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      if (cart.length === 0) {
        showNotification('El carrito está vacío');
        return;
      }
      alert('Continuando al proceso de pago...');
    });
  }

  // Handle promo code
  const promoForm = document.querySelector('.promo-form');
  if (promoForm) {
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const promoInput = promoForm.querySelector('.promo-input');
      const promoCode = promoInput.value.trim();
      
      if (promoCode) {
        showNotification('Código promocional aplicado');
        promoInput.value = '';
      } else {
        showNotification('Por favor, introduce un código promocional');
      }
    });
  }
});




 
