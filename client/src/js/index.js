import { Workbox } from "workbox-window";
import Editor from "./editor";
import "./database";
import "../css/style.css";
import logoImg from "../images/logo.png";
import "./dbSaveButton"

const appDisplay = document.getElementById("main");
const loaderDisplay = document.getElementById("loader");

const main = document.querySelector("#main");
main.innerHTML = "";

const errorLoadSpinner = () => {
  appDisplay.style.display = "none";
  loaderDisplay.style.display = "flex";
};

// Check if service workers are supported
if ("serviceWorker" in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox("/sw.js");
  workboxSW.register();
} else {
  console.error("Service workers are not supported in this browser.");
}

const loadUpDisplay = () => {
  appDisplay.style.display = "none";
  loaderDisplay.style.display = "flex";

  setTimeout(() => {
    loaderDisplay.innerHTML = '<div class="loading-spinner"></div>';
  }, 3000);

  setTimeout(() => {
    appDisplay.style.display = "block";
    loaderDisplay.style.display = "none";

    const editor = new Editor();

    if (typeof editor === "undefined") {
      errorLoadSpinner();
    }
  }, 5000);
};

document.getElementById("logo-img").src = logoImg;
document.getElementById("loading-logo").src = logoImg;

loadUpDisplay();
