const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// display mobile menu

menu.addEventListener("click", function mobileMenu() {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
});