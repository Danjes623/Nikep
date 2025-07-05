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
      // In a real implementation, this would redirect to a search results page
      console.log(`Searching for: ${searchTerm}`);
      alert(`Búsqueda: ${searchTerm}`);
      
      // For demo purposes only - in a real site you would redirect to a search results page
      // window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
    }
  });
}

// Fade In Animation for Elements
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.classList.add('fade-in');
    }
  });
}

// Info Toggles (for expandable sections)
function setupInfoToggles() {
  const toggleButtons = document.querySelectorAll('.toggle-button');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.closest('.info-header').nextElementSibling;
      this.classList.toggle('open');
      content.classList.toggle('open');
    });
  });
}

// ========== SLIDER FUNCTIONALITY ==========

// Variables para el slider "Lo mejor y lo más nuevo"
let currentNewSlideIndex = 0;
let newSliderAutoplayInterval;

// Función para el slider "Lo mejor y lo más nuevo"
function moveNewSlider(direction) {
    const slider = document.getElementById('newSlider');
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
}

// Función para resetear el slider "Lo mejor y lo más nuevo"
function resetNewSlider() {
    currentNewSlideIndex = 0;
    const slider = document.getElementById('newSlider');
    slider.style.transform = 'translateX(0)';
}

// Autoplay para el slider "Lo mejor y lo más nuevo"
function startNewSliderAutoplay() {
    newSliderAutoplayInterval = setInterval(() => {
        moveNewSlider(1);
    }, 8000); // cada 4 segundos
}

function stopNewSliderAutoplay() {
    clearInterval(newSliderAutoplayInterval);
}

// ========== ICON SLIDER CLASS ==========

class IconSlider {
    constructor(sliderId) {
        this.slider = document.getElementById(sliderId);
        if (!this.slider) return;
        
        this.cards = this.slider.querySelectorAll('.icon-card');
        this.totalCards = this.cards.length;
        this.currentIndex = 0;
        this.cardWidth = 280; // Ancho de cada card incluyendo gap
        this.visibleCards = this.getVisibleCards();
        this.maxIndex = Math.max(0, this.totalCards - this.visibleCards);
        
        this.init();
        this.setupEventListeners();
        this.createIndicators();
        this.updateButtons();
    }

    init() {
        this.updateSliderPosition();
    }

    getVisibleCards() {
        const containerWidth = this.slider.parentElement.offsetWidth - 60;
        return Math.floor(containerWidth / this.cardWidth);
    }

    setupEventListeners() {
        // Eventos de touch para móviles
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        this.slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            currentX = e.touches[0].clientX;
        });

        this.slider.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diffX = startX - currentX;
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.moveToNext();
                } else {
                    this.moveToPrev();
                }
            }
        });

        // Redimensionamiento de ventana
        window.addEventListener('resize', () => {
            this.visibleCards = this.getVisibleCards();
            this.maxIndex = Math.max(0, this.totalCards - this.visibleCards);
            this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
            this.updateSliderPosition();
            this.updateButtons();
            this.updateIndicators();
        });
    }

    createIndicators() {
        const indicatorsContainer = document.getElementById('indicators');
        if (!indicatorsContainer) return;
        
        indicatorsContainer.innerHTML = '';
        
        const totalIndicators = this.maxIndex + 1;
        for (let i = 0; i < totalIndicators; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => {
                this.moveTo(i);
            });
            
            indicatorsContainer.appendChild(indicator);
        }
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    updateSliderPosition() {
        const translateX = -this.currentIndex * this.cardWidth;
        this.slider.style.transform = `translateX(${translateX}px)`;
        this.slider.style.transition = 'transform 0.3s ease';
    }

    updateButtons() {
        const prevBtn = document.querySelector('.icons .prev-btn');
        const nextBtn = document.querySelector('.icons .next-btn');
        
        if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
        if (nextBtn) nextBtn.disabled = this.currentIndex >= this.maxIndex;
    }

    moveTo(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
        this.updateSliderPosition();
        this.updateButtons();
        this.updateIndicators();
    }

    moveToNext() {
        if (this.currentIndex < this.maxIndex) {
            this.moveTo(this.currentIndex + 1);
        }
    }

    moveToPrev() {
        if (this.currentIndex > 0) {
            this.moveTo(this.currentIndex - 1);
        }
    }
}

// ========== FUNCIÓN GLOBAL PARA COMPATIBILIDAD ==========

let currentSlideIndex = 0;
let SliderAutoplayInterval;


// Función global para manejar ambos sliders
function moveSlider(sliderId, direction) {
    if (sliderId === 'newSlider') {
        moveNewSlider(direction);
    } else if (sliderId === 'iconsSlider') {
        if (direction > 0) {
            window.iconSlider.moveToNext();
        } else {
            window.iconSlider.moveToPrev();
        }
    }
}




// Función para el slider "Lo mejor y lo más nuevo"
function moveIconSlider(direction) {
    const slider = document.getElementById('iconsSlider');
    const slides = slider.querySelectorAll('.icon-card');
    const totalSlides = slides.length;
    
    // Actualizar índice
   currentSlideIndex += direction;
    
    // Loop infinito
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    } else if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }
    
    // Calcular desplazamiento
    const slideWidth = slides[0].offsetWidth + 20; // 20px de gap
    const offset = -currentSlideIndex * slideWidth;
    
    // Aplicar transformación
    slider.style.transform = `translateX(${offset}px)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
}

// Función para resetear el slider "Lo mejor y lo más nuevo"
function resetSlider() {
    currentSlideIndex = 0;
    const slider = document.getElementById('iconsSlider');
    slider.style.transform = 'translateX(0)';
}

// Autoplay para el slider "Lo mejor y lo más nuevo"
function startSliderAutoplay() {
    SliderAutoplayInterval = setInterval(() => {
        moveNewSlider(1);
    }, 6000); // cada 4 segundos
}

function stopSliderAutoplay() {
    clearInterval(SliderAutoplayInterval);
}










// ========== EFECTOS HOVER Y ANIMACIONES ==========

// Efectos hover en cards
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
    
    if (newSlider) {
        newSlider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        newSlider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleNewSliderSwipe();
        });
    }
    
    function handleNewSliderSwipe() {
        if (touchEndX < touchStartX) {
            moveNewSlider(1); // Deslizar a la izquierda
        }
        if (touchEndX > touchStartX) {
            moveNewSlider(-1); // Deslizar a la derecha
        }
    }
}

// ========== FUNCIONES AUXILIARES ==========

// Función para alternar menú móvil
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
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

// ========== INICIALIZACIÓN ==========

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar slider de iconos
    window.iconSlider = new IconSlider('iconsSlider');
    
    // Configurar efectos hover
    setupHoverEffects();
    
    // Configurar navegación táctil
    setupTouchNavigation();
    
    // Inicializar autoplay para el slider principal
    startNewSliderAutoplay();
    
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
});

// ========== EVENT LISTENERS ==========

// Ajustar sliders al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    // Resetear slider principal
    resetNewSlider();
    
    // El slider de iconos se ajusta automáticamente en su clase
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
    
    // Llamar a la función de scroll del header
    handleScroll();
});

// Asegurar que el slider se inicialice correctamente después de cargar completamente
window.addEventListener('load', () => {
    // Resetear posición del slider principal
    resetNewSlider();
    
    // Reiniciar autoplay
    stopNewSliderAutoplay();
    startNewSliderAutoplay();
});