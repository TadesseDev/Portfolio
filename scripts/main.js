import global from './modules/GLOBALS.js';
import { disposeMobileMenu, renderProjectToTheDom, manageNavigation } from './modules/Functions.js';

document.addEventListener('DOMContentLoaded', () => {
  // add event for then hamburger button to be able to show the menu
  global.humBurger.addEventListener('click', () => {
    global.listOfMenus.classList.toggle('hide');
    global.listOfMenus.classList.toggle('show');
    global.logo.text = '';
    global.listOfMenus.setAttribute('style', `top:${global.mobileMenuBarHeight}px`);
    global.toolBar.setAttribute('style', `min-height: ${global.windowHeight - global.mobileMenuBarHeight}px`);
    global.closeMobileMenu.classList.toggle('hide', false);
    global.humBurger.classList.add('hide');
  });

  // Add events to DOM elements capable of disposing mobile menu.
  global.returnHome.addEventListener('click', disposeMobileMenu);
  global.closeMobileMenu.addEventListener('click', disposeMobileMenu);
  global.listOfMenus.querySelectorAll('li').forEach((element) => {
    element.addEventListener('click', disposeMobileMenu);
  });

  // create project card and add it to the dom car/project container.
  renderProjectToTheDom();
  // add go Up and Down buttons functionality using function closure.
  const navigationIcon = manageNavigation();
  global.goUp.addEventListener('click', (e) => {
    navigationIcon(e.currentTarget);
  });
  global.godown.addEventListener('click', (e) => {
    navigationIcon(e.currentTarget);
  });
});
