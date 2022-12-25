const hamburgerEl = document.querySelector(".hamburger-menu");
const mobileMenuEl = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu__close");
hamburgerEl.onclick = function (event) {
  mobileMenuEl.style.display = "block";
};
mobileMenuClose.onclick = function(){
  mobileMenuEl.style.display = "none"
}
