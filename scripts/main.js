import { DOMReadyActions, renderProjectToTheDom, manageNavigation } from './modules/Functions.js';

document.addEventListener('DOMContentLoaded', () => {
  DOMReadyActions();
  renderProjectToTheDom();
});
