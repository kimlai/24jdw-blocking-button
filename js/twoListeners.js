import { sendAnalytics } from "./analytics.js";
import { openMenu, closeMenu } from "./menu.js";

const toggleMenu = event => {
  if (event.target.parentNode.getAttribute("aria-expanded") === "false") {
    openMenu();
  } else {
    closeMenu();
  }
};

const sendMenuAnalytics = event => {
  if (event.target.parentNode.getAttribute("aria-expanded") === "true") {
    sendAnalytics("open-menu");
  } else {
    sendAnalytics("close-menu");
  }
};

document.getElementById("menu").addEventListener("click", toggleMenu);
document.getElementById("menu").addEventListener("click", sendMenuAnalytics);
