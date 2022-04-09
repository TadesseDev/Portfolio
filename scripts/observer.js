const sectionsObserver = (sections, callback) => {
  const observer = new IntersectionObserver(entry => {
    entry.forEach(element => {
      if (element.isIntersecting) {
        callback(element.target);
      }
    });
  });
  sections.forEach(section => {
    observer.observe(section);
  });
}

export default sectionsObserver;