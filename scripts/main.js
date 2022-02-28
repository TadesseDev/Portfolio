document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBar = document.querySelector('#app-bar-mobile');
    const ListOfMenus = document.querySelector('#app-bar-menus');
    const humBurger = mobileMenuBar.querySelector('.menu');
    humBurger.addEventListener('click', () => {
        ListOfMenus.classList.toggle('display-none');
        console.log("clicked");
    });
});