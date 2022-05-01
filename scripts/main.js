import global from './modules/GLOBALS.js';
import { disposeMobileMenu, hideModal, showModal, createRecentWorkCard, manageNavigation } from './modules/Functions.js'
document.addEventListener('DOMContentLoaded', () => {

  global.humBurger.addEventListener('click', () => {
    global.listOfMenus.classList.toggle('hide');
    global.listOfMenus.classList.toggle('show');
    global.logo.text = '';
    global.listOfMenus.setAttribute('style', `top:${global.mobileMenuBarHeight}px`);
    global.toolBar.setAttribute('style', `min-height: ${global.windowHeight - global.mobileMenuBarHeight}px`);
    const cancel = document.createElement('li');
    cancel.classList.add('menu-icon');
    const img = document.createElement('img');
    img.setAttribute('src', './images/icons/Cancel.svg');
    img.setAttribute('alt', 'close');
    cancel.appendChild(img);
    global.humBurger.classList.add('hide');
    global.menu.appendChild(cancel);
    cancel.addEventListener('click', disposeMobileMenu);
    global.listOfMenus.querySelectorAll('li').forEach((element) => {
      element.addEventListener('click', disposeMobileMenu);
    });
  });
  global.returnHome.addEventListener('click', disposeMobileMenu);

  global.Projects.forEach((project) => {
    global.cardContainer.appendChild(createRecentWorkCard(project));
  });

  const navigationIcon = manageNavigation();
  global.goUp.addEventListener('click', (e) => {
    navigationIcon(e.currentTarget);
  });
  global.godown.addEventListener('click', (e) => {
    navigationIcon(e.currentTarget);
  });
});
