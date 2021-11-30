import { expensiveComputation } from "./utils.js";

const menu = document.getElementById("menu");

const openMenu = () => {
  expensiveComputation(); // pour que la fonction apparaisse dans les profiles
  menu.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
  expensiveComputation(); // pour que la fonction apparaisse dans les profiles
  menu.setAttribute("aria-expanded", "false");
};

export { openMenu, closeMenu };
