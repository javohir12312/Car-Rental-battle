const hamburgerEl = document.querySelector(".hamburger-menu");
const mobileMenuEl = document.querySelector(".mobile-menu");
hamburgerEl.onclick = function (event) {
    mobileMenuEl.style.display = "block"
};


const compactbtn = document.querySelector(".choose__compact")
const sportBtn = document.querySelector(".choose__sport")
const vansBtn = document.querySelector(".choose__vans")


const compact = document.querySelector(".compact")
const sport = document.querySelector(".sport")
const vans = document.querySelector(".vans")


compactbtn.addEventListener("click", () => {
    compact.style.display = "block"
    sport.style.display = "none"
    vans.style.display = "none"
})

sportBtn.addEventListener("click", () => {
    sport.style.display= "block"
    compact.style.display = "none"
    vans.style.display = "none"
})
vansBtn.addEventListener("click", () => {
    vans.style.display = "block"
    compact.style.display = "none"
    sport.style.display = "none"
})
