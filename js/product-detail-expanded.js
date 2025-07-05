// Product Detail Page JavaScript - Expanded Version with Size Types

document.addEventListener('DOMContentLoaded', function() {
  // ================================
  // MODIFICACIÓN 1: PRODUCTOS EXPANDIDOS CON TIPOS DE TALLA
  // Agregué la propiedad sizeType para diferenciar entre números y letras
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
      sizeType: 'numeric', // Nuevo: tipo de talla
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
      sizeType: 'numeric',
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
      sizeType: 'numeric',
      description: 'Las Nike Shox R4 vuelven con su icónico diseño y tecnología de amortiguación.',
      features: ['Tecnología Shox', 'Amortiguación superior', 'Diseño futurista'],
      inStock: true
    },
    // ================================
    // NUEVOS PRODUCTOS CON TALLAS DE LETRAS
    // ================================
    'nike-hoodie': {
      id: 'nike-hoodie',
      name: 'Nike Sportswear Club Fleece',
      category: 'Sudadera - Unisex',
      price: 79.99,
      originalPrice: null,
      colors: [
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/nike-hoodie-black.png',
          colorCode: '#000000'
        },
        {
          name: 'Grey Heather',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/nike-hoodie-grey.png',
          colorCode: '#808080'
        }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      sizeType: 'letter', // Tallas por letras
      description: 'Sudadera con capucha de felpa suave y cómoda para uso diario.',
      features: ['Felpa suave', 'Capucha ajustable', 'Bolsillo canguro'],
      inStock: true
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
        },
        {
          name: 'Black',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/nike-tshirt-black.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      sizeType: 'letter',
      description: 'Camiseta de entrenamiento con tecnología Dri-FIT.',
      features: ['Tecnología Dri-FIT', 'Transpirable', 'Ajuste cómodo'],
      inStock: true
    },
    'nike-shorts': {
      id: 'nike-shorts',
      name: 'Nike Dri-FIT Shorts',
      category: 'Pantalones cortos - Hombre',
      price: 39.99,
      originalPrice: 49.99,
      colors: [
        {
          name: 'Black',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/nike-shorts-black.png',
          colorCode: '#000000'
        },
        {
          name: 'Navy Blue',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/nike-shorts-navy.png',
          colorCode: '#000080'
        }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      sizeType: 'letter',
      description: 'Pantalones cortos deportivos con tecnología Dri-FIT.',
      features: ['Tecnología Dri-FIT', 'Cintura elástica', 'Bolsillos laterales'],
      inStock: true
    },
    'nike-jacket': {
      id: 'nike-jacket',
      name: 'Nike Windrunner Jacket',
      category: 'Chaqueta - Unisex',
      price: 89.99,
      originalPrice: null,
      colors: [
        {
          name: 'Black/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/nike-jacket-black.png',
          colorCode: '#000000'
        }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      sizeType: 'letter',
      description: 'Chaqueta cortavientos clásica con diseño icónico.',
      features: ['Resistente al viento', 'Capucha ajustable', 'Cremallera completa'],
      inStock: true
    },
    // Productos existentes con tallas numéricas


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
      sizeType: 'numeric',
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
      sizeType: 'numeric',
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
      sizeType: 'numeric',
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
      sizeType: 'numeric',
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
      sizeType: 'numeric',
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
      sizeType: 'numeric',
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
      sizeType: 'numeric',
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
      sizeType: 'numeric',
      description: 'Nike Sportswear Chill Knit es un ícono del running que se convirtió en un clásico del streetwear.',
      features: ['Diseño clásico', 'Cómodo para uso diario', 'Leyenda del running'],
      inStock: true
    },
  };


  // Get current product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'cortez'; // Default to Cortez
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
    // MODIFICACIÓN 4: TALLAS DINÁMICAS CON TIPOS
    // Genera las tallas basadas en el producto y su tipo
    // ================================
    const sizeContainer = document.querySelector('.size-options');
    if (sizeContainer) {
      sizeContainer.innerHTML = '';
      
      // Aplicar clase CSS según el tipo de talla
      sizeContainer.className = `size-options ${currentProduct.sizeType}-sizes`;
      
      currentProduct.sizes.forEach(size => {
        const sizeButton = document.createElement('button');
        sizeButton.className = `size-button ${currentProduct.sizeType}-size`;
        sizeButton.textContent = size;
        
        // Aplicar estilos específicos según el tipo de talla
        if (currentProduct.sizeType === 'letter') {
          sizeButton.style.fontSize = '16px';
          sizeButton.style.fontWeight = '600';
          sizeButton.style.minWidth = '60px';
        } else {
          sizeButton.style.fontSize = '14px';
          sizeButton.style.fontWeight = '500';
          sizeButton.style.minWidth = '50px';
        }
        
        sizeContainer.appendChild(sizeButton);
      });
    }

    // ================================
    // MODIFICACIÓN 5: GUÍA DE TALLAS DINÁMICA
    // Actualizar el texto de la guía de tallas según el tipo
    // ================================
    const sizeGuideLink = document.querySelector('.size-guide');
    if (sizeGuideLink) {
      if (currentProduct.sizeType === 'letter') {
        sizeGuideLink.innerHTML = `
          <svg viewBox="0 0 24 24" width="16px" height="16px" fill="none">
            <path stroke="currentColor" stroke-width="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
            <path stroke="currentColor" stroke-width="1.5" d="M12 12.75v-3.75"></path>
            <path stroke="currentColor" stroke-width="1.5" d="M12 17.25v-.75"></path>
          </svg>
          Guía de tallas de ropa
        `;
      } else {
        sizeGuideLink.innerHTML = `
          <svg viewBox="0 0 24 24" width="16px" height="16px" fill="none">
            <path stroke="currentColor" stroke-width="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
            <path stroke="currentColor" stroke-width="1.5" d="M12 12.75v-3.75"></path>
            <path stroke="currentColor" stroke-width="1.5" d="M12 17.25v-.75"></path>
          </svg>
          Guía de tallas de calzado
        `;
      }
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
          <li>Tipo de talla: ${currentProduct.sizeType === 'letter' ? 'Letras (XS, S, M, L, XL)' : 'Números (35, 36, 37, etc.)'}</li>
        </ul>
        <a href="#" class="product-details-link">Ver detalles de producto</a>
      `;
    }

    // ================================
    // MODIFICACIÓN 6: ESTADO DE DISPONIBILIDAD
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
  // MODIFICACIÓN 7: MANEJO DINÁMICO DE EVENTOS
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

  // ================================
  // MODIFICACIÓN 8: MANEJO DE SELECCIÓN DE TALLAS MEJORADO
  // Manejo específico para diferentes tipos de tallas
  // ================================
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('size-button')) {
      document.querySelectorAll('.size-button').forEach(btn => btn.classList.remove('selected'));
      e.target.classList.add('selected');
      selectedSize = e.target.textContent;
      
      // Mostrar información específica según el tipo de talla
      if (currentProduct.sizeType === 'letter') {
        showNotification(`Talla ${selectedSize} seleccionada`, 'info');
      } else {
        showNotification(`Talla ${selectedSize} seleccionada`, 'info');
      }
    }
  });

  // ================================
  // MODIFICACIÓN 9: GUÍA DE TALLAS INTERACTIVA
  // Mostrar información específica según el tipo de producto
  // ================================
  document.addEventListener('click', function(e) {
    if (e.target.closest('.size-guide')) {
      e.preventDefault();
      showSizeGuide(currentProduct.sizeType);
    }
  });

  function showSizeGuide(sizeType) {
    let guideContent = '';
    
    if (sizeType === 'letter') {
      guideContent = `
        <div class="size-guide-modal">
          <div class="size-guide-content">
            <h3>Guía de Tallas de Ropa</h3>
            <table class="size-table">
              <thead>
                <tr>
                  <th>Talla</th>
                  <th>Pecho (cm)</th>
                  <th>Cintura (cm)</th>
                  <th>Cadera (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>XS</td><td>86-91</td><td>71-76</td><td>91-96</td></tr>
                <tr><td>S</td><td>91-96</td><td>76-81</td><td>96-101</td></tr>
                <tr><td>M</td><td>96-101</td><td>81-86</td><td>101-106</td></tr>
                <tr><td>L</td><td>101-106</td><td>86-91</td><td>106-111</td></tr>
                <tr><td>XL</td><td>106-111</td><td>91-96</td><td>111-116</td></tr>
                <tr><td>XXL</td><td>111-116</td><td>96-101</td><td>116-121</td></tr>
              </tbody>
            </table>
            <div class="size-tips">
              <h4>Consejos para medir:</h4>
              <ul>
                <li>Mide sobre ropa interior o ropa ajustada</li>
                <li>Mantén la cinta métrica horizontal</li>
                <li>No aprietes demasiado la cinta</li>
                <li>Si estás entre dos tallas, elige la mayor para mayor comodidad</li>
              </ul>
            </div>
            <button class="close-guide" onclick="closeSizeGuide()">Cerrar</button>
          </div>
        </div>
      `;
    } else {
      guideContent = `
        <div class="size-guide-modal">
          <div class="size-guide-content">
            <h3>Guía de Tallas de Calzado</h3>
            <table class="size-table">
              <thead>
                <tr>
                  <th>EU</th>
                  <th>US Mujer</th>
                  <th>US Hombre</th>
                  <th>CM</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>35.5</td><td>5</td><td>3.5</td><td>22.5</td></tr>
                <tr><td>36</td><td>5.5</td><td>4</td><td>23</td></tr>
                <tr><td>37</td><td>6</td><td>4.5</td><td>23.5</td></tr>
                <tr><td>38</td><td>6.5</td><td>5</td><td>24</td></tr>
                <tr><td>39</td><td>7</td><td>5.5</td><td>24.5</td></tr>
                <tr><td>40</td><td>7.5</td><td>6</td><td>25</td></tr>
                <tr><td>41</td><td>8</td><td>6.5</td><td>25.5</td></tr>
                <tr><td>42</td><td>8.5</td><td>7</td><td>26</td></tr>
                <tr><td>43</td><td>9</td><td>7.5</td><td>26.5</td></tr>
                <tr><td>44</td><td>9.5</td><td>8</td><td>27</td></tr>
                <tr><td>45</td><td>10</td><td>8.5</td><td>27.5</td></tr>
              </tbody>
            </table>
            <div class="size-tips">
              <h4>Consejos para medir tu pie:</h4>
              <ul>
                <li>Mide tus pies al final del día cuando están más hinchados</li>
                <li>Usa calcetines similares a los que usarás con las zapatillas</li>
                <li>Mide ambos pies y usa la medida del pie más grande</li>
                <li>Si estás entre dos tallas, elige la mayor</li>
                <li>Deja un espacio de 1-1.5 cm entre el dedo más largo y la punta</li>
              </ul>
            </div>
            <button class="close-guide" onclick="closeSizeGuide()">Cerrar</button>
          </div>
        </div>
      `;
    }
    
    // Crear y mostrar el modal
    const modal = document.createElement('div');
    modal.className = 'size-guide-overlay';
    modal.innerHTML = guideContent;
    document.body.appendChild(modal);
    
    // Agregar estilos al modal
    const style = document.createElement('style');
    style.textContent = `
      .size-guide-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
      }
      .size-guide-content {
        background: white;
        padding: 30px;
        border-radius: 12px;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
      }
      .size-guide-content h3 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: bold;
      }
      .size-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      .size-table th,
      .size-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: center;
      }
      .size-table th {
        background-color: #f5f5f5;
        font-weight: bold;
      }
      .size-tips {
        margin-top: 20px;
      }
      .size-tips h4 {
        margin-bottom: 10px;
        font-weight: bold;
      }
      .size-tips ul {
        list-style: disc;
        margin-left: 20px;
      }
      .size-tips li {
        margin-bottom: 5px;
      }
      .close-guide {
        background: #000;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
        margin-top: 20px;
      }
      .close-guide:hover {
        background: #333;
      }
    `;
    document.head.appendChild(style);
  }

  // Función global para cerrar la guía de tallas
  window.closeSizeGuide = function() {
    const modal = document.querySelector('.size-guide-overlay');
    if (modal) {
      modal.remove();
    }
  };

  // ================================
  // MODIFICACIÓN 10: CARRITO MEJORADO
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
        sizeType: currentProductData.sizeType, // Nuevo: incluir tipo de talla
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
  // MODIFICACIÓN 11: CONTADOR DE CARRITO
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
  // MODIFICACIÓN 12: SISTEMA DE NOTIFICACIONES MEJORADO
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
  // MODIFICACIÓN 13: PRODUCTOS RELACIONADOS
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
                <p class="size-type">${product.sizeType === 'letter' ? 'Tallas: XS-XXL' : 'Tallas: 35-45'}</p>
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
  // MODIFICACIÓN 14: FUNCIONES DE UTILIDAD PARA EL CARRITO
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

  // ================================
  // MODIFICACIÓN 15: DEMO DE PRODUCTOS
  // Agregar botones para cambiar entre productos y ver diferentes tipos de tallas
  // ================================
  function createProductDemo() {
    const demoContainer = document.createElement('div');
    demoContainer.className = 'product-demo';
    demoContainer.style.cssText = `
      position: fixed;
      top: 20px;
      left: 20px;
      background: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      max-width: 300px;
    `;
    
    demoContainer.innerHTML = `
      <h4 style="margin-bottom: 10px; font-size: 14px; font-weight: bold;">Demo - Cambiar Producto:</h4>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button onclick="window.location.href='?id=nike-hoodie'" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 12px;">
          Sudadera (Tallas: XS, S, M, L, XL)
        </button>
        <button onclick="window.location.href='?id=nike-t-shirt'" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 12px;">
          Camiseta (Tallas: S, M, L, XL, XXL)
        </button>
        <button onclick="window.location.href='?id=air-force-1'" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 12px;">
          Zapatillas (Tallas: 35.5, 36, 37...)
        </button>
        <button onclick="window.location.href='?id=cortez'" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 12px;">
          Nike Cortez (Tallas: 39, 40, 41...)
        </button>
      </div>
      <button onclick="this.parentElement.remove()" style="position: absolute; top: 5px; right: 8px; background: none; border: none; font-size: 16px; cursor: pointer;">×</button>
    `;
    
    document.body.appendChild(demoContainer);
  }

  // Crear demo solo si estamos en modo desarrollo
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    createProductDemo();
  }
});