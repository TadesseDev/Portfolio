const sectionsObserver = (sections, callback) => {
  const observer = new IntersectionObserver(entry => {
    entry.forEach(element => {
      callback(element);
    });
  });
  sections.forEach(section => {
    observer.observe(section);
  });
}

export default sectionsObserver;