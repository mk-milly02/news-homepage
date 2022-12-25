const offcanvas = document.querySelector(".transparent-canvas");
const menu = document.querySelector(".navbar-links");
const mainbody = document.querySelector("body");

function openMenu() {
    offcanvas.classList.add("transparent-canvas-show");
    menu.classList.add("navbar-links-show");
    mainbody.style.position = "fixed";
}

function closeMenu() {
    offcanvas.classList.remove("transparent-canvas-show");
    menu.classList.remove("navbar-links-show");
    mainbody.style.position = "static";
}