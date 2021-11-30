import { sendAnalytics } from "./analytics.js";
import { openMenu, closeMenu } from "./menu.js";

const onMenuClick = event => {
  if (event.target.parentNode.getAttribute("aria-expanded") === "false") {
    new Promise((resolve, reject) => {
      openMenu();
      resolve();
    }).then(() => {
      sendAnalytics("open-menu");
    });
  } else {
    new Promise((resolve, reject) => {
      closeMenu();
      resolve();
    }).then(() => {
      sendAnalytics("close-menu");
    });
  }
};

document.getElementById("menu").addEventListener("click", onMenuClick);
