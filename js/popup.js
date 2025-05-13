// Popup Functionality
document.addEventListener("DOMContentLoaded", function () {
  const infoButton = document.querySelector(".info-button");
  const popupOverlay = document.querySelector(".popup-overlay");
  const closePopup = document.querySelector(".close-popup");

  // Opening popup
  infoButton.addEventListener("click", function () {
    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling

    // Adding animation class
    setTimeout(() => {
      popupOverlay.querySelector(".popup").classList.add("animate");
    }, 10);
  });

  // Closing popup when clicking the close button
  closePopup.addEventListener("click", function () {
    popupOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
    popupOverlay.querySelector(".popup").classList.remove("animate");
  });

  // Closing popup when clicking outside the popup
  popupOverlay.addEventListener("click", function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove("active");
      document.body.style.overflow = "";
      popupOverlay.querySelector(".popup").classList.remove("animate");
    }
  });
});
