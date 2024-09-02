window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var changeNav = nav.offsetTop;

function myFunction() {
if (window.scrollY >= changeNav) {
    navbar.classList.add("changeNav")
} else {
    navbar.classList.remove("changeNav");
}
}

const logo = document.querySelector(".logo").cloneNode(true);

document.querySelector('.logo-container').appendChild(logo);