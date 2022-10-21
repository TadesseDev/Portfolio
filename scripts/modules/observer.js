import resources from "./GLOBALS.js";
const options = {
  root: null, // set to default (browser view port)
  rootMargin: "0px",
  threshold: 0.05,
};
// using observer for lazy loading and better user experience
export const observeCard = (card) => {
  const workCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // set background image only once
        const card = entry.target;
        if (!card.style.backgroundImage) {
          const project = resources.Projects.filter(
            (project) => project.id == card.getAttribute("id")
          )[0];
          console.log(project);
          card.style.backgroundImage = `url('${project.mobile_pic}')`;
        }
        card.style.animation = "come-out-from-right 1s 1";
        card.style.maxHeight = "max-content";
      }
    });
  }, options);
  workCardsObserver.observe(card);
};
export default function observerActions() {
  const popFromRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.maxHeight = "100%";
        entry.target.style.animation = "come-out-from-left 1s 1";
      }
    });
  }, options);

  const desktopAppBarObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          resources.toolBar.setAttribute(
            "style",
            `
        background: rgba(65, 113, 29, 0.18);
    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
    backdrop-filter: blur(5.3px);`
          );
        } else {
          resources.toolBar.setAttribute("style", ``);
        }
      });
    },
    { ...options, threshold: 1 }
  );

  const aboutMeCards = Array.from(
    resources.aboutMeSection.getElementsByClassName("card")
  );
  aboutMeCards.forEach((card) => {
    popFromRightObserver.observe(card);
  });
  popFromRightObserver.observe(
    resources.aboutMeSection.getElementsByClassName("text")[0]
  );

  popFromRightObserver.observe(resources.contactSection);

  if (window.innerWidth > 700) {
    desktopAppBarObserver.observe(resources.primary);
  }
}
