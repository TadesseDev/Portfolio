export default {
  fullPage: document.querySelector("#main-container"),
  navigationSection: document.querySelector("#navigation"),
  heading: document.querySelector("#heading"),
  primary: document
    .querySelector("#heading")
    .getElementsByClassName("primary")[0],
  recentWorkSection: document.querySelector("#recent-work"),
  aboutMeSection: document.querySelector("#about-me"),
  contactSection: document.querySelector("#contact-form"),
  footerSection: document.querySelector("#footer"),
  mobileMenuBar: document.querySelector("#app-bar-mobile"),
  menu: document.querySelector("#app-bar-mobile").querySelector(".menu"),
  logo: document.querySelector(".logo"),
  listOfMenus: document.querySelector("#app-bar-menus"),
  toolBar: document.querySelector("#app-bar-menus"),
  humBurger: document
    .querySelector("#app-bar-mobile")
    .querySelectorAll(".menu-icon")[0],
  returnHome: document.querySelector("#closeMenu"),
  closeMobileMenu: document
    .querySelector("#app-bar-mobile")
    .querySelectorAll(".menu-icon")[1],
  recentWorkModal: document.querySelector("#recent-work-modal"),
  cardContainer: document
    .querySelector("#recent-work")
    .querySelector(".card-flow"),
  mobileMenuBarHeight: document.querySelector("#app-bar-mobile").scrollHeight,
  windowHeight: window.innerHeight,
  goUp: document.getElementById("go-up"),
  godown: document.getElementById("go-down"),
  sections: [
    document.querySelector("#navigation"),
    document.querySelector("#heading"),
    document.querySelector("#recent-work"),
    document.querySelector("#about-me"),
    document.querySelector("#contact-form"),
    document.querySelector("#footer"),
  ],
  Projects: [],
};
