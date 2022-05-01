const myProjects = [
  {
    name: 'To do lists',
    title: 'To do list organizer',
    description: 'This is a single-page application (SPA) that you can use to organize your daily schedule. You can create a task ✍🏼, mark a task as completed ✔, update its details ⚒, or delete it 🚩. All this without needing to reload a page. ✔',
    featuredImage: './images/pictures/project-snapshots/PNG/To-Do-list.PNG',
    featuredImageAlt: 'To-Do-list.PNG Image',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://tadesse-alemayehu.github.io/To-Do-list/',
    source: 'https://github.com/Tadesse-Alemayehu/To-Do-list',
  },
  {
    name: 'Awesome book project with ES6 syntax.',
    title: 'Awesome book project with ES6 syntax.',
    description: 'Hello there  ✋🏼 . You like reading. here is an awesome single page  App to help you organize your books',
    featuredImage: './images/pictures/project-snapshots/PNG/Awesome-Books-ES6.PNG',
    featuredImageAlt: 'Awesome-Books-ES6.PNG Image',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://tadesse-alemayehu.github.io/Awesome-Books-ES6/',
    source: 'https://github.com/Tadesse-Alemayehu/Awesome-Books-ES6',
  },
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
    featuredImage: './images/pictures/project-snapshots/PNG/LEARN-TO-CODE.PNG',
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
    featuredImage: './images/pictures/project-snapshots/PNG/Rock-Paper-Scissors-Advance.PNG',
    featuredImageAlt: 'Rock-Paper-Scissors-Advance.PNG Image',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://tadesse-alemayehu.github.io/Rock-Paper-Scissors-Advance/',
    source: 'https://github.com/Tadesse-Alemayehu/Rock-Paper-Scissors-Advance',
  },
  {
    name: 'Etch-A-Sketch',
    title: 'Project two(drawing board)',
    description: 'So you love to draw? Good! This is an Etch-a-sketch project and you can create an awesome drawing board with your pre-defined pixel range and draw your picture.',
    featuredImage: './images/pictures/project-snapshots/PNG/Etch-A-Sketch.PNG',
    featuredImageAlt: 'Etch-A-Sketch.PNG Image',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://tadesse-alemayehu.github.io/Etch-A-Sketch/',
    source: 'https://github.com/Tadesse-Alemayehu/Etch-A-Sketch',
  },
  {
    name: 'YouTube-Clone',
    title: 'Project five. Microverse Bootcamp',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.In varius
          turpis id metus vehicula, a faucibus neque vehicula.Etiam
          tincidunt ante et dui efficitur ultricies.Nulla ex felis, mattis
          eget lacinia sed, molestie at nisi.Nulla iaculis mi finibus augue
          pharetra, quis pellentesque metus hendrerit.Vestibulum tristique
          sapien eu velit porttitor semper.Aliquam sed elementum enim.
          Suspendisse ultrices quis enim at gravida.Ut lectus urna, cursus
          et tellus in, faucibus lacinia urna.Morbi nibh purus, vehicula at`,
    featuredImage: './images/pictures/project-snapshots/PNG/YouTube-Clone.PNG',
    featuredImageAlt: 'YouTube-Clone Image',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://tadesse-alemayehu.github.io/YouTube-Clone/',
    source: 'https://github.com/Tadesse-Alemayehu/YouTube-Clone',
  },
];
export default {
  fullPage: document.querySelector('#main-mobile'),
  navigationSection: document.querySelector('#navigation'),
  heading: document.querySelector('#heading'),
  recentWorkSection: document.querySelector('#recent-work'),
  aboutMeSection: document.querySelector('#about-me'),
  contactSection: document.querySelector('#contact-form'),
  footerSection: document.querySelector('#footer'),
  mobileMenuBar: document.querySelector('#app-bar-mobile'),
  menu: document.querySelector('#app-bar-mobile').querySelector('.menu'),
  logo: document.querySelector('.logo'),
  listOfMenus: document.querySelector('#app-bar-menus'),
  toolBar: document.querySelector('#app-bar-menus'),
  humBurger: document.querySelector('#app-bar-mobile').querySelectorAll('.menu-icon')[0],
  returnHome: document.querySelector('#closeMenu'),
  recentWorkModal: document.querySelector('#recent-work-modal'),
  cardContainer: document.querySelector('#recent-work').querySelector('.card-flow'),
  mobileMenuBarHeight: document.querySelector('#app-bar-mobile').scrollHeight,
  windowHeight: window.innerHeight,
  goUp: document.getElementById('go-up'),
  godown: document.getElementById('go-down'),
  sections: [
    document.querySelector('#navigation'), document.querySelector('#heading'), document.querySelector('#recent-work'),
    document.querySelector('#about-me'), document.querySelector('#contact-form'), document.querySelector('#footer')],
  Projects: myProjects
};
