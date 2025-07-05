// Main JavaScript File

// DOM Elements
const header = document.querySelector('.header');
const searchInput = document.querySelector('.search-input');
const searchForm = document.querySelector('.search-form');

// Header Scroll Effect
let lastScrollY = 0;

function handleScroll() {
  const scrollY = window.scrollY;
  
  if (scrollY > 80) {
    header.classList.add('header-scrolled');
    
    if (scrollY > lastScrollY) {
      // Scrolling down
      header.classList.add('header-hidden');
    } else {
      // Scrolling up
      header.classList.remove('header-hidden');
    }
  } else {
    header.classList.remove('header-scrolled', 'header-hidden');
  }
  
  lastScrollY = scrollY;
}

// Search Form Handling
if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm.length > 0) {
      console.log(`Searching for: ${searchTerm}`);
      alert(`Búsqueda: ${searchTerm}`);
    }
  });
}

// ========== VARIABLES GLOBALES PARA SLIDERS ==========

// Variables para el slider "Lo mejor y lo más nuevo"
let currentNewSlideIndex = 0;
let newSliderAutoplayInterval;

// Variables para el slider de iconos
let currentIconSlideIndex = 0;
let iconSliderAutoplayInterval;

// ========== FUNCIONES PARA SLIDER "LO MEJOR Y LO MÁS NUEVO" ==========

function moveNewSlider(direction) {
    const slider = document.getElementById('newSlider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Actualizar índice
    currentNewSlideIndex += direction;
    
    // Loop infinito
    if (currentNewSlideIndex < 0) {
        currentNewSlideIndex = totalSlides - 1;
    } else if (currentNewSlideIndex >= totalSlides) {
        currentNewSlideIndex = 0;
    }
    
    // Calcular desplazamiento
    const slideWidth = slides[0].offsetWidth + 20; // 20px de gap
    const offset = -currentNewSlideIndex * slideWidth;
    
    // Aplicar transformación
    slider.style.transform = `translateX(${offset}px)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
    
    // Actualizar indicadores si existen
    updateNewSliderIndicators();
    
    console.log(`Slider Principal - Slide actual: ${currentNewSlideIndex + 1}/${totalSlides}`);
}

function resetNewSlider() {
    currentNewSlideIndex = 0;
    const slider = document.getElementById('newSlider');
    if (slider) {
        slider.style.transform = 'translateX(0)';
        slider.style.transition = 'transform 0.5s ease-in-out';
        updateNewSliderIndicators();
    }
}

function startNewSliderAutoplay() {
    stopNewSliderAutoplay(); // Detener cualquier autoplay existente
    newSliderAutoplayInterval = setInterval(() => {
        moveNewSlider(1);
    }, 4000); // Cada 4 segundos
    console.log('Autoplay del slider principal iniciado');
}

function stopNewSliderAutoplay() {
    if (newSliderAutoplayInterval) {
        clearInterval(newSliderAutoplayInterval);
        newSliderAutoplayInterval = null;
    }
}

function updateNewSliderIndicators() {
    const indicators = document.querySelectorAll('.whats-new .slider-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentNewSlideIndex);
    });
}

// ========== FUNCIONES PARA SLIDER DE ICONOS ==========

function moveIconSlider(direction) {
    const slider = document.getElementById('iconsSlider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.icon-card');
    const totalSlides = slides.length;
    
    // Actualizar índice
    currentIconSlideIndex += direction;
    
    // Loop infinito
    if (currentIconSlideIndex < 0) {
        currentIconSlideIndex = totalSlides - 1;
    } else if (currentIconSlideIndex >= totalSlides) {
        currentIconSlideIndex = 0;
    }
    
    // Calcular desplazamiento (mostrar 3 cards a la vez)
    const cardWidth = 280; // Ancho de cada card incluyendo gap
    const offset = -currentIconSlideIndex * cardWidth;
    
    // Aplicar transformación
    slider.style.transform = `translateX(${offset}px)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
    
    // Actualizar indicadores si existen
    updateIconSliderIndicators();
    
    console.log(`Slider Iconos - Slide actual: ${currentIconSlideIndex + 1}/${totalSlides}`);
}

function resetIconSlider() {
    currentIconSlideIndex = 0;
    const slider = document.getElementById('iconsSlider');
    if (slider) {
        slider.style.transform = 'translateX(0)';
        slider.style.transition = 'transform 0.5s ease-in-out';
        updateIconSliderIndicators();
    }
}

function startIconSliderAutoplay() {
    stopIconSliderAutoplay(); // Detener cualquier autoplay existente
    iconSliderAutoplayInterval = setInterval(() => {
        moveIconSlider(1);
    }, 5000); // Cada 5 segundos
    console.log('Autoplay del slider de iconos iniciado');
}

function stopIconSliderAutoplay() {
    if (iconSliderAutoplayInterval) {
        clearInterval(iconSliderAutoplayInterval);
        iconSliderAutoplayInterval = null;
    }
}

function updateIconSliderIndicators() {
    const indicators = document.querySelectorAll('.icons .indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIconSlideIndex);
    });
}

// ========== FUNCIÓN GLOBAL PARA COMPATIBILIDAD ==========

