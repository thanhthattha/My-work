const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playAuto = document.querySelector(".setInterval");
const IMG_WIDTH = 400;
const slideContainer = $(".slides");
const slideImages = [...$$(".slide")];
let index = 0;

slideContainer.style.width = `${slideImages.length * IMG_WIDTH}px`;
function next() {
  if (index <= slideImages.length - 2) {
    index++;
  } else {
    index = 0;
  }

  slideContainer.style.transform = `translateX(-${IMG_WIDTH * index}px)`;
}
function prev() {
  if (index == 0) {
    index = slideImages.length - 1;
  } else {
    index--;
  }

  slideContainer.style.transform = `translateX(-${IMG_WIDTH * index}px)`;
}
$("#next").addEventListener("click", () => {
  next();
});

$("#prev").addEventListener("click", () => {
  prev();
});
playAuto.addEventListener("click", function () {
  setInterval(() => {
    next();
  }, 1500);
});
