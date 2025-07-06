// Product Detail Page JavaScript - Expanded Version with Size Types

document.addEventListener('DOMContentLoaded', function() {
  // ================================
  // MODIFICACIÓN 1: PRODUCTOS EXPANDIDOS CON TIPOS DE TALLA E IMÁGENES
  // Agregué múltiples imágenes para cada producto y la propiedad sizeType
  // ================================
  const products = {
    // PRODUCTOS EXISTENTES (mantenidos)
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
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/12a56561-8431-4a91-8bd9-a2929ba5baad/air-force-1-07-zapatillas-GjGXSP.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/12a56561-8431-4a91-8bd9-a2929ba5baad/air-force-1-07-zapatillas-GjGXSP.png'
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42'],
      sizeType: 'numeric',
      description: 'Las Nike Field General ofrecen un diseño versátil y cómodo para tu día a día.',
      features: ['Transpirable', 'Suela de goma', 'Diseño clásico'],
      inStock: true
    },
    'air-force-1': {
      id: 'air-force-1',
      name: 'Nike Air Force 1 \'07 LX',
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
      images: [
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/36a7ac0b-dfea-4ce9-b6c9-58b9b13a1522/air-force-1-07-lx-zapatillas-bkTs6J.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/66963512-d550-4b46-bd28-169be08c019c/air-force-1-07-lx-zapatillas-bkTs6J.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0a906a91-8dc1-4b1a-9d95-af30e8e33698/air-force-1-07-lx-zapatillas-bkTs6J.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ede6b3e5-c1c1-463c-a0b7-12be8c81f21f/air-force-1-07-lx-zapatillas-bkTs6J.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a6e32302-4e48-4e85-b1a1-afb35ecfd2a9/air-force-1-07-lx-zapatillas-bkTs6J.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/87c53040-3f54-493a-9d67-34f81d6d797c/air-force-1-07-lx-zapatillas-bkTs6J.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e3cc8d6e-1da8-4cbf-8a15-0e92c9baa621/air-force-1-07-lx-zapatillas-bkTs6J.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5c0d93ba-bcd5-4c78-bf51-9b51b1f43c1e/air-force-1-07-lx-zapatillas-bkTs6J.png'
      ],
      sizes: ['35.5', '36', '37', '38', '39', '40', '41', '42', '43'],
      sizeType: 'numeric',
      description: 'Las Nike Air Force 1 \'07 LX elevan su leyenda con un toque de brillo.',
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
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7981197-5846-4e06-90e4-ed9f5a467501/shox-r4-zapatillas-qsfXpZ.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f7981197-5846-4e06-90e4-ed9f5a467501/shox-r4-zapatillas-qsfXpZ.png'
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42'],
      sizeType: 'numeric',
      description: 'Las Nike Shox R4 vuelven con su icónico diseño y tecnología de amortiguación.',
      features: ['Tecnología Shox', 'Amortiguación superior', 'Diseño futurista'],
      inStock: true
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
        },
        {
          name: 'Grey Heather',
          image: './img-mujer/camisa-mujer-blackwhite.png',
          colorCode: '#808080'
        }
      ],
      images: [
        './img-mujer/camisa-mujer-blackwhite.png',
        './img-mujer/camisa-mujer.png'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      sizeType: 'letter',
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
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/nike-tshirt-white.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/nike-tshirt-black.png'
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      sizeType: 'letter',
      description: 'Camiseta de entrenamiento con tecnología Dri-FIT.',
      features: ['Tecnología Dri-FIT', 'Transpirable', 'Ajuste cómodo'],
      inStock: true
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
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-classic.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cortez-black.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cortez-side-view.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cortez-back-view.png'
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
          image: './imagenes/NIKE P6000.png',
          colorCode: '#FFFFFF'
        }
      ],
      images: [
        './imagenes/NIKE P6000.png'
      ],
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      sizeType: 'numeric',
      description: 'El Nike P6000 SE combina estilo retro con comodidad moderna.',
      features: ['Diseño retro', 'Amortiguación cómoda', 'Estilo urbano'],
      inStock: true
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
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/air-max-portal-zapatillas-dkWsJd.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/air-max-portal-zapatillas-dkWsJd.png'
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42'],
      sizeType: 'numeric',
      description: 'Nike Air Max Portal es perfecto para el uso diario con estilo.',
      features: ['Air Max visible', 'Comodidad todo el día', 'Diseño moderno'],
      inStock: true
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
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5cb21e08-c6a3-4a3d-87c1-e8eb7dab9773/sportswear-chill-knit-leggings-acompanados-con-elastico-mini-y-ajuste-cenido-mujer-NmQtc4.png'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      sizeType: 'letter',
      description: 'Leggings Nike Sportswear Chill Knit con ajuste ceñido y comodidad superior.',
      features: ['Tejido suave', 'Ajuste ceñido', 'Cintura elástica'],
      inStock: true
    },

    // ================================
    // PRODUCTOS NUEVOS AGREGADOS
    // ================================
    'free-metcon-6': {
      id: 'free-metcon-6',
      name: 'Nike Free Metcon 6',
      category: 'Zapatillas - Entrenamiento',
      price: 119.99,
      originalPrice: null,
      colors: [
        {
          name: 'Black/White/Volt',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/free-metcon-6-black.png',
          colorCode: '#000000'
        },
        {
          name: 'White/Black',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/free-metcon-6-white.png',
          colorCode: '#FFFFFF'
        }
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/free-metcon-6-black.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/free-metcon-6-side.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/free-metcon-6-back.png'
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42', '43'],
      sizeType: 'numeric',
      description: 'Nike Free Metcon 6 combina la flexibilidad del Free con la estabilidad del Metcon.',
      features: ['Flexibilidad Free', 'Estabilidad Metcon', 'Versatilidad de entrenamiento'],
      inStock: true
    },
    'pegasus-41': {
      id: 'pegasus-41',
      name: 'Nike Pegasus 41',
      category: 'Zapatillas - Running',
      price: 139.99,
      originalPrice: null,
      colors: [
        {
          name: 'Midnight Navy/White',
          image: './imagenes/nike pegasusu.png',
          colorCode: '#191970'
        },
        {
          name: 'Wolf Grey/Black',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/pegasus-41-grey.png',
          colorCode: '#808080'
        }
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/pegasus-41-navy.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/pegasus-41-side.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/pegasus-41-back.png'
      ],
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      sizeType: 'numeric',
      description: 'Nike Pegasus 41 ofrece una pisada suave y con capacidad de respuesta.',
      features: ['Air Zoom', 'Amortiguación reactiva', 'Diseño renovado'],
      inStock: true
    },
    'zoom-vomero-roam': {
      id: 'zoom-vomero-roam',
      name: 'Nike Zoom Vomero Roam',
      category: 'Zapatillas - Running',
      price: 159.99,
      originalPrice: null,
      colors: [
        {
          name: 'Light Bone/Coconut Milk',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vomero-roam-bone.png',
          colorCode: '#F5F5DC'
        },
        {
          name: 'Black/Anthracite',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vomero-roam-black.png',
          colorCode: '#000000'
        }
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vomero-roam-bone.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/vomero-roam-side.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/vomero-roam-back.png'
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42', '43'],
      sizeType: 'numeric',
      description: 'Nike Zoom Vomero Roam combina máxima amortiguación con diseño outdoor.',
      features: ['Zoom Air', 'Amortiguación máxima', 'Diseño outdoor'],
      inStock: true
    },
    'v2k-run': {
      id: 'v2k-run',
      name: 'Nike V2K Run',
      category: 'Zapatillas - Lifestyle',
      price: 99.99,
      originalPrice: null,
      colors: [
        {
          name: 'White/Metallic Silver',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/v2k-run-white.png',
          colorCode: '#FFFFFF'
        },
        {
          name: 'Phantom/Light Bone',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/v2k-run-phantom.png',
          colorCode: '#F5F5DC'
        }
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/v2k-run-white.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/v2k-run-side.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/v2k-run-back.png'
      ],
      sizes: ['36', '37', '38', '39', '40', '41', '42', '43'],
      sizeType: 'numeric',
      description: 'Nike V2K Run trae de vuelta el estilo Y2K con un toque moderno.',
      features: ['Estilo Y2K', 'Diseño retro-futurista', 'Comodidad moderna'],
      inStock: true
    },
    'air-max-plus': {
      id: 'air-max-plus',
      name: 'Nike Air Max Plus',
      category: 'Zapatillas - Lifestyle',
      price: 179.99,
      originalPrice: null,
      colors: [
        {
          name: 'Black/White',
          image: './imagenes/nike aire.png',
          colorCode: '#000000'
        },
        {
          name: 'White/University Red',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/air-max-plus-white-red.png',
          colorCode: '#FFFFFF'
        }
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/air-max-plus-black.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-max-plus-side.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-max-plus-back.png'
      ],
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      sizeType: 'numeric',
      description: 'Nike Air Max Plus ofrece amortiguación Air Max con diseño icónico.',
      features: ['Air Max visible', 'Diseño icónico', 'Amortiguación superior'],
      inStock: true
    },
    'shox-tl': {
      id: 'shox-tl',
      name: 'Nike Shox TL',
      category: 'Zapatillas - Lifestyle',
      price: 169.99,
      originalPrice: null,
      colors: [
        {
          name: 'Metallic Silver/Black',
          image: './imagenes/NIKE SHOX.png',
          colorCode: '#C0C0C0'
        },
        {
          name: 'Triple Black',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/shox-tl-black.png',
          colorCode: '#000000'
        }
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/shox-tl-silver.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/shox-tl-side.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/shox-tl-back.png'
      ],
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      sizeType: 'numeric',
      description: 'Nike Shox TL combina tecnología Shox con diseño futurista.',
      features: ['Tecnología Shox', 'Diseño futurista', 'Amortiguación reactiva'],
      inStock: true
    },
    'mercurial-vapor-xi': {
      id: 'mercurial-vapor-xi',
      name: 'Nike Mercurial Vapor XI Elite',
      category: 'Zapatillas - Fútbol',
      price: 199.99,
      originalPrice: null,
      colors: [
        {
          name: 'Electric Green/Black',
          image: './imagenes/nike mercury.png',
          colorCode: '#00FF00'
        },
        {
          name: 'White/Metallic Silver',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/mercurial-vapor-xi-white.png',
          colorCode: '#FFFFFF'
        }
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/mercurial-vapor-xi-green.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/mercurial-vapor-xi-side.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/mercurial-vapor-xi-back.png'
      ],
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      sizeType: 'numeric',
      description: 'Nike Mercurial Vapor XI Elite para velocidad y control en el campo.',
      features: ['Diseño aerodinámico', 'Velocidad extrema', 'Control preciso'],
      inStock: true
    },
    'air-max-95-se': {
      id: 'air-max-95-se',
      name: 'Air Max 95 SE',
      category: 'Zapatillas - Lifestyle',
      price: 189.99,
      originalPrice: null,
      colors: [
        {
          name: 'Neon Yellow/Black',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/air-max-95-se-neon.png',
          colorCode: '#FFFF00'
        },
        {
          name: 'Wolf Grey/White',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/air-max-95-se-grey.png',
          colorCode: '#808080'
        }
      ],
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/air-max-95-se-neon.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-max-95-se-side.png',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-max-95-se-back.png'
      ],
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      sizeType: 'numeric',
      description: 'Air Max 95 SE mantiene el diseño icónico con detalles especiales.',
      features: ['Air Max visible', 'Diseño icónico', 'Edición especial'],
      inStock: true
    }
  };

  // Get current product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'air-force-1'; // Default to Air Force 1
  const currentProduct = products[productId];

  // ================================
  // MODIFICACIÓN 2: GENERACIÓN DINÁMICA DE IMÁGENES
  // Función para generar las miniaturas dinámicamente
  // ================================
  function generateProductThumbnails() {
    const thumbnailContainer = document.querySelector('.product-thumbnails');
    if (!thumbnailContainer || !currentProduct || !currentProduct.images) return;

    thumbnailContainer.innerHTML = '';
    
    currentProduct.images.forEach((imageUrl, index) => {
      const thumbnail = document.createElement('div');
      thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
      thumbnail.innerHTML = `
        <img src="${imageUrl}" alt="Vista ${index + 1}" class="thumbnail-image">
      `;
      thumbnailContainer.appendChild(thumbnail);
    });
  }

  // ================================
  // MODIFICACIÓN 3: ACTUALIZACIÓN DINÁMICA DEL CONTENIDO
  // Mejoré la función para mostrar más información del producto
  // ================================
  if (currentProduct) {
    // Generar miniaturas dinámicamente
    generateProductThumbnails();
    
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
    // MODIFICACIÓN 4: OPCIONES DE COLOR DINÁMICAS
    // Genera las opciones de color automáticamente
    // ================================
    const colorContainer = document.querySelector('.product-colors');
    if (colorContainer) {
      colorContainer.innerHTML = '';
      if (currentProduct.colors.length > 1) {
        currentProduct.colors.forEach((color, index) => {
          const colorOption = document.createElement('div');
          colorOption.className = `color-option ${index === 0 ? 'active' : ''}`;
          colorOption.setAttribute('data-color-name', color.name);
          colorOption.innerHTML = `
            <img src="${color.image}" alt="${color.name}" class="color-thumbnail">
          `;
          colorContainer.appendChild(colorOption);
        });
      } else {
        // Si solo hay un color, mostrar una opción
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option active';
        colorOption.setAttribute('data-color-name', currentProduct.colors[0].name);
        colorOption.innerHTML = `
          <img src="${currentProduct.colors[0].image}" alt="${currentProduct.colors[0].name}" class="color-thumbnail">
        `;
        colorContainer.appendChild(colorOption);
      }
    }

    // ================================
    // MODIFICACIÓN 5: TALLAS DINÁMICAS CON TIPOS
    // Genera las tallas basadas en el producto y su tipo
    // ================================
    const sizeContainer = document.querySelector('.size-options');
    if (sizeContainer) {
      sizeContainer.innerHTML = '';
      
      // Aplicar clase CSS según el tipo de talla
      sizeContainer.className = `size-options ${currentProduct.sizeType || 'numeric'}-sizes`;
      
      currentProduct.sizes.forEach(size => {
        const sizeButton = document.createElement('button');
        sizeButton.className = `size-button ${currentProduct.sizeType || 'numeric'}-size`;
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
    // MODIFICACIÓN 6: GUÍA DE TALLAS DINÁMICA
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
    // MODIFICACIÓN 7: ESTADO DE DISPONIBILIDAD
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
  // MODIFICACIÓN 8: MANEJO DINÁMICO DE EVENTOS
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
      
      if (currentProductData) {
        currentProductData.image = imgSrc;
      }
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
      if (currentProductData) {
        currentProductData.image = newImage;
      }
      selectedColor = currentProduct.colors.find(color => color.name === colorOption.getAttribute('data-color-name'));
      if (currentProductData && selectedColor) {
        currentProductData.color = selectedColor.name;
      }
    }
  });

  // ================================
  // MODIFICACIÓN 9: NAVEGACIÓN DE IMÁGENES CON CONTROLES
  // Agregar funcionalidad a los botones de navegación
  // ================================
  let currentImageIndex = 0;

  function updateMainImage(index) {
    if (currentProduct && currentProduct.images && currentProduct.images[index]) {
      mainImage.src = currentProduct.images[index];
      
      // Actualizar thumbnail activo
      document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
      });
      
      currentImageIndex = index;
    }
  }

  // Botón anterior
  document.addEventListener('click', function(e) {
    if (e.target.closest('.control-button.prev')) {
      e.preventDefault();
      if (currentProduct && currentProduct.images) {
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentProduct.images.length - 1;
        updateMainImage(currentImageIndex);
      }
    }
  });

  // Botón siguiente
  document.addEventListener('click', function(e) {
    if (e.target.closest('.control-button.next')) {
      e.preventDefault();
      if (currentProduct && currentProduct.images) {
        currentImageIndex = currentImageIndex < currentProduct.images.length - 1 ? currentImageIndex + 1 : 0;
        updateMainImage(currentImageIndex);
      }
    }
  });

  // ================================
  // MODIFICACIÓN 10: MANEJO DE SELECCIÓN DE TALLAS MEJORADO
  // Manejo específico para diferentes tipos de tallas
  // ================================
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('size-button')) {
      document.querySelectorAll('.size-button').forEach(btn => btn.classList.remove('selected'));
      e.target.classList.add('selected');
      selectedSize = e.target.textContent;
      
      // Mostrar información específica según el tipo de talla
      if (currentProduct && currentProduct.sizeType === 'letter') {
        showNotification(`Talla ${selectedSize} seleccionada`, 'info');
      } else {
        showNotification(`Talla ${selectedSize} seleccionada`, 'info');
      }
    }
  });

  // ================================
  // RESTO DE FUNCIONES (sin cambios significativos)
  // ================================

  // Handle Add to Cart
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-button') && !e.target.disabled) {
      if (!selectedSize) {
        showNotification('Por favor, selecciona una talla', 'warning');
        return;
      }

      if (!currentProduct || !currentProduct.inStock) {
        showNotification('Producto agotado', 'error');
        return;
      }

      const productToAdd = {
        id: currentProductData.id,
        name: currentProductData.name,
        price: currentProductData.price,
        size: selectedSize,
        sizeType: currentProductData.sizeType,
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

  function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCounter = document.querySelector('.cart-counter');
    if (cartCounter) {
      cartCounter.textContent = totalItems;
      cartCounter.style.display = totalItems > 0 ? 'block' : 'none';
    }
  }

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

  // Inicializar contador del carrito
  updateCartCounter();

  // ================================
  // DEMO DE PRODUCTOS ACTUALIZADO
  // Agregar botones para cambiar entre productos (ahora con los nuevos)
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
      max-width: 320px;
      max-height: 400px;
      overflow-y: auto;
    `;
    
    demoContainer.innerHTML = `
      <h4 style="margin-bottom: 10px; font-size: 14px; font-weight: bold;">Demo - Cambiar Producto:</h4>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <button onclick="window.location.href='?id=free-metcon-6'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          🆕 Nike Free Metcon 6
        </button>
        <button onclick="window.location.href='?id=pegasus-41'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          🆕 Nike Pegasus 41
        </button>
        <button onclick="window.location.href='?id=air-force-1'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          Nike Air Force 1 '07 LX
        </button>
        <button onclick="window.location.href='?id=zoom-vomero-roam'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          🆕 Nike Zoom Vomero Roam
        </button>
        <button onclick="window.location.href='?id=v2k-run'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          🆕 Nike V2K Run
        </button>
        <button onclick="window.location.href='?id=air-max-plus'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          🆕 Nike Air Max Plus
        </button>
        <button onclick="window.location.href='?id=shox-tl'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          🆕 Nike Shox TL
        </button>
        <button onclick="window.location.href='?id=mercurial-vapor-xi'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          🆕 Nike Mercurial Vapor XI Elite
        </button>
        <button onclick="window.location.href='?id=air-max-95-se'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          🆕 Air Max 95 SE
        </button>
        <hr style="margin: 8px 0; border: none; border-top: 1px solid #eee;">
        <button onclick="window.location.href='?id=camisa-mujer'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          Sudadera (Tallas: XS, S, M, L, XL)
        </button>
        <button onclick="window.location.href='?id=cortez'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          Nike Cortez
        </button>
        <button onclick="window.location.href='?id=P6000'" style="padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 11px;">
          Nike P6000 SE
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

