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

const option = {  threshold: 0.3 };

const observer = new IntersectionObserver(observeCallback , option);



window.document.addEventListener("DOMContentLoaded" , ()=>{
  sections.forEach((section) => {
    section.classList.add("show")
  });
})

window.document.addEventListener("scroll" , ()=>{
  sections.forEach((section) => {
  observer.observe(section);
});
})

