"use strict";

const navbarElems = document.querySelectorAll(".nav_item");

// console.log(navbarElems);

document.addEventListener("click", function (e) {
  navbarElems.forEach((x) => {
    // console.log(e.target);
    // console.log(x.firstChild);
    if (e.target == x.firstChild) {
      x.classList.add("selected");
    }
  });
});
