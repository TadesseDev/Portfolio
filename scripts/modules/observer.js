import resources from "./GLOBALS.js";

// using observer for lazy loading
export default function observerActions() {
  let options = {
    root: null, // set to default (browser view port)
    rootMargin: "0px",
    threshold: 0.05,
  };

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // set background image only once
        const card = entry.target;
        if (!card.style.backgroundImage) {
          const project = resources.Projects[card.getAttribute("id")];
          card.style.backgroundImage = `url('${project.cardImage}')`;
        }
        card.style.animation = "come-out-from-right 1s 1";
      }
    });
  }, options);

  const cards = Array.from(
    resources.recentWorkSection.getElementsByClassName("card")
  );
  cards.forEach((card) => {
    observer.observe(card);
  });
}
