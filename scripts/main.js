import { DOMReadyActions, renderProjectToTheDom } from "./modules/Functions.js";
import observer from "./modules/observer.js";
document.addEventListener("DOMContentLoaded", () => {
  DOMReadyActions();
  renderProjectToTheDom();
  observer();
});
