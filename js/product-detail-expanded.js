// Product Detail Page JavaScript - Expanded Version

document.addEventListener('DOMContentLoaded', function() {
  // ================================
  // MODIFICACIÓN 1: PRODUCTOS EXPANDIDOS
  // Aquí agregué más productos con diferentes categorías y precios
  // ================================
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
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42'],
      description: 'Las Nike Field General ofrecen un diseño versátil y cómodo para tu día a día.',
      features: ['Transpirable', 'Suela de goma', 'Diseño clásico'],
      inStock: true
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
        },
        {
          name: 'White/Black',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f4e6c1c9-5f8a-4c3a-8f1a-2b3c4d5e6f7g/air-force-1-white-black.png',
          colorCode: '#FFFFFF'
        }
      ],
      sizes: ['35.5', '36', '37', '38', '39', '40', '41', '42', '43'],
      description: 'Las Nike Air Force 1 Low elevan su leyenda con un toque de brillo.',
      features: ['Air Sole', 'Cuero premium', 'Icónico desde 1982'],
      inStock: true
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
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42'],
      description: 'Las Nike Shox R4 vuelven con su icónico diseño y tecnología de amortiguación.',
      features: ['Tecnología Shox', 'Amortiguación superior', 'Diseño futurista'],
      inStock: true
    },
    // ================================
    // NUEVOS PRODUCTOS AGREGADOS
    // ================================
    'air-max-plus': {
      id: 'air-max-plus',
      name: 'Nike Air Max Plus',
      category: 'Zapatillas - Hombre',
      price: 199.99,
      originalPrice: null,
      colors: [
        {
          name: 'White/Black/Cool Grey',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/air-max-90-white-black.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/air-max-90-black-white.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
      description: 'El Nike Air Max plus mantiene el alma rebelde del original con detalles premium.',
      features: ['Air Max visible', 'Amortiguación Air', 'Diseño icónico de los 90'],
      inStock: true
    },
    'dunk-low': {
      id: 'dunk-low',
      name: 'Nike Dunk Low',
      category: 'Zapatillas - Unisex',
      price: 109.99,
      originalPrice: null,
      colors: [
        {
          name: 'University Blue/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dunk-low-university-blue.png',
          colorCode: '#1E90FF'
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dunk-low-black-white.png',
          colorCode: '#000000'
        },
        {
          name: 'Pink/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dunk-low-pink-white.png',
          colorCode: '#FFB6C1'
        }
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
      description: 'Creado para la cancha pero adoptado por las calles, el Nike Dunk Low retorna.',
      features: ['Cuero premium', 'Suela de goma', 'Estilo retro basketball'],
      inStock: true
    },
    'react-infinity': {
      id: 'react-infinity',
      name: 'Nike React Infinity Run',
      category: 'Zapatillas Running - Unisex',
      price: 159.99,
      originalPrice: 179.99,
      colors: [
        {
          name: 'Black/White/Dark Grey',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/react-infinity-black.png',
          colorCode: '#000000'
        },
        {
          name: 'White/Racer Blue',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/react-infinity-white-blue.png',
          colorCode: '#FFFFFF'
        }
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
      description: 'Diseñadas para ayudarte a correr más kilómetros con menos lesiones.',
      features: ['Nike React', 'Flyknit superior', 'Diseñado para running'],
      inStock: true
    },
    'blazer-mid': {
      id: 'blazer-mid',
      name: 'Nike Blazer Mid 77',
      category: 'Zapatillas - Mujer',
      price: 99.99,
      originalPrice: 119.99,
      colors: [
        {
          name: 'White/Black',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/blazer-mid-white-black.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Vintage Green/Sail',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/blazer-mid-green.png',
          colorCode: '#228B22'
        }
      ],
      sizes: ['35.5', '36', '37', '38', '39', '40', '41', '42'],
      description: 'Un clásico del basketball que celebra su herencia vintage con un toque moderno.',
      features: ['Estilo vintage', 'Suela de goma', 'Diseño mid-top'],
      inStock: false
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
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-black.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      description: 'El Nike Cortez es un ícono del running que se convirtió en un clásico del streetwear.',
      features: ['Diseño clásico', 'Cómodo para uso diario', 'Leyenda del running'],
      inStock: true
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
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-classic.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-black.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      description: 'El Nike Cortez es un ícono del running que se convirtió en un clásico del streetwear.',
      features: ['Diseño clásico', 'Cómodo para uso diario', 'Leyenda del running'],
      inStock: true
    },
    'nike-shox-tl': {
      id: 'nike-shox-tl',
      name: 'Nike Shox TL',
      category: 'Zapatillas - Hombre',
      price: 189.99,
      originalPrice: null,
      colors: [
        {
          name: 'White/Varsity Red/Varsity Royal',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-classic.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-black.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      description: 'El Nike Shox TL es un ícono del running que se convirtió en un clásico del streetwear.',
      features: ['Diseño clásico', 'Cómodo para uso diario', 'Leyenda del running'],
      inStock: true
    },
    'pegasus41': {
      id: 'pegasus41',
      name: 'Nike Pegasus 41',
      category: 'Zapatillas - Hombre',
      price: 129.99,
      originalPrice: null,
      colors: [
        {
          name: 'White/Varsity Red/Varsity Royal',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-classic.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-black.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      description: 'Nike Pegasus 41 es un ícono del running que se convirtió en un clásico del streetwear.',
      features: ['Diseño clásico', 'Cómodo para uso diario', 'Leyenda del running'],
      inStock: true
    },
    'nike-mercurial': {
      id: 'nike-mercurial',
      name: 'Nike Mercurial Vapor XI Elite y Air Max 95 SE',
      category: 'Zapatillas - Hombre',
      price: 134.97,
      originalPrice: 179.97,
      colors: [
        {
          name: 'White/Varsity Red/Varsity Royal',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-classic.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-black.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      description: 'Nike Mercurial Vapor XI Elite y Air Max 95 SE es un ícono del running que se convirtió en un clásico del streetwear.',
      features: ['Diseño clásico', 'Cómodo para uso diario', 'Leyenda del running'],
      inStock: true
    },
    'nike-portal': {
      id: 'nike-portal',
      name: 'Nike Air Max Portal',
      category: 'Zapatillas - Hombre',
      price: 93.49,
      originalPrice: 109.99,
      colors: [
        {
          name: 'White/Varsity Red/Varsity Royal',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-classic.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-black.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      description: 'Nike Air Max Portal es un ícono del running que se convirtió en un clásico del streetwear.',
      features: ['Diseño clásico', 'Cómodo para uso diario', 'Leyenda del running'],
      inStock: true
    },
    'nike-wear': {
      id: 'nike-wear',
      name: 'Nike Sportswear Chill Knit',
      category: 'Zapatillas - Hombre',
      price: 59.99,
      originalPrice: null,
      colors: [
        {
          name: 'White/Varsity Red/Varsity Royal',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-classic.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-black.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      description: 'Nike Sportswear Chill Knit es un ícono del running que se convirtió en un clásico del streetwear.',
      features: ['Diseño clásico', 'Cómodo para uso diario', 'Leyenda del running'],
      inStock: true
    },
     'camisa-mujer': {
      id: 'camisa-mujer',
      name: 'Camisa Deportiva',
      category: 'Camisa - Mujer',
      price: 59.99,
      originalPrice: null,
      colors: [
        {
          name: 'White/Varsity Red/Varsity Royal',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-classic.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-black.png',
          colorCode: '#000000'
        }
      ],
      sizes2: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'Nike Sportswear Chill Knit es un ícono del running que se convirtió en un clásico del streetwear.',
      features: ['Diseño clásico', 'Cómodo para uso diario', 'Leyenda del running'],
      inStock: true
    },
  };






  

  // Get current product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'cortez  '; // Default to Air Force 1
  const currentProduct = products[productId];

  // ================================
  // MODIFICACIÓN 2: ACTUALIZACIÓN DINÁMICA DEL CONTENIDO
  // Mejoré la función para mostrar más información del producto
  // ================================
  if (currentProduct) {
    // Actualizar información básica
    document.querySelector('.product-title').textContent = currentProduct.name;
    document.querySelector('.product-category').textContent = currentProduct.category;
    
    // Actualizar precios con descuentos
    const priceElement = document.querySelector('.product-price');
    if (currentProduct.originalPrice) {
      priceElement.innerHTML = `
        <span class="current-price">${currentProduct.price.toFixed(2)} €</span>
        <span class="original-price" style="text-decoration: line-through; color: #999; margin-left: 8px;">${currentProduct.originalPrice.toFixed(2)} €</span>
      `;
    } else {
      priceElement.textContent = `${currentProduct.price.toFixed(2)} €`;
    }
    
    // Actualizar imagen principal
    document.querySelector('#main-product-image').src = currentProduct.colors[0].image;
    
    // ================================
    // MODIFICACIÓN 3: OPCIONES DE COLOR DINÁMICAS
    // Genera las opciones de color automáticamente
    // ================================
    const colorContainer = document.querySelector('.color-options');
    if (colorContainer && currentProduct.colors.length > 1) {
      colorContainer.innerHTML = '';
      currentProduct.colors.forEach((color, index) => {
        const colorOption = document.createElement('div');
        colorOption.className = `color-option ${index === 0 ? 'active' : ''}`;
        colorOption.setAttribute('data-color-name', color.name);
        colorOption.innerHTML = `
          <div class="color-circle" style="background-color: ${color.colorCode}; width: 24px; height: 24px; border-radius: 50%; border: 2px solid #ccc;"></div>
          <img src="${color.image}" alt="${color.name}" style="display: none;">
        `;
        colorContainer.appendChild(colorOption);
      });
    }

    // ================================
    // MODIFICACIÓN 4: TALLAS DINÁMICAS
    // Genera las tallas basadas en el producto
    // ================================
    const sizeContainer = document.querySelector('.size-options');
    if (sizeContainer) {
      sizeContainer.innerHTML = '';
      currentProduct.sizes.forEach(size => {
        const sizeButton = document.createElement('button');
        sizeButton.className = 'size-button';
        sizeButton.textContent = size;
        sizeContainer.appendChild(sizeButton);
      });
    }


const sizeContainer2 = document.querySelector('.size-options');
    if (sizeContainer2) {
      sizeContainer2.innerHTML = '';
      currentProduct.sizes2.forEach(size => {
        const sizeButton2 = document.createElement('button');
        sizeButton2.className = 'size-button';
        sizeButton2.textContent = size;
        sizeContainer2.appendChild(sizeButton2);
      });
    }




    // Actualizar descripción con características
    if (document.querySelector('.product-description')) {
      document.querySelector('.product-description').innerHTML = `
        <p>${currentProduct.description}</p>
        <div class="product-features" style="margin-top: 16px;">
          <h4 style="margin-bottom: 8px;">Características:</h4>
          <ul class="features-list" style="list-style: disc; margin-left: 20px;">
            ${currentProduct.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        <ul class="description-list" style="margin-top: 16px;">
          <li>Color mostrado: ${currentProduct.colors[0].name}</li>
          <li>Modelo: ${currentProduct.id.toUpperCase()}</li>
          <li>Disponibilidad: ${currentProduct.inStock ? 'En stock' : 'Agotado'}</li>
        </ul>
        <a href="#" class="product-details-link">Ver detalles de producto</a>
      `;
    }

    // ================================
    // MODIFICACIÓN 5: ESTADO DE DISPONIBILIDAD
    // Deshabilitar botón si no hay stock
    // ================================
    const addToCartButton = document.querySelector('.add-to-cart-button');
    if (addToCartButton && !currentProduct.inStock) {
      addToCartButton.textContent = 'Agotado';
      addToCartButton.disabled = true;
      addToCartButton.style.backgroundColor = '#ccc';
      addToCartButton.style.cursor = 'not-allowed';
    }
  }

  // DOM Elements (actualizados para elementos dinámicos)
  const mainImage = document.getElementById('main-product-image');
  let selectedSize = null;
  let selectedColor = currentProduct?.colors[0] || null;
  let currentProductData = currentProduct;

  // ================================
  // MODIFICACIÓN 6: MANEJO DINÁMICO DE EVENTOS
  // Los event listeners ahora se aplican a elementos generados dinámicamente
  // ================================
  
  // Handle Thumbnail Click (delegación de eventos)
  document.addEventListener('click', function(e) {
    if (e.target.closest('.thumbnail')) {
      const thumbnail = e.target.closest('.thumbnail');
      const imgSrc = thumbnail.querySelector('img').src;
      mainImage.src = imgSrc;
      
      document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
      thumbnail.classList.add('active');
      
      currentProductData.image = imgSrc;
    }
  });

  // Handle Color Selection (delegación de eventos)
  document.addEventListener('click', function(e) {
    if (e.target.closest('.color-option')) {
      const colorOption = e.target.closest('.color-option');
      document.querySelectorAll('.color-option').forEach(option => option.classList.remove('active'));
      colorOption.classList.add('active');
      
      const newImage = colorOption.querySelector('img').src;
      mainImage.src = newImage;
      currentProductData.image = newImage;
      selectedColor = currentProduct.colors.find(color => color.name === colorOption.getAttribute('data-color-name'));
      currentProductData.color = selectedColor.name;
    }
  });

  // Handle Size Selection (delegación de eventos)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('size-button')) {
      document.querySelectorAll('.size-button').forEach(btn => btn.classList.remove('selected'));
      e.target.classList.add('selected');
      selectedSize = e.target.textContent;
    }
  });

  // ================================
  // MODIFICACIÓN 7: CARRITO MEJORADO
  // Sistema de carrito más robusto con validaciones
  // ================================
  
  // Handle Add to Cart
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-button') && !e.target.disabled) {
      if (!selectedSize) {
        showNotification('Por favor, selecciona una talla', 'warning');
        return;
      }

      if (!currentProduct.inStock) {
        showNotification('Producto agotado', 'error');
        return;
      }

      const productToAdd = {
        id: currentProductData.id,
        name: currentProductData.name,
        price: currentProductData.price,
        size: selectedSize,
        color: selectedColor ? selectedColor.name : currentProduct.colors[0].name,
        image: selectedColor ? selectedColor.image : currentProduct.colors[0].image,
        quantity: 1,
        category: currentProductData.category,
        addedAt: new Date().toISOString()
      };

      // Get existing cart
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Check if product already exists in cart
      const existingItemIndex = cart.findIndex(item => 
        item.id === productToAdd.id && 
        item.size === productToAdd.size && 
        item.color === productToAdd.color
      );

      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
        showNotification(`Cantidad actualizada en el carrito (${cart[existingItemIndex].quantity})`, 'success');
      } else {
        cart.push(productToAdd);
        showNotification('Producto añadido al carrito', 'success');
      }

      // Save updated cart
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Update cart counter if exists
      updateCartCounter();
      
      // Optional: Redirect to cart page after delay
      setTimeout(() => {
        if (confirm('¿Quieres ir al carrito para finalizar tu compra?')) {
          window.location.href = 'carrito.html';
        }
      }, 1500);
    }
  });

  // ================================
  // MODIFICACIÓN 8: CONTADOR DE CARRITO
  // Función para actualizar el contador del carrito
  // ================================
  function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCounter = document.querySelector('.cart-counter');
    if (cartCounter) {
      cartCounter.textContent = totalItems;
      cartCounter.style.display = totalItems > 0 ? 'block' : 'none';
    }
  }

  // Handle Favorite Button
  document.addEventListener('click', function(e) {
    if (e.target.closest('.favorite-button')) {
      const favoriteButton = e.target.closest('.favorite-button');
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const productId = currentProduct.id;
      
      const isCurrentlyFavorite = favorites.includes(productId);
      const favoriteIcon = favoriteButton.querySelector('.favorite-icon');
      
      if (!isCurrentlyFavorite) {
        favorites.push(productId);
        favoriteIcon.innerHTML = `
          <path fill="currentColor" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
        `;
        favoriteIcon.style.color = '#e91e63';
        showNotification('Añadido a favoritos', 'success');
      } else {
        favorites = favorites.filter(id => id !== productId);
        favoriteIcon.innerHTML = `
          <path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
        `;
        favoriteIcon.style.color = 'currentColor';
        showNotification('Eliminado de favoritos', 'info');
      }
      
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  });

  // ================================
  // MODIFICACIÓN 9: SISTEMA DE NOTIFICACIONES MEJORADO
  // Notificaciones con diferentes tipos y estilos
  // ================================
  function showNotification(message, type = 'info') {
    let notification = document.querySelector('.product-notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.className = 'product-notification';
      document.body.appendChild(notification);
      
      // Estilos base
      Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '8px',
        zIndex: '1000',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'all 0.3s ease',
        fontWeight: '500',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        maxWidth: '300px',
        wordWrap: 'break-word'
      });
    }
    
    // Colores según el tipo
    const typeStyles = {
      success: { backgroundColor: '#10b981', color: 'white' },
      error: { backgroundColor: '#ef4444', color: 'white' },
      warning: { backgroundColor: '#f59e0b', color: 'white' },
      info: { backgroundColor: '#3b82f6', color: 'white' }
    };
    
    Object.assign(notification.style, typeStyles[type] || typeStyles.info);
    
    notification.textContent = message;
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(20px)';
    }, 3000);
  }

  // ================================
  // MODIFICACIÓN 10: PRODUCTOS RELACIONADOS
  // Función para mostrar productos relacionados
  // ================================
  function showRelatedProducts() {
    const relatedContainer = document.querySelector('.related-products');
    if (!relatedContainer) return;

    const currentCategory = currentProduct.category;
    const relatedProducts = Object.values(products)
      .filter(product => product.id !== currentProduct.id && product.category === currentCategory)
      .slice(0, 4);

    if (relatedProducts.length > 0) {
      relatedContainer.innerHTML = `
        <h3>Productos relacionados</h3>
        <div class="related-products-grid">
          ${relatedProducts.map(product => `
            <div class="related-product-card">
              <a href="?id=${product.id}">
                <img src="${product.colors[0].image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p class="price">${product.price.toFixed(2)} €</p>
              </a>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  // Toggle product information sections
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('toggle-button')) {
      const infoContent = e.target.closest('.info-header').nextElementSibling;
      
      e.target.classList.toggle('open');
      infoContent.classList.toggle('open');
      
      if (infoContent.classList.contains('open')) {
        infoContent.style.display = 'block';
      } else {
        infoContent.style.display = 'none';
      }
    }
  });

  // Inicializar contador del carrito y productos relacionados
  updateCartCounter();
  showRelatedProducts();

  // ================================
  // MODIFICACIÓN 11: FUNCIONES DE UTILIDAD PARA EL CARRITO
  // Funciones adicionales que puedes usar en otras páginas
  // ================================
  
  // Función global para obtener el carrito
  window.getCart = function() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  };

  // Función global para limpiar el carrito
  window.clearCart = function() {
    localStorage.removeItem('cart');
    updateCartCounter();
  };

  // Función global para obtener el total del carrito
  window.getCartTotal = function() {
    const cart = window.getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Función global para obtener favoritos
  window.getFavorites = function() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  };
});