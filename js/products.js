// Products Page JavaScript

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  const filterToggle = document.getElementById('filter-toggle');
  const filtersSidebar = document.getElementById('filters-sidebar');
  const sortSelect = document.getElementById('sort-select');
  const filterOptions = document.querySelectorAll('.filter-option input');
  const productItems = document.querySelectorAll('.product-item');
  const priceRange = document.getElementById('price-range');
  
  // Toggle Filters Sidebar
  if (filterToggle && filtersSidebar) {
    let filtersVisible = true;
    
    filterToggle.addEventListener('click', function() {
      filtersVisible = !filtersVisible;
      
      if (filtersVisible) {
        filtersSidebar.style.display = 'block';
        filterToggle.innerHTML = 'Ocultar filtros <span class="filter-icon">⊟</span>';
      } else {
        filtersSidebar.style.display = 'none';
        filterToggle.innerHTML = 'Mostrar filtros <span class="filter-icon">⊞</span>';
      }
    });
    
    // Handle window resize for responsive behavior
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        filtersSidebar.style.display = 'block';
        filtersVisible = true;
        filterToggle.innerHTML = 'Ocultar filtros <span class="filter-icon">⊟</span>';
      }
    });
  }
  
  // Sort Products
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      const sortValue = this.value;
      const productsList = document.querySelector('.products-list');
      
      if (productsList) {
        const productsArray = Array.from(productItems);
        
        // Sort products based on selected option
        switch (sortValue) {
          case 'price-low':
            productsArray.sort((a, b) => {
              const priceA = parseFloat(a.querySelector('.product-price').innerText);
              const priceB = parseFloat(b.querySelector('.product-price').innerText);
              return priceA - priceB;
            });
            break;
            
          case 'price-high':
            productsArray.sort((a, b) => {
              const priceA = parseFloat(a.querySelector('.product-price').innerText);
              const priceB = parseFloat(b.querySelector('.product-price').innerText);
              return priceB - priceA;
            });
            break;
            
          case 'newest':
            // In a real implementation, this would sort by date
            // For demo, we'll just reverse the current order
            productsArray.reverse();
            break;
            
          default: // featured or any other option
            // Reset to original order
            productsArray.sort((a, b) => {
              return Array.from(productItems).indexOf(a) - Array.from(productItems).indexOf(b);
            });
            break;
        }
        
        // Reorder products in the DOM
        productsArray.forEach(product => {
          productsList.appendChild(product);
        });
        
        // Add animation
        productsArray.forEach(product => {
          product.classList.add('fade-in');
          setTimeout(() => {
            product.classList.remove('fade-in');
          }, 500);
        });
      }
    });
  }
  
  // Filter Functionality
  if (filterOptions.length > 0) {
    filterOptions.forEach(option => {
      option.addEventListener('change', function() {
        // In a real implementation, this would filter the products
        // For demo purposes, we'll just log the selected filters
        const filterType = this.name;
        const filterValue = this.value;
        const isChecked = this.checked;
        
        console.log(`Filter ${filterType}: ${filterValue} is ${isChecked ? 'checked' : 'unchecked'}`);
        
        // Example of how you might filter products
        // This is a simplified demo - in a real app, you'd likely use AJAX or fetch to get filtered results
        if (isChecked) {
          // Simulate filtering
          simulateFiltering(filterType, filterValue);
        }
      });
    });
  }
  
  // Price Range Slider
  if (priceRange) {
    priceRange.addEventListener('input', function() {
      const value = this.value;
      document.querySelector('.price-values').innerHTML = `
        <span>$0</span>
        <span>$${value}</span>
      `;
      
      // Simulate filtering by price
      console.log(`Price filter: up to $${value}`);
    });
  }
  
  // Simulate product filtering
  function simulateFiltering(filterType, filterValue) {
    // In a real app, this would apply filters to the product list
    // For demo, we'll just show a message
    const message = `Filtrando por ${filterType}: ${filterValue}`;
    
    // Check if notification element exists, create if not
    let notification = document.querySelector('.filter-notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.className = 'filter-notification';
      document.body.appendChild(notification);
      
      // Style the notification
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
    
    // Show the notification
    notification.textContent = message;
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
    
    // Hide after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(20px)';
    }, 3000);
  }
});

 let cartCount = 0;

    function addToCart() {
      cartCount++;
      document.getElementById("cart-count").textContent = cartCount;
    }