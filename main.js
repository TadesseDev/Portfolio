import { DOMReadyActions, renderProjectToTheDom } from './modules/Functions.js';

document.addEventListener('DOMContentLoaded', () => {
  DOMReadyActions();
  renderProjectToTheDom();
});
