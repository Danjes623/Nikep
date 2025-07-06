// Favorites Management System
class FavoritesManager {
  constructor() {
    this.favorites = this.loadFavorites();
    this.init();
  }

  init() {
    this.updateFavoritesCounter();
    this.renderFavorites();
    this.bindEvents();
    this.addFavoriteButtonsToProducts();
  }

  // Load favorites from localStorage
  loadFavorites() {
    try {
      return JSON.parse(localStorage.getItem('favorites')) || [];
    } catch (error) {
      console.error('Error loading favorites:', error);
      return [];
    }
  }

  // Save favorites to localStorage
  saveFavorites() {
    try {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.updateFavoritesCounter();
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }

  // Add product to favorites
  addToFavorites(productId, productData) {
    const existingIndex = this.favorites.findIndex(item => item.id === productId);
    
    if (existingIndex === -1) {
      const favoriteItem = {
        id: productId,
        name: productData.name,
        category: productData.category,
        price: productData.price,
        originalPrice: productData.originalPrice,
        image: productData.colors[0].image,
        addedAt: new Date().toISOString()
      };
      
      this.favorites.push(favoriteItem);
      this.saveFavorites();
      this.showNotification(`${productData.name} añadido a favoritos`, 'success');
      this.renderFavorites();
      return true;
    } else {
      this.showNotification('Este producto ya está en favoritos', 'info');
      return false;
    }
  }

  // Remove product from favorites
  removeFromFavorites(productId) {
    const index = this.favorites.findIndex(item => item.id === productId);
    
    if (index !== -1) {
      const removedItem = this.favorites[index];
      this.favorites.splice(index, 1);
      this.saveFavorites();
      this.showNotification(`${removedItem.name} eliminado de favoritos`, 'info');
      this.renderFavorites();
      return true;
    }
    return false;
  }

  // Toggle favorite status
  toggleFavorite(productId, productData) {
    if (this.isFavorite(productId)) {
      this.removeFromFavorites(productId);
      return false;
    } else {
      this.addToFavorites(productId, productData);
      return true;
    }
  }

  // Check if product is in favorites
  isFavorite(productId) {
    return this.favorites.some(item => item.id === productId);
  }

  // Clear all favorites
  clearAllFavorites() {
    if (this.favorites.length === 0) {
      this.showNotification('No hay favoritos para eliminar', 'info');
      return;
    }

    if (confirm('¿Estás seguro de que quieres eliminar todos los favoritos?')) {
      this.favorites = [];
      this.saveFavorites();
      this.renderFavorites();
      this.showNotification('Todos los favoritos han sido eliminados', 'info');
    }
  }

  // Update favorites counter in header
  updateFavoritesCounter() {
    const counters = document.querySelectorAll('.favorites-counter');
    const countNumber = document.querySelector('.count-number');
    
    counters.forEach(counter => {
      counter.textContent = this.favorites.length;
      if (this.favorites.length > 0) {
        counter.classList.add('show');
      } else {
        counter.classList.remove('show');
      }
    });

    if (countNumber) {
      countNumber.textContent = this.favorites.length;
    }
  }

  // Render favorites on the favorites page
  renderFavorites() {
    const favoritesGrid = document.getElementById('favorites-grid');
    const emptyFavorites = document.getElementById('empty-favorites');
    
    if (!favoritesGrid) return;

    if (this.favorites.length === 0) {
      favoritesGrid.style.display = 'none';
      if (emptyFavorites) emptyFavorites.style.display = 'block';
    } else {
      favoritesGrid.style.display = 'grid';
      if (emptyFavorites) emptyFavorites.style.display = 'none';
      
      favoritesGrid.innerHTML = this.favorites.map(item => this.createFavoriteItemHTML(item)).join('');
    }

    this.updateFavoriteButtons();
  }

  // Create HTML for a favorite item
  createFavoriteItemHTML(item) {
    const priceHTML = item.originalPrice 
      ? `<span class="current-price">${item.price.toFixed(2)} €</span>
         <span class="original-price">${item.originalPrice.toFixed(2)} €</span>`
      : `<span class="current-price">${item.price.toFixed(2)} €</span>`;

    return `
      <div class="favorite-item" data-product-id="${item.id}">
        <div class="favorite-image">
          <img src="${item.image}" alt="${item.name}">
          <button class="remove-favorite" data-product-id="${item.id}">
            <svg viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="favorite-info">
          <h3 class="favorite-title">${item.name}</h3>
          <div class="favorite-category">${item.category}</div>
          <div class="favorite-price">
            ${priceHTML}
          </div>
          <div class="favorite-actions">
            <a href="producto-detalle.html?id=${item.id}" class="view-product-btn">Ver producto</a>
            <button class="add-to-cart-btn" data-product-id="${item.id}">Añadir al carrito</button>
          </div>
        </div>
      </div>
    `;
  }

  // Add favorite buttons to product cards
  addFavoriteButtonsToProducts() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      if (card.querySelector('.product-favorite-btn')) return; // Already has button
      
      const productLink = card.querySelector('.product-link');
      if (!productLink) return;
      
      const href = productLink.getAttribute('href');
      const productId = this.extractProductIdFromUrl(href);
      
      if (!productId) return;

      const favoriteBtn = document.createElement('button');
      favoriteBtn.className = `product-favorite-btn ${this.isFavorite(productId) ? 'active' : ''}`;
      favoriteBtn.setAttribute('data-product-id', productId);
      favoriteBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
        </svg>
      `;
      
      const productImage = card.querySelector('.product-image');
      if (productImage) {
        productImage.style.position = 'relative';
        productImage.appendChild(favoriteBtn);
      }
    });
  }

  // Update favorite button states
  updateFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.product-favorite-btn');
    
    favoriteButtons.forEach(button => {
      const productId = button.getAttribute('data-product-id');
      if (this.isFavorite(productId)) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  // Extract product ID from URL
  extractProductIdFromUrl(url) {
    if (!url) return null;
    
    const urlParams = new URLSearchParams(url.split('?')[1] || '');
    return urlParams.get('id');
  }

  // Get product data by ID (this should match your existing product data)
  getProductData(productId) {
    // This should reference the same products object from your existing code
    const products = {
      'field-general': {
        id: 'field-general',
        name: 'Nike Field General',
        category: 'Zapatillas - Mujer',
        price: 99.99,
        originalPrice: null,
        colors: [
          {
            name: 'Elemental Pink/Gum Medium Brown/Obsidian',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/12a56561-8431-4a91-8bd9-a2929ba5baad/air-force-1-07-zapatillas-GjGXSP.png',
            colorCode: '#FFB6C1'
          }
        ]
      },
      'air-force-1': {
        id: 'air-force-1',
        name: 'Nike Air Force 1 Low Premium',
        category: 'Zapatillas - Mujer',
        price: 129.99,
        originalPrice: 149.99,
        colors: [
          {
            name: 'Light Bone/Kelly Green/Pink Foam/Light Bone',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/36a7ac0b-dfea-4ce9-b6c9-58b9b13a1522/air-force-1-07-lx-zapatillas-bkTs6J.png',
            colorCode: '#F5F5DC'
          }
        ]
      },
      'shox-r4': {
        id: 'shox-r4',
        name: 'Nike Shox R4',
        category: 'Zapatillas - Mujer',
        price: 149.99,
        originalPrice: null,
        colors: [
          {
            name: 'Black/Black',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7981197-5846-4e06-90e4-ed9f5a467501/shox-r4-zapatillas-qsfXpZ.png',
            colorCode: '#000000'
          }
        ]
      },
      'camisa-mujer': {
        id: 'camisa-mujer',
        name: 'Nike Sudadera con Capucha',
        category: 'Sudadera - Unisex',
        price: 79.99,
        originalPrice: null,
        colors: [
          {
            name: 'Black/White',
            image: './img-mujer/camisa-mujer.png',
            colorCode: '#000000'
          }
        ]
      },
      'nike-t-shirt': {
        id: 'nike-t-shirt',
        name: 'Nike Dri-FIT T-Shirt',
        category: 'Camiseta - Hombre',
        price: 29.99,
        originalPrice: null,
        colors: [
          {
            name: 'White',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/nike-tshirt-white.png',
            colorCode: '#FFFFFF'
          }
        ]
      },
      'cortez': {
        id: 'cortez',
        name: 'Nike Cortez',
        category: 'Zapatillas - Hombre',
        price: 79.99,
        originalPrice: null,
        colors: [
          {
            name: 'White/Varsity Red/Varsity Royal',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-classic.png',
            colorCode: '#FFFFFF'
          }
        ]
      },
      'P6000': {
        id: 'P6000',
        name: 'Nike P6000 SE',
        category: 'Zapatillas - Hombre',
        price: 309.00,
        originalPrice: null,
        colors: [
          {
            name: 'White/Varsity Red/Varsity Royal',
            image: './imagenes/NIKE P6000.png',
            colorCode: '#FFFFFF'
          }
        ]
      },
      'nike-portal': {
        id: 'nike-portal',
        name: 'Nike Air Max Portal',
        category: 'Zapatillas - Mujer',
        price: 93.49,
        originalPrice: 109.99,
        colors: [
          {
            name: 'White/Pink',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/air-max-portal-zapatillas-dkWsJd.png',
            colorCode: '#FFFFFF'
          }
        ]
      },
      'nike-wear': {
        id: 'nike-wear',
        name: 'Nike Sportswear Chill Knit',
        category: 'Leggings - Mujer',
        price: 59.99,
        originalPrice: null,
        colors: [
          {
            name: 'Black',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5cb21e08-c6a3-4a3d-87c1-e8eb7dab9773/sportswear-chill-knit-leggings-acompanados-con-elastico-mini-y-ajuste-cenido-mujer-NmQtc4.png',
            colorCode: '#000000'
          }
        ]
      }
    };

    return products[productId] || null;
  }

  // Bind event listeners
  bindEvents() {
    // Handle favorite button clicks on product cards
    document.addEventListener('click', (e) => {
      if (e.target.closest('.product-favorite-btn')) {
        e.preventDefault();
        e.stopPropagation();
        
        const button = e.target.closest('.product-favorite-btn');
        const productId = button.getAttribute('data-product-id');
        const productData = this.getProductData(productId);
        
        if (productData) {
          const isNowFavorite = this.toggleFavorite(productId, productData);
          button.classList.toggle('active', isNowFavorite);
        }
      }
    });

    // Handle remove from favorites
    document.addEventListener('click', (e) => {
      if (e.target.closest('.remove-favorite')) {
        const button = e.target.closest('.remove-favorite');
        const productId = button.getAttribute('data-product-id');
        const favoriteItem = button.closest('.favorite-item');
        
        if (favoriteItem) {
          favoriteItem.classList.add('removing');
          setTimeout(() => {
            this.removeFromFavorites(productId);
          }, 300);
        }
      }
    });

    // Handle clear all favorites
    const clearAllButton = document.getElementById('clear-all-favorites');
    if (clearAllButton) {
      clearAllButton.addEventListener('click', () => {
        this.clearAllFavorites();
      });
    }

    // Handle add to cart from favorites
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = e.target.getAttribute('data-product-id');
        this.addToCartFromFavorites(productId);
      }
    });
  }

  // Add to cart from favorites (simplified version)
  addToCartFromFavorites(productId) {
    const productData = this.getProductData(productId);
    if (!productData) {
      this.showNotification('Producto no encontrado', 'error');
      return;
    }

    // Redirect to product detail page for size selection
    window.location.href = `producto-detalle.html?id=${productId}`;
  }

  // Show notification
  showNotification(message, type = 'info') {
    let notification = document.querySelector('.favorites-notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.className = 'favorites-notification';
      document.body.appendChild(notification);
    }
    
    notification.className = `favorites-notification ${type}`;
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
}

// Initialize favorites manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.favoritesManager = new FavoritesManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FavoritesManager;
}