function moveSlider(sliderId, direction) {
    if (sliderId === 'newSlider') {
        moveNewSlider(direction);
    } else if (sliderId === 'iconsSlider') {
        moveIconSlider(direction);
    }
}

// ========== EFECTOS HOVER Y ANIMACIONES ==========

function setupHoverEffects() {
    // Animaciones para tarjetas de eventos
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
    
    // Animaciones para tarjetas de deportes
    document.querySelectorAll('.sport-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img');
            if (img) img.style.filter = 'grayscale(0%)';
            card.style.transform = 'scale(1.03)';
        });
        
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            if (img) img.style.filter = 'grayscale(100%)';
            card.style.transform = 'scale(1)';
        });
    });
    
    // Animaciones para tarjetas de iconos
    document.querySelectorAll('.icon-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            const img = card.querySelector('img');
            if (img) img.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            const img = card.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
        });
    });
    
    // Animaciones para slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            const img = slide.querySelector('img');
            if (img) img.style.transform = 'scale(1.05)';
        });
        
        slide.addEventListener('mouseleave', () => {
            const img = slide.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
        });
    });
}

// ========== NAVEGACIÓN TÁCTIL ==========

function setupTouchNavigation() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const newSlider = document.getElementById('newSlider');
    const iconSlider = document.getElementById('iconsSlider');
    
    // Touch para slider principal
    if (newSlider) {
        newSlider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        newSlider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleNewSliderSwipe();
        });
    }
    
    // Touch para slider de iconos
    if (iconSlider) {
        iconSlider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        iconSlider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleIconSliderSwipe();
        });
    }
    
    function handleNewSliderSwipe() {
        const swipeThreshold = 50;
        if (Math.abs(touchEndX - touchStartX) > swipeThreshold) {
            if (touchEndX < touchStartX) {
                moveNewSlider(1); // Deslizar a la izquierda
            } else {
                moveNewSlider(-1); // Deslizar a la derecha
            }
        }
    }
    
    function handleIconSliderSwipe() {
        const swipeThreshold = 50;
        if (Math.abs(touchEndX - touchStartX) > swipeThreshold) {
            if (touchEndX < touchStartX) {
                moveIconSlider(1); // Deslizar a la izquierda
            } else {
                moveIconSlider(-1); // Deslizar a la derecha
            }
        }
    }
}

// ========== FUNCIONES AUXILIARES ==========

// Modal functions
function mostrarMensaje() {
    const modal = document.getElementById('modalMensaje');
    if (modal) {
        modal.style.display = 'block';
    }
}

function cerrarModal() {
    const modal = document.getElementById('modalMensaje');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Función para búsqueda
function performSearch() {
    const searchBox = document.querySelector('.search-box input');
    const searchInput = searchBox ? searchBox.value.toLowerCase() : '';
    
    console.log(`Buscando: ${searchInput}`);
    
    if (searchInput.length > 0) {
        alert(`Buscando productos relacionados con: "${searchInput}"`);
    }
    
    return false;
}

// ========== INICIALIZACIÓN ==========

document.addEventListener('DOMContentLoaded', function() {
    // Configurar efectos hover
    setupHoverEffects();
    
    // Configurar navegación táctil
    setupTouchNavigation();
    
    // Iniciar autoplay automático para ambos sliders
    setTimeout(() => {
        startNewSliderAutoplay();
    }, 1000); // Iniciar después de 1 segundo
    
    setTimeout(() => {
        startIconSliderAutoplay();
    }, 2000); // Iniciar después de 2 segundos (offset)
    
    // Configurar evento de búsqueda
    const searchIcon = document.querySelector('.search-box i');
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            performSearch();
        });
    }
    
    // Permitir búsqueda con Enter
    const searchForm = document.querySelector('.search-box');
    if (searchForm) {
        searchForm.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }
    
    // Configurar modal
    window.onclick = function(event) {
        const modal = document.getElementById('modalMensaje');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            cerrarModal();
        }
    });
    
    console.log('Sistema de sliders automáticos inicializado correctamente');
});

// ========== EVENT LISTENERS ==========

// Ajustar sliders al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    // Los sliders mantienen su posición actual
    console.log('Ventana redimensionada - sliders ajustados');
});

// Animación de navbar al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
    
    handleScroll();
});

// Limpiar intervalos al cerrar la página
window.addEventListener('beforeunload', () => {
    stopNewSliderAutoplay();
    stopIconSliderAutoplay();
});

// Pausar autoplay cuando el usuario interactúa con los sliders
document.addEventListener('click', function(e) {
    if (e.target.closest('.slider-btn')) {
        // Si el usuario hace clic en los botones del slider, pausar temporalmente
        const sliderId = e.target.closest('.slider-container').querySelector('.slider, .icons-slider').id;
        
        if (sliderId === 'newSlider') {
            stopNewSliderAutoplay();
            setTimeout(() => {
                startNewSliderAutoplay();
            }, 10000); // Reanudar después de 10 segundos
        } else if (sliderId === 'iconsSlider') {
            stopIconSliderAutoplay();
            setTimeout(() => {
                startIconSliderAutoplay();
            }, 10000); // Reanudar después de 10 segundos
        }
    }
});