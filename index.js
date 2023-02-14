const hamburgerMenu = document.querySelector(".hamburger-menu")

hamburgerMenu.addEventListener("click", menuClickHandler)

function menuClickHandler(event) {
    addOrRemoveClass(hamburgerMenu, "active")
}

function addOrRemoveClass(element, className, method = "toggle") {
    element.classList[method](className)
}
