const menu = document.querySelector(".menu")
const openMenuBtn = document.querySelector(".abrir-menu")
const closeMenuBtn = document.querySelector(".cerrar-menu")

function toggleMenu() {
    menu.classList.toggle("menu-abrir");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
openMenuBtn.addEventListener("click", toggleMenu)