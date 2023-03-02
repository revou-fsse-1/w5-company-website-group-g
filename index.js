const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuBox = document.querySelector(".menu-box");

hamburgerMenu.addEventListener("click", menuClickHandler);

function menuClickHandler(event) {
  addOrRemoveClass(hamburgerMenu, "active");
  addOrRemoveClass(menuBox, "active");
}

function addOrRemoveClass(element, className, method = "toggle") {
  element.classList[method](className);
}