// ================================
// FUNCIÓN PARA AGREGAR PRODUCTOS MANUALMENTE
// ================================

/**
 * Función para agregar un nuevo producto al catálogo
 * @param {Object} newProduct - Objeto con la información del producto
 * 
 * EJEMPLO DE USO:
 * 
 * const nuevoProducto = {
 *   id: 'nike-nuevo-modelo',
 *   name: 'Nike Nuevo Modelo',
 *   category: 'Zapatillas - Unisex',
 *   price: 149.99,
 *   originalPrice: 179.99, // Opcional, solo si hay descuento
 *   colors: [
 *     {
 *       name: 'Black/White',
 *       image: 'https://example.com/imagen1.jpg',
 *       colorCode: '#000000'
 *     },
 *     {
 *       name: 'White/Black',
 *       image: 'https://example.com/imagen2.jpg',
 *       colorCode: '#FFFFFF'
 *     }
 *   ],
 *   images: [
 *     'https://example.com/imagen1.jpg',
 *     'https://example.com/imagen2.jpg',
 *     'https://example.com/imagen3.jpg'
 *   ],
 *   sizes: ['38', '39', '40', '41', '42', '43'], // Para zapatillas
 *   // o sizes: ['XS', 'S', 'M', 'L', 'XL'], // Para ropa
 *   sizeType: 'numeric', // 'numeric' para números, 'letter' para letras
 *   description: 'Descripción del producto aquí...',
 *   features: ['Característica 1', 'Característica 2', 'Característica 3'],
 *   inStock: true
 * };
 * 
 * // Para usar la función (descomenta las líneas de abajo):
 * // addNewProduct(nuevoProducto);
 * 
 * PASOS PARA AGREGAR UN PRODUCTO MANUALMENTE:
 * 1. Copia el objeto 'products' de arriba
 * 2. Agrega tu nuevo producto siguiendo el formato del ejemplo
 * 3. Asegúrate de usar un ID único
 * 4. Guarda el archivo
 * 5. Accede a tu producto usando: ?id=tu-producto-id
 */

function addNewProduct(newProduct) {
  console.log('Nuevo producto agregado:', newProduct);
  // Aquí podrías agregar lógica para guardar en localStorage o enviar a una API
  // Por ejemplo:
  // localStorage.setItem(`product_${newProduct.id}`, JSON.stringify(newProduct));
}

// Ejemplo de productos que puedes agregar fácilmente:
const ejemplosProductos = {
  'nike-revolution-7': {
    id: 'nike-revolution-7',
    name: 'Nike Revolution 7',
    category: 'Zapatillas - Running',
    price: 64.99,
    originalPrice: null,
    colors: [
      {
        name: 'Black/White',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/revolution-7-black.png',
        colorCode: '#000000'
      }
    ],
    images: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/revolution-7-black.png'
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    sizeType: 'numeric',
    description: 'Nike Revolution 7 para correr con comodidad.',
    features: ['Transpirable', 'Ligeras', 'Amortiguación suave'],
    inStock: true
  }
};

console.log('Productos disponibles:', Object.keys(products || {}));
console.log('Para agregar un producto, usa la función addNewProduct() o modifica directamente el objeto products');