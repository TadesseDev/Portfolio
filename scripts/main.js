document.addEventListener('DOMContentLoaded', () => {
  const fullPage = document.querySelector('#main-mobile');
  const recentWorkSection = document.querySelector('#recent-work');
  const mobileMenuBar = document.querySelector('#app-bar-mobile');
  const menu = mobileMenuBar.querySelector('.menu');
  const logo = document.querySelector('.logo');
  const listOfMenus = document.querySelector('#app-bar-menus');
  const toolBar = listOfMenus.querySelector('#tool-bar');
  const humBurger = mobileMenuBar.querySelectorAll('.menu-icon')[0];
  const returnHome = document.querySelector('#closeMenu');
  const recentWorkModal = document.querySelector('#recent-work-modal');
  const cardContainer = recentWorkSection.querySelector('.card-flow');
  const mobileMenuBarHeight = mobileMenuBar.scrollHeight;
  const windowHeight = window.innerHeight;

  // dispose mobile menu
  function disposeMobileMenu() {
    listOfMenus.classList.toggle('hide');
    listOfMenus.classList.toggle('show');
    logo.text = 'Welcome';
    humBurger.classList.remove('hide');
    menu.lastChild.remove();
  }

  humBurger.addEventListener('click', () => {
    listOfMenus.classList.toggle('hide');
    listOfMenus.classList.toggle('show');
    logo.text = '';
    listOfMenus.setAttribute('style', `position: absolute; top:${mobileMenuBarHeight}px`);
    toolBar.setAttribute('style', `min-height: ${windowHeight - mobileMenuBarHeight - 40}px`);
    const cancel = document.createElement('li');
    cancel.classList.add('menu-icon');
    const img = document.createElement('img');
    img.setAttribute('src', './images/icons/Cancel.svg');
    img.setAttribute('alt', 'close');
    cancel.appendChild(img);
    humBurger.classList.add('hide');
    menu.appendChild(cancel);
    cancel.addEventListener('click', disposeMobileMenu);
    listOfMenus.querySelectorAll('li').forEach((element) => {
      element.addEventListener('click', disposeMobileMenu);
    });
  });
  returnHome.addEventListener('click', disposeMobileMenu);

  /* Portfolio: details popup window */

  const hideModal = () => {
    recentWorkModal.classList.add('hide');
    recentWorkModal.innerHTML = `<div class="container"> 
    <span id="close-modal-desktop"></span> 
    <div id="feature">  </div> </div>`;
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
    recentWorkModal.classList.remove('hide');
    fullPage.setAttribute('style', `height: ${recentWorkModal.scrollHeight}px`);
    disposeDesktop.addEventListener('click', () => hideModal());
  };

  const createRecentWorkCard = (project) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const text = document.createElement('div');
    text.classList.add('text');
    const projectName = document.createElement('h2');
    projectName.classList.add('project-title');
    projectName.textContent = project.name;
    text.appendChild(projectName);

    const tags = document.createElement('nav');
    tags.classList.add('tags');
    const ul = document.createElement('ul');
    project.technologies.forEach((tech) => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.textContent = tech;
      li.appendChild(anchor);
      ul.appendChild(li);
    });
    tags.appendChild(ul);
    text.appendChild(tags);

    const button = document.createElement('button');
    button.classList.add('action');
    button.type = 'submit';
    button.textContent = 'See Project';
    button.addEventListener('click', () => showModal(project));
    text.appendChild(button);

    card.appendChild(text);

    return card;
  };

  // create Array having list of projects
  const featureImageType = window.innerWidth < 922 ? '-mobile.svg' : '.svg';
  const Projects = [
    {
      name: 'Learn to code',
      title: 'Learn to code',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: `https://user-images.githubusercontent.com/69077061/157525702-966cc141-e7a1-4a41-99e1-d31efcfcaf57.png`,
      featuredImageAlt: 'Learn to code project image',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveVersion: 'https://tadesse-alemayehu.github.io/LEARN-TO-CODE/',
      source: 'https://github.com/Tadesse-Alemayehu/LEARN-TO-CODE',
    },
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

  Projects.forEach((project) => {
    cardContainer.appendChild(createRecentWorkCard(project));
  });
});
