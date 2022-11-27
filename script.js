"use strict";

const navbar = document.querySelector("nav");
const navbarElems = document.querySelectorAll(".nav_item");
const scrollBackButton = document.querySelector(".fixed");
const scrollBackButtonTop = scrollBackButton.getBoundingClientRect().top;
const section1 = document.getElementById("section1");

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

/* "Scrolling back up" button animation: */
window.onscroll = function () {
  if (
    document.body.scrollTop > scrollBackButtonTop * 0.7 ||
    document.documentElement.scrollTop > scrollBackButtonTop * 0.7
  ) {
    scrollBackButton.classList.add("dimming"); // toggle opacity
  } else {
    scrollBackButton.classList.remove("dimming");
  }
};
