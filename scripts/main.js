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


  /* Portfolio: details popup window */

  // create Array having list of projects 
  const recentWork = document.querySelector('#recent-work');
  const ProjectObjects = recentWork.querySelectorAll('.card');
  const Projects = [];
  ProjectObjects.forEach(project => {
    const projectObject = {
      name: project.getAttribute('data-name'),
      description: project.querySelector('.project-title').textContent,
      featuredImage: project.getAttribute('data-image'),
      technologies: Array.from(project.querySelectorAll('li')),
      liveVersion: project.getAttribute('data-live'),
      source: project.getAttribute('data-source'),
    }
    Projects.push(projectObject);
  });
  // Projects.forEach(project => console.log(project.name));
  // create modal

});

//document.querySelectorAll(`[data-name]`);
//document.querySelectorAll(`[data-name='project-1']`);
