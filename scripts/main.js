document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBar = document.querySelector('#app-bar-mobile');
  const menu = mobileMenuBar.querySelector('.menu');
  const logo = document.querySelector('.logo');
  const ListOfMenus = document.querySelector('#app-bar-menus');
  const toolBar = ListOfMenus.querySelector('#tool-bar');
  const humBurger = mobileMenuBar.querySelectorAll('.menu-icon')[0];
  const returnHome = document.querySelector('#closeMenu');
  const mobileMenuBarHeight = mobileMenuBar.scrollHeight;
  const windowHeight = window.innerHeight;
  function disposeMobileMenu() {
    ListOfMenus.classList.toggle('display-none');
    ListOfMenus.classList.toggle('show');
    logo.text = 'Welcome';
    humBurger.classList.remove('display-none');
    menu.lastChild.remove();
  }
  humBurger.addEventListener('click', () => {
    ListOfMenus.classList.toggle('display-none');
    ListOfMenus.classList.toggle('show');
    logo.text = '';
    ListOfMenus.style = `position: absolute; top:${mobileMenuBarHeight}px`;
    toolBar.style = `min-height: ${windowHeight - mobileMenuBarHeight - 40}px`;
    const cancel = document.createElement('li');
    cancel.classList.add('menu-icon');
    const img = document.createElement('img');
    img.setAttribute('src', './images/icons/Cancel.svg');
    img.setAttribute('alt', 'close');
    cancel.appendChild(img);
    humBurger.classList.add('display-none');
    menu.appendChild(cancel);
    cancel.addEventListener('click', disposeMobileMenu);
    ListOfMenus.querySelectorAll('li').forEach((element) => {
      element.addEventListener('click', disposeMobileMenu);
    });
  });
  returnHome.addEventListener('click', disposeMobileMenu);
});