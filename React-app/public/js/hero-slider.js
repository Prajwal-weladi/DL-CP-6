document.addEventListener('DOMContentLoaded', function() {
  // Hero image slider functionality
  const heroImages = document.querySelectorAll('.hero-image');
  const heroIndicators = document.querySelectorAll('.hero-indicator');
  const prevButton = document.querySelector('.hero-control.prev');
  const nextButton = document.querySelector('.hero-control.next');
  
  let currentIndex = 0;
  const totalSlides = heroImages.length;
  
  // Initialize auto-slide timer
  let slideInterval = setInterval(nextSlide, 5000);
  
  // Function to show a specific slide
  function showSlide(index) {
    // Reset all slides and indicators
    heroImages.forEach(image => image.classList.remove('active'));
    heroIndicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Activate current slide and indicator
    heroImages[index].classList.add('active');
    heroIndicators[index].classList.add('active');
    
    // Update current index
    currentIndex = index;
    
    // Reset the interval timer
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  // Function to show next slide
  function nextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= totalSlides) {
      nextIndex = 0;
    }
    showSlide(nextIndex);
  }
  
  // Function to show previous slide
  function prevSlide() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = totalSlides - 1;
    }
    showSlide(prevIndex);
  }
  
  // Add click event listeners to indicators
  heroIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
    });
  });
  
  // Add click event listeners to control buttons
  if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
  }
});
