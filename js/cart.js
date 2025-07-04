// ================================
// MEJORAS PARA EL CONTADOR DEL CARRITO
// ================================

// 1. Función mejorada para actualizar el contador del carrito
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Actualizar todos los contadores en la página
  const cartCounters = document.querySelectorAll('.cart-counter, .cart-badge, .cart-count');
  cartCounters.forEach(counter => {
    counter.textContent = totalItems;
    counter.style.display = totalItems > 0 ? 'inline-block' : 'none';
  });

  // También actualizar el texto del carrito si existe
  const cartText = document.querySelector('.cart-text');
  if (cartText) {
    cartText.textContent = totalItems === 1 ? '1 producto' : `${totalItems} productos`;
  }

  // Actualizar el título del carrito si existe
  const cartTitle = document.querySelector('.cart-title');
  if (cartTitle) {
    cartTitle.textContent = `Carrito (${totalItems})`;
  }

  return totalItems;
}

// 2. Función para mostrar el resumen del carrito en cualquier página
function showCartSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  console.log(`Carrito: ${totalItems} productos - Total: ${totalPrice.toFixed(2)} €`);
  
  return {
    items: totalItems,
    total: totalPrice,
    products: cart
  };
}

// 3. Función para crear un contador visual del carrito
function createCartCounter() {
  // Buscar el elemento del carrito en el header/navbar
  const cartLink = document.querySelector('a[href*="carrito"], .cart-link, .cart-icon');
  
  if (cartLink && !cartLink.querySelector('.cart-counter')) {
    const counter = document.createElement('span');
    counter.className = 'cart-counter';
    counter.style.cssText = `
      position: absolute;
      top: -8px;
      right: -8px;
      background: #e91e63;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      min-width: 20px;
      display: none;
    `;
    
    // Hacer el enlace del carrito relativo para posicionar el contador
    cartLink.style.position = 'relative';
    cartLink.appendChild(counter);
  }
}

// 4. Función para actualizar el carrito y el contador (mejorada)
function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
  updateCartTotal();
  updateCartCounter(); // Añadir esta línea
  
  // Opcional: Mostrar notificación con el estado del carrito
  const totalItems = updateCartCounter();
  if (totalItems > 0) {
    console.log(`Carrito actualizado: ${totalItems} productos`);
  }
}

// 5. Función para añadir al carrito (mejorada)
function addToCart(product) {
  const existingItem = cart.find(item => 
    item.id === product.id && item.size === product.size && item.color === product.color
  );
  
  if (existingItem) {
    existingItem.quantity += product.quantity;
    showNotification(`Cantidad actualizada: ${existingItem.quantity} unidades`);
  } else {
    cart.push(product);
    showNotification(`${product.name} añadido al carrito`);
  }
  
  updateCart();
}

// 6. Función para mostrar información detallada del carrito
function displayCartInfo() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart.length === 0) {
    console.log('El carrito está vacío');
    return;
  }

  console.log('=== CONTENIDO DEL CARRITO ===');
  cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} (${item.color}) - Talla: ${item.size} - Cantidad: ${item.quantity} - Precio: ${(item.price * item.quantity).toFixed(2)} €`);
  });
  
  const summary = showCartSummary();
  console.log(`TOTAL: ${summary.items} productos - ${summary.total.toFixed(2)} €`);
}

// 7. Función para actualizar la visualización del carrito (mejorada)
function updateCartDisplay() {
  const cartContainer = document.querySelector('.cart-items');
  if (!cartContainer) return;

  // Actualizar el título del carrito con el contador
  const cartHeader = document.querySelector('.cart-header h1, .cart-title');
  if (cartHeader) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartHeader.textContent = `Carrito (${totalItems})`;
  }

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <p>Tu carrito está vacío.</p>
        <a href="index.html" class="continue-shopping">Continuar comprando</a>
      </div>
    `;
    return;
  }

  // Mostrar resumen al inicio del carrito
  const cartSummary = `
    <div class="cart-summary-header">
      <h2>Resumen: ${cart.length} productos únicos, ${cart.reduce((sum, item) => sum + item.quantity, 0)} unidades total</h2>
    </div>
  `;

  cartContainer.innerHTML = cartSummary + cart.map((item, index) => `
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

// 8. Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  // Crear contador del carrito si no existe
  createCartCounter();
  
  // Actualizar contador inicial
  updateCartCounter();
  
  // Actualizar displays si estamos en la página del carrito
  if (document.querySelector('.cart-items')) {
    updateCartDisplay();
    updateCartTotal();
  }

  // Mostrar información del carrito en la consola (para debugging)
  displayCartInfo();
});

// 9. Función para escuchar cambios en localStorage (útil para múltiples pestañas)
window.addEventListener('storage', function(e) {
  if (e.key === 'cart') {
    cart = JSON.parse(e.newValue) || [];
    updateCartCounter();
    
    if (document.querySelector('.cart-items')) {
      updateCartDisplay();
      updateCartTotal();
    }
  }
});

// 10. Función para exportar funciones globales
window.cartUtils = {
  updateCounter: updateCartCounter,
  showSummary: showCartSummary,
  displayInfo: displayCartInfo,
  getTotalItems: () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },
  getTotalPrice: () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
};

// ================================
// ESTILOS CSS ADICIONALES PARA EL CONTADOR
// ================================

const cartCounterStyles = `
  .cart-counter {
    position: absolute;
    top: -2px;
    right: -8px;
    background: #e91e63;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    min-width: 10px;
    animation: cartBounce 0.3s ease-in-out;
  }

  .cart-summary-header {
    background: #f8f9fa;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
    border-left: 4px solid #e91e63;
  }

  .cart-summary-header h2 {
    margin: 0;
    color: #333;
    font-size: 18px;
    font-weight: 600;
  }

  @keyframes cartBounce {
    0% { transform: scale(0.8); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .cart-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--color-black);
    color: var(--color-white);
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 1000;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  .cart-notification.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Añadir estilos al head si no existen
if (!document.querySelector('#cart-counter-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'cart-counter-styles';
  styleSheet.textContent = cartCounterStyles;
  document.head.appendChild(styleSheet);
}
 


// Función para actualizar el contador del carrito
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const cartCounters = document.querySelectorAll('.cart-counter, .cart-badge, .cart-count');
  cartCounters.forEach(counter => {
    counter.textContent = totalItems;
    counter.style.display = totalItems > 0 ? 'none' : 'none';
  });

  return totalItems;
}

// Modificar la función updateCart existente para incluir el contador
function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
  updateCartTotal();
  updateCartCounter(); // Añadir esta línea
}