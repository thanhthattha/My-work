const dayNight = document.querySelector(".dayNight");
const menuToggle = document.querySelector(".menuToggle");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");

dayNight.onclick = function () {
  body.classList.toggle("dark");
  dayNight.classList.toggle("active");
};
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
};
