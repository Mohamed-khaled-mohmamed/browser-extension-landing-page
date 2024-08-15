// lazy animation
const sections = document.querySelectorAll('.section');

const observeCallback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.add('lazy-animation');
      entry.target.classList.remove('show');
    }
  });
};

const option = { rootMargin: '22%', threshold: 1 };

const observer = new IntersectionObserver(observeCallback , option);

sections.forEach((section) => {
  observer.observe(section);
});
