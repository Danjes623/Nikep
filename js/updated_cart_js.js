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
  updateCart();
}

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

// Función para crear el modal de métodos de pago
function createPaymentModal() {
  // Verificar si el modal ya existe
  let modal = document.querySelector('.payment-modal');
  if (modal) {
    modal.remove();
  }

  // Crear el modal
  modal = document.createElement('div');
  modal.className = 'payment-modal';
  modal.innerHTML = `
    <div class="payment-modal-overlay">
      <div class="payment-modal-content">
        <div class="payment-modal-header">
          <h3>Selecciona tu método de pago</h3>
          <button class="payment-modal-close">&times;</button>
        </div>
        <div class="payment-methods">
          <div class="payment-method" data-method="nequi">
            <div class="payment-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="20" fill="#6B2C91"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16" font-weight="bold">N</text>
              </svg>
            </div>
            <div class="payment-info">
              <span class="payment-name">Nequi</span>
              <span class="payment-desc">Pago móvil instantáneo</span>
            </div>
          </div>
          
          <div class="payment-method" data-method="visa">
            <div class="payment-icon">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <rect width="40" height="24" rx="4" fill="#1A1F71"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="10" font-weight="bold">VISA</text>
              </svg>
            </div>
            <div class="payment-info">
              <span class="payment-name">Visa</span>
              <span class="payment-desc">Tarjeta de crédito/débito</span>
            </div>
          </div>
          
          <div class="payment-method" data-method="mastercard">
            <div class="payment-icon">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <rect width="40" height="24" rx="4" fill="#EB001B"/>
                <circle cx="15" cy="12" r="8" fill="#EB001B" opacity="0.8"/>
                <circle cx="25" cy="12" r="8" fill="#FF5F00" opacity="0.8"/>
              </svg>
            </div>
            <div class="payment-info">
              <span class="payment-name">Mastercard</span>
              <span class="payment-desc">Tarjeta de crédito/débito</span>
            </div>
          </div>
          
          <div class="payment-method" data-method="paypal">
            <div class="payment-icon">
              <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" style="height: 24px;">
            </div>
            <div class="payment-info">
              <span class="payment-name">PayPal</span>
              <span class="payment-desc">Pago seguro online</span>
            </div>
          </div>
        </div>
        
        <div class="payment-summary">
          <div class="summary-line">
            <span>Total a pagar:</span>
            <span class="total-amount">${getTotalAmount()} €</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Estilos del modal
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Agregar estilos CSS
  const style = document.createElement('style');
  style.textContent = `
    .payment-modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    
    .payment-modal-content {
      background: white;
      border-radius: 12px;
      max-width: 480px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      animation: modalSlideIn 0.3s ease;
    }
    
    @keyframes modalSlideIn {
      from { transform: translateY(-50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    .payment-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 24px 16px;
      border-bottom: 1px solid #e5e5e5;
    }
    
    .payment-modal-header h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
    
    .payment-modal-close {
      background: none;
      border: none;
      font-size: 28px;
      cursor: pointer;
      color: #666;
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.2s;
    }
    
    .payment-modal-close:hover {
      background: #f5f5f5;
      color: #333;
    }
    
    .payment-methods {
      padding: 24px;
    }
    
    .payment-method {
      display: flex;
      align-items: center;
      padding: 16px;
      border: 2px solid #e5e5e5;
      border-radius: 8px;
      margin-bottom: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .payment-method:hover {
      border-color: #333;
      background: #f9f9f9;
    }
    
    .payment-method.selected {
      border-color: #333;
      background: #f0f0f0;
    }
    
    .payment-icon {
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 48px;
    }
    
    .payment-info {
      display: flex;
      flex-direction: column;
    }
    
    .payment-name {
      font-weight: 600;
      font-size: 16px;
      color: #333;
      margin-bottom: 2px;
    }
    
    .payment-desc {
      font-size: 14px;
      color: #666;
    }
    
    .payment-summary {
      padding: 16px 24px 24px;
      border-top: 1px solid #e5e5e5;
      background: #f9f9f9;
      border-radius: 0 0 12px 12px;
    }
    
    .summary-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    
    .total-amount {
      color: #000;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(modal);

  // Event listeners del modal
  const closeBtn = modal.querySelector('.payment-modal-close');
  const overlay = modal.querySelector('.payment-modal-overlay');
  const paymentMethods = modal.querySelectorAll('.payment-method');

  // Cerrar modal
  function closeModal() {
    modal.remove();
    style.remove();
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Seleccionar método de pago
  paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
      // Remover selección anterior
      paymentMethods.forEach(m => m.classList.remove('selected'));
      // Agregar selección actual
      method.classList.add('selected');
      
      const paymentMethod = method.dataset.method;
      
      // Procesar compra después de un breve delay
      setTimeout(() => {
        closeModal();
        processCheckout(paymentMethod);
      }, 500);
    });
  });
}

// Función para obtener el monto total
function getTotalAmount() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

// Nueva función para procesar la compra
function processCheckout(paymentMethod) {
  if (cart.length === 0) {
    showNotification('El carrito está vacío');
    return;
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  let message;
  switch(paymentMethod) {
    case 'nequi':
      message = `¡Compra con Nequi realizada! ${totalItems} productos por ${totalAmount.toFixed(2)} €`;
      break;
    case 'visa':
      message = `¡Compra con Visa realizada! ${totalItems} productos por ${totalAmount.toFixed(2)} €`;
      break;
    case 'mastercard':
      message = `¡Compra con Mastercard realizada! ${totalItems} productos por ${totalAmount.toFixed(2)} €`;
      break;
    case 'paypal':
      message = `¡Compra con PayPal realizada! ${totalItems} productos por ${totalAmount.toFixed(2)} €`;
      break;
    default:
      message = `¡Compra realizada! ${totalItems} productos por ${totalAmount.toFixed(2)} €`;
  }
  
  showNotification(message);
  
  // Vaciar el carrito después de la compra
  cart = [];
  updateCart();
  
  // Opcional: redirigir a una página de confirmación después de un breve delay
  setTimeout(() => {
    // window.location.href = 'confirmacion.html'; // Descomenta si tienes una página de confirmación
  }, 2000);
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

  // Handle checkout buttons - Ambos abren el modal de métodos de pago
  const checkoutButton = document.querySelector('.checkout-button');
  const paypalButton = document.querySelector('.paypal-button');
  
  if (checkoutButton) {
    checkoutButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        showNotification('El carrito está vacío');
        return;
      }
      createPaymentModal();
    });
  }
  
  if (paypalButton) {
    paypalButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        showNotification('El carrito está vacío');
        return;
      }
      createPaymentModal();
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