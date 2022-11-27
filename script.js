"use strict";

const navbar = document.querySelector("nav");
const navbarElems = document.querySelectorAll(".nav_item");
const scrollBackButton = document.querySelector(".fixed");

console.log(navbar);
console.log(navbarElems);

/* "Navbar" interaction function: */
navbar.addEventListener("click", function (e) {
  const current = document.querySelector(".selected"); // currently selected navbar link (default: Homepage)
  current.firstChild && current.classList.remove("selected");
  navbarElems.forEach((x) => {
    if (e.target == x.firstChild) {
      return x.firstChild.classList.add("selected");
    }
  });
});



/* "Scrolling back up" function: */
scrollBackButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});