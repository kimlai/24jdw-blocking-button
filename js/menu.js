import { expensiveComputation } from "./utils.js";

const menu = document.getElementById("menu");

const openMenu = () => {
  expensiveComputation(3); // pour que la fonction apparaisse dans les profiles
  menu.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
  expensiveComputation(3); // pour que la fonction apparaisse dans les profiles
  menu.setAttribute("aria-expanded", "false");
};

export { openMenu, closeMenu };
