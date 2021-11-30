import { sendAnalyticsWithRequestIdleCallback } from "./analytics.js";
import { openMenu, closeMenu } from "./menu.js";

const onMenuClick = event => {
  if (event.target.parentNode.getAttribute("aria-expanded") === "false") {
    openMenu();
    sendAnalyticsWithRequestIdleCallback("open-menu");
  } else {
    closeMenu();
    sendAnalyticsWithRequestIdleCallback("close-menu");
  }
};

document.getElementById("menu").addEventListener("click", onMenuClick);
