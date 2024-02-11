const openHeaderMenu = document.getElementById("header-open-btn");
const mobMenuCloseBtn = document.getElementById("mob-menu-close-btn");
const mobMenu = document.getElementById("mob-menu");

openHeaderMenu.addEventListener("click", () => {
    mobMenu.classList.add("is-mob-menu-open")
})

mobMenuCloseBtn.addEventListener("click", () => {
    mobMenu.classList.remove("is-mob-menu-open")
})