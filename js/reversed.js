import { sendAnalytics } from "./fake-analytics.js";
import { openMenu, closeMenu } from "./menu.js";

const onMenuClick = event => {
  if (event.target.parentNode.getAttribute("aria-expanded") === "false") {
    openMenu();
    sendAnalytics("open-menu");
  } else {
    closeMenu();
    sendAnalytics("close-menu");
  }
};

document.getElementById("menu").addEventListener("click", onMenuClick);
