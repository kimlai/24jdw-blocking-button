import { sendAnalyticsInBatches } from "./analytics.js";
import { openMenu, closeMenu } from "./menu.js";

const onMenuClick = event => {
  if (event.target.parentNode.getAttribute("aria-expanded") === "false") {
    openMenu();
    sendAnalyticsInBatches("open-menu");
  } else {
    closeMenu();
    sendAnalyticsInBatches("open-menu");
  }
};

document.getElementById("menu").addEventListener("click", onMenuClick);
