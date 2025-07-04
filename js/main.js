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

// Variables para los sliders
let currentNewSlidePosition = 0;
let currentIconsSlidePosition = 0;
let slidesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;

// Función para mover los sliders
function moveSlider(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('div[class^="slide"], div[class^="icon-card"]');
    
    // Determinar qué contador de posición modificar
    let currentPosition;
    if (sliderId === 'newSlider') {
        currentNewSlidePosition += direction;
        if (currentNewSlidePosition < 0) currentNewSlidePosition = 0;
        if (currentNewSlidePosition > slides.length - slidesPerView) currentNewSlidePosition = slides.length - slidesPerView;
        currentPosition = currentNewSlidePosition;
    } else {
        currentIconsSlidePosition += direction;
        if (currentIconsSlidePosition < 0) currentIconsSlidePosition = 0;
        if (currentIconsSlidePosition > slides.length - 4) currentIconsSlidePosition = slides.length - 4;
        currentPosition = currentIconsSlidePosition;
    }
    
    // Calcular el desplazamiento
    const slideWidth = sliderId === 'newSlider' 
        ? slider.querySelector('.slide').offsetWidth + parseInt(getComputedStyle(slider.querySelector('.slide')).marginRight)
        : slider.querySelector('.icon-card').offsetWidth;
    
    const offset = -currentPosition * slideWidth;
    
    // Aplicar la transformación
    slider.style.transform = `translateX(${offset}px)`;
}

// Efectos hover en cards
document.addEventListener('DOMContentLoaded', function() {
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
            img.style.filter = 'grayscale(0%)';
            card.style.transform = 'scale(1.03)';
        });
        
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            img.style.filter = 'grayscale(100%)';
            card.style.transform = 'scale(1)';
        });
    });
    
    // Animaciones para tarjetas de iconos
    document.querySelectorAll('.icon-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            const img = card.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            const img = card.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
    
    // Animaciones para slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            const img = slide.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
        
        slide.addEventListener('mouseleave', () => {
            const img = slide.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
    
    // Navegación táctil para sliders
    let touchStartX = 0;
    let touchEndX = 0;
    
    const newSlider = document.getElementById('newSlider');
    const iconsSlider = document.getElementById('iconsSlider');
    
    newSlider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    newSlider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(newSlider.id);
    });
    
    iconsSlider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    iconsSlider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(iconsSlider.id);
    });
    
    function handleSwipe(sliderId) {
        if (touchEndX < touchStartX) {
            moveSlider(sliderId, 1); // Deslizar a la izquierda
        }
        if (touchEndX > touchStartX) {
            moveSlider(sliderId, -1); // Deslizar a la derecha
        }
    }
});

// Ajustar sliders al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    // Actualizar slidesPerView según el ancho de ventana
    slidesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;
    
    // Resetear posiciones
    currentNewSlidePosition = 0;
    currentIconsSlidePosition = 0;
    
    // Resetear transformaciones
    document.getElementById('newSlider').style.transform = 'translateX(0)';
    document.getElementById('iconsSlider').style.transform = 'translateX(0)';
});

// Función para alternar menú móvil
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

// Autoplay para sliders (opcional)
let autoplayInterval;

function resetSlidersToStart() {
    moveSlider('newSlider', 'reset');
    moveSlider('iconsSlider', 'reset');
}


 let currentIndex = 0;
  const slider = document.getElementById("newSlider");
  const slides = slider.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth;

  // Mueve el slider a la posición actual
  function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Función para mover el slider
  function moveSlider(id, direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    updateSliderPosition();
  }

  // Movimiento automático
  function startAutoplay() {
    setInterval(() => {
      moveSlider('newSlider', 1);
    }, 15000); // cada 15 segundos
  }

  // Espera a que todo cargue para asegurar medidas correctas
  window.addEventListener("load", () => {
    updateSliderPosition();
    startAutoplay();
  });



function stopAutoplay() {
    clearInterval(autoplayInterval);
}




// Animación de navbar al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 0';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Función para búsqueda
function performSearch() {
    const searchInput = document.querySelector('.search-box input').value.toLowerCase();
    // Aquí se implementaría la lógica real de búsqueda
    console.log(`Buscando: ${searchInput}`);
    
    if (searchInput.length > 0) {
        alert(`Buscando productos relacionados con: "${searchInput}"`);
    }
    
    return false; // Prevenir recarga de página
}

// Configurar evento de búsqueda
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-box');
    const searchIcon = document.querySelector('.search-box i');
    
    searchIcon.addEventListener('click', () => {
        performSearch();
    });
    
    // Permitir búsqueda con Enter
    searchForm.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
});


function mostrarMensaje() {
            document.getElementById('modalMensaje').style.display = 'block';
        }

        function cerrarModal() {
            document.getElementById('modalMensaje').style.display = 'none';
        }

        // Cerrar modal al hacer clic fuera de él
        window.onclick = function(event) {
            const modal2 = document.getElementById('modalMensaje');
            if (event.target === modal2) {
                modal.style.display = 'none';
            }
        }

        // Cerrar modal con la tecla Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                cerrarModal();
            }
        });
