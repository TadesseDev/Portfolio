import global from './GLOBALS.js';

export function disposeMobileMenu() {
  global.listOfMenus.classList.toggle('hide', true);
  global.listOfMenus.classList.toggle('show', false);
  global.closeMobileMenu.classList.toggle('hide', true);
  global.humBurger.classList.toggle('hide', false);
  global.logo.text = 'Welcome';
}

export const hideModal = () => {
  global.recentWorkModal.classList.add('hide');
  global.recentWorkModal.innerHTML = `<div class="container"> 
    <div id="feature"> <span id="close-modal-desktop"></span></div> </div>`;
  global.fullPage.setAttribute('style', 'height: auto');
};

export const showModal = (project) => {
  const featureImage = document.createElement('img');
  const title = document.createElement('h2');
  const technology = document.createElement('div');
  const technoList = document.createElement('ul');
  const description = document.createElement('p');
  const links = document.createElement('div');
  const disposeDesktop = global.recentWorkModal.querySelector('#close-modal-desktop');
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
  global.recentWorkModal.querySelector('#feature').appendChild(featureImage);
  global.recentWorkModal.querySelector('.container').appendChild(title);
  global.recentWorkModal.querySelector('.container').appendChild(technology);
  global.recentWorkModal.querySelector('.container').appendChild(description);
  global.recentWorkModal.querySelector('.container').appendChild(links);
  global.recentWorkModal.classList.remove('hide');
  global.fullPage.setAttribute('style', `height: ${global.recentWorkModal.scrollHeight}px`);
  disposeDesktop.addEventListener('click', () => hideModal());
};

export const createRecentWorkCard = (project) => {
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

export const manageNavigation = () => {
  let linkSection = 0;
  global.goUp.href = `#${global.sections[linkSection].getAttribute('id')}`;
  global.godown.href = `#${global.sections[linkSection + 1].getAttribute('id')}`;
  global.goUp.classList.toggle('hide', true);
  return (element) => {
    setTimeout(() => {
      if (element === global.goUp) {
        linkSection -= 1;
      } else {
        linkSection += 1;
      }
      if (linkSection <= 0) {
        linkSection = 1;
        global.goUp.classList.toggle('hide', true);
      } else if (linkSection >= global.sections.length - 1) {
        linkSection -= 2;
        global.godown.classList.toggle('hide', true);
      } else {
        global.goUp.classList.toggle('hide', false);
        global.godown.classList.toggle('hide', false);
      }
      console.log('happening');
      global.goUp.href = `#${global.sections[linkSection - 1].getAttribute('id')}`;
      global.godown.href = `#${global.sections[linkSection + 1].getAttribute('id')}`;
    }, 10);
  };
};
// export { disposeMobileMenu, hideModal, showModal, createRecentWorkCard, manageNavigation };
