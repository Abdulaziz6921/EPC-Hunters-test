// Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Only initializing the slider on mobile devices
  if (window.innerWidth <= 991) {
    initializeSlider();
  }

  // Re-initializing slider on window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 991) {
      initializeSlider();
    }
  });

  function initializeSlider() {
    const sliderTrack = document.querySelector(".slider-track");
    const prevButton = document.querySelector(".nav-prev");
    const nextButton = document.querySelector(".nav-next");

    // Checking if slider is already initialized
    if (sliderTrack.childElementCount > 0) {
      return;
    }

    // Getting the card content from desktop cards and clone for the slider
    const desktopCards = document.querySelectorAll(".desktop-cards .card");
    const cards = Array.from(desktopCards);

    // Creating slider items from desktop cards
    cards.forEach((card, index) => {
      const cardContent = card.querySelector(".card-content").cloneNode(true);
      const sliderItem = document.createElement("div");
      sliderItem.className = "slider-item";
      sliderItem.setAttribute("data-index", index);
      sliderItem.appendChild(cardContent);
      sliderTrack.appendChild(sliderItem);
    });

    // Variables for tracking slider state
    let currentIndex = 0;
    const totalSlides = cards.length;

    // Updating slider position
    function updateSlider() {
      sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Updating button states
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === totalSlides - 1;
    }

    // Initializing slider
    updateSlider();

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    nextButton.addEventListener("click", function () {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlider();
      }
    });

    // Touch support
    let startX, moveX;
    let isPointerDown = false;

    sliderTrack.addEventListener("pointerdown", function (e) {
      isPointerDown = true;
      startX = e.clientX;
      this.setPointerCapture(e.pointerId);
    });

    sliderTrack.addEventListener("pointermove", function (e) {
      if (!isPointerDown) return;
      moveX = e.clientX;
    });

    sliderTrack.addEventListener("pointerup", function (e) {
      isPointerDown = false;
      if (!moveX) return;

      const diff = startX - moveX;
      const threshold = 50; // Minimum distance to trigger slide

      if (diff > threshold && currentIndex < totalSlides - 1) {
        // Swiped left
        currentIndex++;
        updateSlider();
      } else if (diff < -threshold && currentIndex > 0) {
        // Swiped right
        currentIndex--;
        updateSlider();
      }

      startX = null;
      moveX = null;
    });

    sliderTrack.addEventListener("pointercancel", function () {
      isPointerDown = false;
      startX = null;
      moveX = null;
    });
  }
});
