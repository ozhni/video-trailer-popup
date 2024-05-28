"use strict";

const btnEl = document.querySelector(".btn");
const mainContainerEl = document.querySelector(".main-container");
const trailerContainerEl = document.querySelector(".trailer-container");
const closebtnEl = document.querySelector("#close");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", function () {
  //   mainContainerEl.classList.add("active");
  trailerContainerEl.classList.remove("active");
  videoEl.play();
});

closebtnEl.addEventListener("click", function () {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
