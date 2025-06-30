// Product Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Product data mapping
  const products = {
    'field-general': {
      id: 'field-general',
      name: 'Nike Field General',
      category: 'Zapatillas - Mujer',
      price: 99.99,
      colors: [
        {
          name: 'Elemental Pink/Gum Medium Brown/Obsidian',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/12a56561-8431-4a91-8bd9-a2929ba5baad/air-force-1-07-zapatillas-GjGXSP.png'
        }
      ],
      description: 'Las Nike Field General ofrecen un diseño versátil y cómodo para tu día a día.'
    },
    'air-force-1': {
      id: 'air-force-1',
      name: 'Nike Air Force 1 Low Premium',
      category: 'Zapatillas - Mujer',
      price: 129.99,
      colors: [
        {
          name: 'Light Bone/Kelly Green/Pink Foam/Light Bone',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/36a7ac0b-dfea-4ce9-b6c9-58b9b13a1522/air-force-1-07-lx-zapatillas-bkTs6J.png'
        }
      ],
      description: 'Las Nike Air Force 1 Low elevan su leyenda con un toque de brillo.'
    },
    'shox-r4': {
      id: 'shox-r4',
      name: 'Nike Shox R4',
      category: 'Zapatillas - Mujer',
      price: 149.99,
      colors: [
        {
          name: 'Black/Black',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7981197-5846-4e06-90e4-ed9f5a467501/shox-r4-zapatillas-qsfXpZ.png'
        }
      ],
      description: 'Las Nike Shox R4 vuelven con su icónico diseño y tecnología de amortiguación.'
    }
  };

  // Get current product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'shox-r4'; // Default to Air Force 1 
  const currentProduct = products[productId];

  // Update page content with product data
  if (currentProduct) {
    document.querySelector('.product-title').textContent = currentProduct.name;
    document.querySelector('.product-category').textContent = currentProduct.category;
    document.querySelector('.product-price').textContent = `${currentProduct.price.toFixed(2)} €`;
    document.querySelector('#main-product-image').src = currentProduct.colors[0].image;
    
    if (document.querySelector('.product-description')) {
      document.querySelector('.product-description').innerHTML = `
        <p>${currentProduct.description}</p>
        <ul class="description-list">
          <li>Color mostrado: ${currentProduct.colors[0].name}</li>
          <li>Modelo: ${currentProduct.id.toUpperCase()}</li>
        </ul>
        <a href="#" class="product-details-link">Ver detalles de producto</a>
      `;
    }
  }

  // DOM Elements
  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const colorOptions = document.querySelectorAll('.color-option');
  const sizeButtons = document.querySelectorAll('.size-button');
  const addToCartButton = document.querySelector('.add-to-cart-button');
  const favoriteButton = document.querySelector('.favorite-button');
  
  let selectedSize = null;
  let currentProductData = currentProduct;

  // Handle Thumbnail Click
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      mainImage.src = imgSrc;
      
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      this.classList.add('active');
      
      currentProductData.image = imgSrc;
    });
  });

  // Handle Color Selection
  colorOptions.forEach(colorOption => {
    colorOption.addEventListener('click', function() {
      colorOptions.forEach(option => option.classList.remove('active'));
      this.classList.add('active');
      
      const newImage = this.querySelector('img').src;
      mainImage.src = newImage;
      currentProductData.image = newImage;
      currentProductData.color = this.getAttribute('data-color-name') || currentProduct.colors[0].name;
    });
  });

  // Handle Size Selection
  sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
      sizeButtons.forEach(btn => btn.classList.remove('selected'));
      this.classList.add('selected');
      selectedSize = this.textContent;
    });
  });

  // Handle Add to Cart
  if (addToCartButton) {
    addToCartButton.addEventListener('click', function() {
      if (!selectedSize) {
        showNotification('Por favor, selecciona una talla');
        return;
      }

      const productToAdd = {
        ...currentProductData,
        size: selectedSize,
        quantity: 1,
        image: mainImage.src
      };

      // Get existing cart
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Check if product already exists in cart
      const existingItemIndex = cart.findIndex(item => 
        item.id === productToAdd.id && item.size === productToAdd.size
      );

      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push(productToAdd);
      }

      // Save updated cart
      localStorage.setItem('cart', JSON.stringify(cart));
      
      showNotification('Producto añadido al carrito');
      
      // Optional: Redirect to cart page
      window.location.href = 'carrito.html';
    });
  }

  // Handle Favorite Button
  if (favoriteButton) {
    let isFavorite = false;
    
    favoriteButton.addEventListener('click', function() {
      isFavorite = !isFavorite;
      
      const favoriteIcon = this.querySelector('.favorite-icon');
      
      if (isFavorite) {
        favoriteIcon.innerHTML = `
          <path fill="currentColor" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
        `;
        favoriteIcon.style.color = '#e91e63';
        showNotification('Añadido a favoritos');
      } else {
        favoriteIcon.innerHTML = `
          <path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
        `;
        favoriteIcon.style.color = 'currentColor';
        showNotification('Eliminado de favoritos');
      }
    });
  }

  // Show notification
  function showNotification(message) {
    let notification = document.querySelector('.product-notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.className = 'product-notification';
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

  // Toggle product information sections
  const toggleButtons = document.querySelectorAll('.info-header .toggle-button');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const infoContent = this.closest('.info-header').nextElementSibling;
      
      this.classList.toggle('open');
      infoContent.classList.toggle('open');
      
      if (infoContent.classList.contains('open')) {
        infoContent.style.display = 'block';
      } else {
        infoContent.style.display = 'none';
      }
    });
  });
});

 let cartCount = 0;

    function addToCart() {
      cartCount++;
      document.getElementById("cart-count").textContent = cartCount;
    }