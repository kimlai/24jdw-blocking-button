import { sendAnalytics } from "./fake-analytics.js";
import { openMenu, closeMenu } from "./menu.js";

const onMenuClick = event => {
  if (event.target.parentNode.getAttribute("aria-expanded") === "false") {
    openMenu();
    setTimeout(() => {
      sendAnalytics("open-menu");
    }, 20);
  } else {
    closeMenu();
    setTimeout(() => {
      sendAnalytics("close-menu");
    }, 20);
  }
};

document.getElementById("menu").addEventListener("click", onMenuClick);
