const hamburgerEl = document.querySelector(".hamburger-menu");
const mobileMenuEl = document.querySelector(".mobile-menu");
hamburgerEl.onclick = function (event) {
  mobileMenuEl.style.display = "block"
};
