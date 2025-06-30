// Carousel and Slider Functionality

// DOM Elements
function setupCarousels() {
  const featuredSlider = document.getElementById('featured-products-slider');
  const sportSlider = document.getElementById('sport-slider');
  const iconsSlider = document.getElementById('icons-slider');
  const recommendedSlider = document.getElementById('recommended-slider');
  const cartRecommendedSlider = document.getElementById('cart-recommended-slider');
  
  const prevButtons = document.querySelectorAll('.slider-control.prev');
  const nextButtons = document.querySelectorAll('.slider-control.next');
  
  // Slider Configuration
  const sliders = {
    'featured-products': {
      element: featuredSlider,
      itemWidth: 300,
      gap: 24,
      visibleItems: getVisibleItems(300),
      position: 0
    },
    'sport': {
      element: sportSlider,
      itemWidth: 300,
      gap: 24,
      visibleItems: getVisibleItems(300),
      position: 0
    },
    'icons': {
      element: iconsSlider,
      itemWidth: 300,
      gap: 24,
      visibleItems: getVisibleItems(300),
      position: 0
    },
    'recommended': {
      element: recommendedSlider,
      itemWidth: 300,
      gap: 24,
      visibleItems: getVisibleItems(300),
      position: 0
    },
    'cart-recommended': {
      element: cartRecommendedSlider,
      itemWidth: 300,
      gap: 24,
      visibleItems: getVisibleItems(300),
      position: 0
    }
  };
  
  // Calculate visible items based on viewport width
  function getVisibleItems(itemWidth) {
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth >= 1280) {
      return 3;
    } else if (viewportWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }
  
  // Handle Previous Button Click
  function handlePrevClick(sliderId) {
    const slider = sliders[sliderId];
    if (!slider || !slider.element) return;
    
    if (slider.position > 0) {
      slider.position--;
      updateSliderPosition(slider);
    }
  }
  
  // Handle Next Button Click
  function handleNextClick(sliderId) {
    const slider = sliders[sliderId];
    if (!slider || !slider.element) return;
    
    const items = slider.element.children;
    const maxPosition = Math.max(0, items.length - slider.visibleItems);
    
    if (slider.position < maxPosition) {
      slider.position++;
      updateSliderPosition(slider);
    }
  }
  
  // Update Slider Position
  function updateSliderPosition(slider) {
    if (!slider.element) return;
    
    const translateX = -(slider.position * (slider.itemWidth + slider.gap));
    slider.element.style.transform = `translateX(${translateX}px)`;
    slider.element.style.transition = 'transform 0.5s ease';
  }
  
  // Update Slider Configuration on Window Resize
  function handleResize() {
    for (const sliderId in sliders) {
      const slider = sliders[sliderId];
      if (slider.element) {
        slider.visibleItems = getVisibleItems(slider.itemWidth);
        
        // Reset position if it's beyond the max position after resize
        const items = slider.element.children;
        const maxPosition = Math.max(0, items.length - slider.visibleItems);
        
        if (slider.position > maxPosition) {
          slider.position = maxPosition;
        }
        
        updateSliderPosition(slider);
      }
    }
  }
  
  // Apply initial styles to sliders
  for (const sliderId in sliders) {
    const slider = sliders[sliderId];
    if (slider.element) {
      slider.element.style.display = 'flex';
      slider.element.style.gap = `${slider.gap}px`;
      slider.element.style.transition = 'transform 0.5s ease';
      slider.element.style.width = 'fit-content';
      
      // Apply styles to slider items
      Array.from(slider.element.children).forEach(item => {
        item.style.flex = `0 0 ${slider.itemWidth}px`;
      });
    }
  }
  
  // Add event listeners to control buttons
  prevButtons.forEach(button => {
    const sliderId = button.dataset.slider;
    button.addEventListener('click', () => handlePrevClick(sliderId));
  });
  
  nextButtons.forEach(button => {
    const sliderId = button.dataset.slider;
    button.addEventListener('click', () => handleNextClick(sliderId));
  });
  
  // Add window resize listener
  window.addEventListener('resize', handleResize);
}

// Run setup when DOM is loaded
document.addEventListener('DOMContentLoaded', setupCarousels);