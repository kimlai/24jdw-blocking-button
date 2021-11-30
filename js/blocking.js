import { sendAnalytics } from "./analytics.js";
import { openMenu, closeMenu } from "./menu.js";

const onMenuClick = event => {
  if (event.target.parentNode.getAttribute("aria-expanded") === "false") {
    sendAnalytics("open-menu");
    openMenu();
  } else {
    sendAnalytics("close-menu");
    closeMenu();
  }
};

document.getElementById("menu").addEventListener("click", onMenuClick);
