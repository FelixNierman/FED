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

var button1 = document.querySelector("body.phone2 section:nth-of-type(2) div:first-of-type button:nth-of-type(1)");
var button2 = document.querySelector("body.phone2 section:nth-of-type(2) div:first-of-type button:nth-of-type(2)");

var imgPhone = document.querySelector("body.phone2 section div img");


button1.onclick = activeButton1;
button2.onclick = activeButton2;


function activeButton1() {
    button1.classList.add('active');
    button2.classList.remove('active');

    imgPhone.src="./images/phone(2).png"
}

function activeButton2() {
    button2.classList.add('active');
    button1.classList.remove('active');

    imgPhone.src="./images/phone(2)white.png"
}