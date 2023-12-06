

var openButton = document.querySelector("header nav button");

openButton.onclick = openMenu;

function openMenu() {
    var nav = document.querySelector("header nav:nth-of-type(2)");
    nav.classList.toggle("showMenu");

    var animationButton1 = document.querySelector("header nav button svg:nth-of-type(1)");
    animationButton1.classList.toggle("animation1");

    var animationButton2 = document.querySelector("header nav button svg:nth-of-type(2)");
    animationButton2.classList.toggle("animation2");


}
