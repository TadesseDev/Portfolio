document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBar = document.querySelector('#app-bar-mobile');
    const logo = document.querySelector('.logo');
    const ListOfMenus = document.querySelector('#app-bar-menus');
    const toolBar = ListOfMenus.querySelector('#tool-bar');
    const humBurger = mobileMenuBar.querySelectorAll('.menu-icon')[0];
    const cancel = mobileMenuBar.querySelectorAll('.menu-icon')[1];
    const returnHome = document.querySelector('#closeMenu');
    const mobileMenuBarHeight = mobileMenuBar.scrollHeight;
    const windowHeight = window.innerHeight;
    humBurger.addEventListener('click', () => {
        ListOfMenus.classList.toggle('display-none');
        ListOfMenus.classList.toggle('show');
        logo.text = "";
        ListOfMenus.style = `position: absolute; top:${mobileMenuBarHeight}px`;
        toolBar.style = `min-height: ${windowHeight - mobileMenuBarHeight - 40}px`
        humBurger.classList.add('display-none');
        cancel.classList.remove('display-none');

    });

});