'use strict';

var slider_btn = document.querySelector("#slider-btn");
var modal = document.querySelector(".bg-modal");
var slider_modal = document.querySelector(".slider-modal");
var cancel_login = document.querySelector(".cancel-slider");

slider_btn.addEventListener("click",sliderModal);
cancel_login.addEventListener("click",cancelSlider);

function sliderModal() {
  modal.classList.add("active");
  slider_modal.classList.add("login-active");
}

function cancelSlider() {
  modal.classList.remove("active");
  slider_modal.classList.remove("login-active");
}










// slider js starts here


'use strict';
// slide and slides manipulation
var slides = document.querySelector(".slides");
var slide = document.querySelectorAll(".slides li");

// buttons and dots manipulation
var prevBtn = document.querySelector(".slider-left-button");
var nxtBtn = document.querySelector(".slider-right-button");
var elements = document.querySelectorAll(".dot");

// events
slides.addEventListener("transitionend", backtoOrigin);
nxtBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// pre-styling
let counter = 1;

slides.style.transform = 'translateX(' + ( -100 * counter) + '%)';

// function for next slide
function next() {
  if (counter >= slide.length - 1) {
    return;
  }
  else {
    slides.classList.remove("active-slide");
    counter++;
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)';
    var currentDot = document.querySelector(".active-dot");
    var nxtDot = currentDot.nextElementSibling;
    if (!nxtDot) {
      nxtDot = elements[0];
    }
    
    updateDots(currentDot, nxtDot);
  }
}

// function for previous slide
function prev() {
  if (counter <= 0) {
    return;
  }
  else {
    slides.classList.remove("active-slide");
    counter--;
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)';
    var currentDot = document.querySelector(".active-dot");
    var prevDot = currentDot.previousElementSibling;
    if (!prevDot) {
      prevDot = elements[2];
    }

    updateDots(currentDot, prevDot);
  }
}

// function for backtoOrigin
function backtoOrigin() {
  if (slide[counter].id === "lastClone") {
    slides.classList.add("active-slide")
    counter = slide.length - 2;
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)';
  }

  if (slide[counter].id === "firstClone") {
    slides.classList.add("active-slide")
    counter = slide.length - counter;
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)';
  }
}

// code for on dots activity
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    slides.classList.remove("active-slide");
    counter = this.innerHTML;
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)';

    var currentDot = document.querySelector(".active-dot");
    var targetDot = this;

    updateDots(currentDot, targetDot);
  }
}

// function for upadating dots
function updateDots(currentDot, targetDot) {
  currentDot.classList.remove("active-dot");
  targetDot.classList.add("active-dot");
}

// function for animating slides
function animate() {
  if (counter >= slide.length - 1) {
    return;
  }
  else {
    slides.classList.remove("active-slide");
    counter++;
    slides.style.transform = 'translateX(' + (-100 * counter) + '%)';
    var currentDot = document.querySelector(".active-dot");
    var nxtDot = currentDot.nextElementSibling;
    if (!nxtDot) {
      nxtDot = elements[0];
    }
    
    updateDots(currentDot, nxtDot);
  }
  setTimeout( animate, 4000);
}
setTimeout( animate, 4000);
