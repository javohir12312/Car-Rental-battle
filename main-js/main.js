const hamburgerEl = document.querySelector(".hamburger-menu");
const mobileMenuEl = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu__close");
const body = document.querySelector("body")
const loginBtn = document.querySelector(".navbar__login-btn")
const modalLogin = document.querySelector(".modal__login")
const modalLoginClose = document.querySelector(".modal__login-close")
const mobileMenuBtnLogin = document.querySelector(".mobile-menu__footer-login-btn")
const mode = document.querySelector(".navbar__dark-mode")

mode.onclick = function(){
  body.classList.toggle("dark")
}


hamburgerEl.onclick = function (event) {
  mobileMenuEl.style.display = "block";
  body.style.overflow = "hidden"
};
mobileMenuClose.onclick = function(){
  mobileMenuEl.style.display = "none"
  body.style.overflo = "auto"
}
loginBtn.onclick = function(){
  modalLogin.style.top = "50%"
}
modalLoginClose.onclick = function(){
  modalLogin.style.top = "-50%"
}
mobileMenuBtnLogin.onclick = function(){
  modalLogin.style.top = "50%"
  mobileMenuEl.style.display = "none"
}