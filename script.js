"use strict";

//Variables
const button = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const cross = document.querySelector(".cross");
const mainButton = document.querySelector(".first-button");

//Close Window function
const closeWindow = () => {
  button.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Open Windo
mainButton.addEventListener("click", () => {
  button.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

//Close Window
cross.addEventListener("click", closeWindow);
overlay.addEventListener("click", closeWindow);

//Escape key setup
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!button.classList.contains("hidden")) {
      closeWindow();
    }
  }
});
