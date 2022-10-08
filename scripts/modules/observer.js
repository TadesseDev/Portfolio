import resources from "./GLOBALS.js";

// using observer for lazy loading and better user experience
export default function observerActions() {
  const options = {
    root: null, // set to default (browser view port)
    rootMargin: "0px",
    threshold: 0.05,
  };

  const workCardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // set background image only once
        const card = entry.target;
        if (!card.style.backgroundImage) {
          const project = resources.Projects[card.getAttribute("id")];
          card.style.backgroundImage = `url('${project.cardImage}')`;
        }
        card.style.animation = "come-out-from-right 1s 1";
        card.style.maxHeight = "max-content";
      }
    });
  }, options);

  const cards = Array.from(
    resources.recentWorkSection.getElementsByClassName("card")
  );
  cards.forEach((card) => {
    workCardObserver.observe(card);
  });

  const popFromRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.maxHeight = "100%";
        entry.target.style.animation = "come-out-from-left 1s 1";
      }
    });
  }, options);
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
}
