import { sendAnalyticsInDistributedBatches } from "./analytics.js";
import { openMenu, closeMenu } from "./menu.js";

const onMenuClick = event => {
  if (event.target.parentNode.getAttribute("aria-expanded") === "false") {
    openMenu();
    sendAnalyticsInDistributedBatches("open-menu");
  } else {
    closeMenu();
    sendAnalyticsInDistributedBatches("open-menu");
  }
};

document.getElementById("menu").addEventListener("click", onMenuClick);
