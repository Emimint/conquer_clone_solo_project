"use strict";

const navbarElems = document.querySelectorAll(".nav_item");

document.addEventListener("click", function (e) {
  const current = document.querySelector(".selected"); // currently selected navbar link (if defined)
  current?.firstChild && current.classList.remove("selected");
  navbarElems.forEach((x) => {
    if (e.target == x.firstChild) {
      return x.firstChild.classList.add("selected");
    }
  });
});
