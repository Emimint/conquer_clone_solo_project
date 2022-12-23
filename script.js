"use strict";

/*************
 * VARIABLES
 *************/

const screenRatio = 0.7 // value between 0 and 1 used to defined when the "Scrolling back up" button appear or disappear

const allMenuSections = document.querySelectorAll('[id^="section"]'); // all four main section div elementss, i.e. div id="section1", div id="section2",...

const navbar = document.querySelector("nav"); // regular navbar
const menuBox = document.querySelector(".menu-box"); // mobile navbar
const navList = document.querySelector("ul");
const navbarElems = document.querySelectorAll(".nav_item");

const scrollBackButton = document.querySelector(".fixed");
const scrollBackButtonTop = scrollBackButton.getBoundingClientRect().top;

const checkTablet = window.matchMedia(
  "screen and (min-width: 480px) and (max-width: 767px)"
);
const checkPhone = window.matchMedia("only screen and (max-width: 480px)");

/*************
 * FUNCTIONS
 *************/

/* Create mobile "Navbar" format: */
const changeNavDesign = function (e) {
  navbar.classList.add("shrinked");
  navList.classList.add("nav_links");
  navbarElems.forEach((x) => {
    x.classList.add("menu-box-item");
  });
  navbar.classList.add("hide");
  navList.classList.add("hide");
};

/* Create regular "Navbar" format: */
const turnBackNavDesign = function (e) {
  navbar.classList.remove("shrinked");
  navList.classList.remove("nav_links");
  navbarElems.forEach((x) => {
    x.classList.remove("menu-box-item");
  });
  navbar.classList.remove("hide");
  navList.classList.remove("hide");
};

/* Toogle mobile "Navbar" menu: */
const switchOnOff = function (e) {
  if (navbar.getBoundingClientRect().height == 0) {
    navbar.classList.remove("hide");
    navList.classList.remove("hide");
  } else if (navbar.getBoundingClientRect().height > 0) {
    navbar.classList.add("hide");
    navList.classList.add("hide");
  }
};


/*******************
 * EVENT LISTENERS:
 *******************/

/* Mobile "Navbar" interaction: */
navList.addEventListener("click", function (e) {
  if (navList.classList.contains("nav_links")) {
    // if mobile navbar is displayed:
    switchOnOff();
  }
});

/*  Current position tracker: */
window.addEventListener("scroll", function (e) {
  const current = document.querySelector(".selected"); // currently selected navbar link (default: Homepage)
  allMenuSections.forEach((x, i) => {
    if (
      window.scrollY > x.offsetTop &&
      window.scrollY <= x.offsetTop + x.offsetHeight
    ) {
      current.classList.remove("selected");
      return navbarElems[i].classList.add("selected");
    }
  });
});

/* Menu-box interaction: */
menuBox.addEventListener("click", switchOnOff);


/* Navbar format verification: */
checkTablet.addEventListener("change", function (e) {
  if (checkTablet.matches || checkPhone.matches) {
    /* if media queries for small devices: */
    changeNavDesign();
  } else {
    turnBackNavDesign();
  }
});

/* Launch navbar format listener at start:*/
if (checkTablet.matches || checkPhone.matches) {
  /* if media queries for small devices: */
  changeNavDesign();
} else {
  turnBackNavDesign();
}

/* "Scrolling back up": */
scrollBackButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

/* "Scrolling back up" button animation: */
window.onscroll = function () {
  if (
    document.body.scrollTop > scrollBackButtonTop * screenRatio ||
    document.documentElement.scrollTop > scrollBackButtonTop * screenRatio
  ) {
    scrollBackButton.classList.add("dimming"); // toggle opacity
  } else {
    scrollBackButton.classList.remove("dimming");
  }
};
