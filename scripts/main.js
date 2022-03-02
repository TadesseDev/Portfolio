document.addEventListener('DOMContentLoaded', () => {
  const fullPage = document.querySelector('#main-mobile');
  const recentWorkSection = document.querySelector('#recent-work');
  const mobileMenuBar = document.querySelector('#app-bar-mobile');
  const menu = mobileMenuBar.querySelector('.menu');
  const logo = document.querySelector('.logo');
  const ListOfMenus = document.querySelector('#app-bar-menus');
  const toolBar = ListOfMenus.querySelector('#tool-bar');
  const humBurger = mobileMenuBar.querySelectorAll('.menu-icon')[0];
  const returnHome = document.querySelector('#closeMenu');
  const recentWorkModal = document.querySelector('#recent-work-modal');
  const mobileMenuBarHeight = mobileMenuBar.scrollHeight;
  const windowHeight = window.innerHeight;

  // dispose mobile menu
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

  const hideModal = () => {
    recentWorkModal.classList.add('display-none');
    recentWorkModal.innerHTML = `<div class="container"> 
    <span id="close-modal-desktop"></span> 
    <div id="feature"> <span id="close-modal">
    </span> </div> </div>`;
    fullPage.setAttribute('style', 'height: auto');
  };

  // this method will create and display modal from previously defined objects(project)
  const showModal = (project) => {
    const featureImage = document.createElement('img');
    const title = document.createElement('h2');
    const technology = document.createElement('div');
    const technoList = document.createElement('ul');
    const description = document.createElement('p');
    const links = document.createElement('div');
    const dispose = recentWorkModal.querySelector('#close-modal');
    const disposeDesktop = recentWorkModal.querySelector('#close-modal-desktop');
    links.innerHTML = `
<a href="${project.liveVersion || '#'}" target="blank">
  <span>See Live </span
  ><img src="./images/icons/go-live.svg" alt="see live" />
</a>
<a href="${project.source || '#'}" target="blank">
  <span>See Source </span>
  <img src="./images/icons/GitHub-white.svg" alt="see source" />
</a>`;
    project.technologies.forEach((technology) => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.setAttribute('href', '#');
      anchor.textContent = technology;
      li.appendChild(anchor);
      technoList.appendChild(li);
    });
    title.setAttribute('id', 'title');
    title.textContent = `${project.title} --- ${project.name}`;
    featureImage.setAttribute('src', project.featuredImage);
    featureImage.setAttribute('alt', project.featuredImageAlt);
    technology.setAttribute('id', 'technology');
    technology.appendChild(technoList);
    description.classList.add('description');
    links.classList.add('links');
    description.textContent = project.description;
    recentWorkModal.querySelector('#feature').appendChild(featureImage);
    recentWorkModal.querySelector('.container').appendChild(title);
    recentWorkModal.querySelector('.container').appendChild(technology);
    recentWorkModal.querySelector('.container').appendChild(description);
    recentWorkModal.querySelector('.container').appendChild(links);
    recentWorkModal.classList.remove('display-none');
    fullPage.setAttribute('style', `height: ${recentWorkModal.scrollHeight}px`);
    dispose.addEventListener('click', () => hideModal());
    disposeDesktop.addEventListener('click', () => hideModal());
  };

  // create Array having list of projects
  const featureImageType = window.innerWidth < 922 ? '-mobile.svg' : '.svg';
  const Projects = [
    {
      name: 'Rock-Paper-Scissors',
      title: 'project one',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: `./images/pictures/Snapshoot-Portfolio${featureImageType}`,
      featuredImageAlt: 'Rock-Paper-Scissors Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://winmac.ml/',
      source: 'https://github.com/Tadesse-Alemayehu/Rock-Paper-Scissors-Advance',
    },
    {
      name: 'Etch-A-Sketch',
      title: 'Project two(drawing board)',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: `./images/pictures/Snapshoot-Portfolio${featureImageType}`,
      featuredImageAlt: 'Etch-A-Sketch Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/Etch-A-Sketch/',
      source: 'https://github.com/Tadesse-Alemayehu/Etch-A-Sketch',
    },
    {
      name: 'Portfolio',
      title: 'Project three',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: `./images/pictures/Snapshoot-Portfolio${featureImageType}`,
      featuredImageAlt: 'Portfolio Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/Portfolio/',
      source: 'https://github.com/Tadesse-Alemayehu/Portfolio',
    },
    {
      name: 'faq-challenge',
      title: 'Project four. Designed for FAQ chalenges',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: `./images/pictures/Snapshoot-Portfolio${featureImageType}`,
      featuredImageAlt: 'faq-challenge Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/faq-challenge/',
      source: 'https://github.com/Tadesse-Alemayehu/faq-challenge/tree/tadesse-optional',
    },
    {
      name: 'YouTube-Clone',
      title: 'Project five. Microverse Bootcamp',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: `./images/pictures/Snapshoot-Portfolio${featureImageType}`,
      featuredImageAlt: 'YouTube-Clone Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/YouTube-Clone/',
      source: 'https://github.com/Tadesse-Alemayehu/YouTube-Clone',
    },
    {
      name: 'project-6',
      title: 'My Recent Works',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: `./images/pictures/Snapshoot-Portfolio${featureImageType}`,
      featuredImageAlt: 'Rock-Paper-Scissors Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/YouTube-Clone/',
      source: 'https://github.com/Tadesse-Alemayehu/YouTube-Clone',
    },
  ];

  const ActionButtons = recentWorkSection.querySelectorAll('.action');
  ActionButtons.forEach((actionButton, index) => actionButton.addEventListener('click', () => showModal(Projects[index])));
});
