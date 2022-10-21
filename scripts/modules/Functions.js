import global from "./GLOBALS.js";
import { get } from "../api/index.js";
import { observeCard } from "./observer.js";
export function disposeMobileMenu() {
  global.listOfMenus.classList.toggle("hide", true);
  global.listOfMenus.classList.toggle("show", false);
  global.closeMobileMenu.classList.toggle("hide", true);
  global.humBurger.classList.toggle("hide", false);
  global.logo.text = "Welcome";
}

export const hideModal = () => {
  global.recentWorkModal.classList.add("hide");
  global.recentWorkModal.innerHTML = `<div class="container">
    <div id="feature"> <span id="close-modal-desktop"></span></div> </div>`;
  global.fullPage.setAttribute("style", "height: auto");
};

export const showModal = (project) => {
  const featureImage = document.createElement("img");
  const title = document.createElement("h2");
  const technology = document.createElement("div");
  const technoList = document.createElement("ul");
  const description = document.createElement("p");
  const links = document.createElement("div");
  const disposeDesktop = global.recentWorkModal.querySelector(
    "#close-modal-desktop"
  );
  links.innerHTML = `
<a href="${project.liveVersion || "#"}" target="blank">
  <span>See Live </span
  ><img src="./images/icons/go-live.svg" alt="see live" />
</a>
<a href="${project.source || "#"}" target="blank">
  <span>See Source </span>
  <img src="./images/icons/GitHub-white.svg" alt="see source" />
</a>`;
  project.technologies.forEach((technology) => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    anchor.textContent = technology;
    li.appendChild(anchor);
    technoList.appendChild(li);
  });
  title.setAttribute("id", "title");
  title.textContent = `${project.title} --- ${project.name}`;
  featureImage.setAttribute("src", project.featuredImage);
  featureImage.setAttribute("alt", project.featuredImageAlt);
  technology.setAttribute("id", "technology");
  technology.appendChild(technoList);
  description.classList.add("description");
  links.classList.add("links");
  description.textContent = project.description;
  global.recentWorkModal.querySelector("#feature").appendChild(featureImage);
  global.recentWorkModal.querySelector(".container").appendChild(title);
  global.recentWorkModal.querySelector(".container").appendChild(technology);
  global.recentWorkModal.querySelector(".container").appendChild(description);
  global.recentWorkModal.querySelector(".container").appendChild(links);
  global.recentWorkModal.classList.remove("hide");
  global.fullPage.setAttribute(
    "style",
    `height: ${global.recentWorkModal.scrollHeight}px`
  );
  disposeDesktop.addEventListener("click", () => hideModal());
};

export const createRecentWorkCard = (project) => {
  const card = document.createElement("div");
  card.setAttribute("id", project.id);
  card.classList.add("card");
  let text = `<div class="text">
  <h2 class="project-title">${project.name}</h2>
 <nav class="tags"><ul>`;
  get(`projects/${project.id}/technologies`)
    .then((technologies) => {
      technologies.forEach((tech) => {
        text += `<li><a href='#'/>${tech}</li>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
  text += `</ul></nav><button type='submit' class='action'>
  See Project</button></div>`;

  card.insertAdjacentHTML("afterbegin", text);
  card
    .querySelector(".action")
    .addEventListener("click", () => showModal(project));
  return card;
};

export const manageNavigation = () => {
  let linkSection = 0;
  global.goUp.href = `#${global.sections[linkSection].getAttribute("id")}`;
  global.godown.href = `#${global.sections[linkSection + 1].getAttribute(
    "id"
  )}`;
  global.goUp.classList.toggle("hide", true);
  return (element) => {
    setTimeout(() => {
      if (element === global.goUp) {
        linkSection -= 1;
      } else {
        linkSection += 1;
      }
      if (linkSection <= 0) {
        linkSection = 1;
        global.goUp.classList.toggle("hide", true);
      } else if (linkSection >= global.sections.length - 1) {
        linkSection -= 2;
        global.godown.classList.toggle("hide", true);
      } else {
        global.goUp.classList.toggle("hide", false);
        global.godown.classList.toggle("hide", false);
      }
      global.goUp.href = `#${global.sections[linkSection - 1].getAttribute(
        "id"
      )}`;
      global.godown.href = `#${global.sections[linkSection + 1].getAttribute(
        "id"
      )}`;
    }, 10);
  };
};
export const renderProjectToTheDom = () => {
  get("projects")
    .then((projects) => {
      console.log(projects);
      global.Projects = projects.data;
      projects.data.forEach((project) => {
        const card = createRecentWorkCard(project);
        global.cardContainer.appendChild(card);
        observeCard(card);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const DOMReadyActions = () => {
  // add event for then hamburger button to be able to show the menu
  global.humBurger.addEventListener("click", () => {
    global.listOfMenus.classList.toggle("hide", false);
    global.listOfMenus.classList.toggle("show", true);
    global.logo.text = "";
    global.listOfMenus.setAttribute(
      "style",
      `top:${global.mobileMenuBarHeight}px`
    );
    global.toolBar.setAttribute(
      "style",
      `min-height: ${global.windowHeight - global.mobileMenuBarHeight}px`
    );
    global.closeMobileMenu.classList.toggle("hide", false);
    global.humBurger.classList.add("hide");
  });
  // Add events to DOM elements capable of disposing mobile menu.
  global.returnHome.addEventListener("click", disposeMobileMenu);
  global.closeMobileMenu.addEventListener("click", disposeMobileMenu);
  global.listOfMenus.querySelectorAll("li").forEach((element) => {
    element.addEventListener("click", disposeMobileMenu);
  });
  const width = window.innerWidth;
  // for better user experience reload page on changing window size
  window.addEventListener("resize", (event) => {
    const newWidth = event.target.innerWidth;
    if (
      (width < 700 && newWidth >= 700) ||
      (width > 700 && newWidth <= 700) ||
      (width < 900 && newWidth >= 900) ||
      (width > 900 && newWidth <= 900)
    ) {
      window.location.reload();
    }
  });

  // add go Up and Down buttons functionality using function closure.
  const navigationIcon = manageNavigation();
  global.goUp.addEventListener("click", (e) => {
    navigationIcon(e.currentTarget);
  });
  global.godown.addEventListener("click", (e) => {
    navigationIcon(e.currentTarget);
  });
};
// export { disposeMobileMenu, hideModal, showModal, createRecentWorkCard, manageNavigation };
