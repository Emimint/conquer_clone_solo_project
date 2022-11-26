"use strict";

const navbarElems = document.querySelectorAll(".nav_item");
const scrollBackButton = document.querySelector(".fixed");


/* "NAVBAR" interaction function: */
// TO BE FIXED!!!
document.addEventListener("click", function (e) {
  const current = document.querySelector(".selected"); // currently selected navbar link (if defined)
  current?.firstChild && current.classList.remove("selected");
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