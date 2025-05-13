// Mobile Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const closeMenu = document.querySelector(".close-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Opening menu
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  });

  // Closing menu
  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  });

  // Closing menu when clicking on a navigation link
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});
