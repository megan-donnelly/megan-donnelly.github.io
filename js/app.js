/* Top Nav Scrolled */

const isAnyPartOfElementInViewport = (el, nav) => {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const vertInView =
    rect.top - 80 <= windowHeight && rect.top + rect.height >= 80;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  nav.classList.toggle('active', vertInView && horInView);
};

const isElementInViewport = (el, nav) => {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const vertInView =
    rect.top + 505 <= windowHeight && rect.top + rect.height >= 80;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  nav.classList.toggle('active', vertInView && horInView);
};

window.addEventListener('scroll', function() {
  const nav = document.getElementById('topnav');
  nav.classList.toggle('scrolled', window.pageYOffset > nav.offsetHeight);

  const navAbout = document.getElementById('nav-about');
  const sectionAbout = document.getElementById('section-about');

  const navProjects = document.getElementById('nav-projects');
  const sectionProjects = document.getElementById('section-projects');

  const navExperience = document.getElementById('nav-experience');
  const sectionExperience = document.getElementById('section-experience');

  const navContact = document.getElementById('nav-contact');
  const sectionContact = document.getElementById('section-contact');

  isElementInViewport(sectionAbout, navAbout);
  isAnyPartOfElementInViewport(sectionProjects, navProjects);
  isAnyPartOfElementInViewport(sectionExperience, navExperience);
  isElementInViewport(sectionContact, navContact);
});

/* Smooth Scroll to Sections */
const scrollToDiv = id => {
  const elmnt = document.getElementById(id);
  elmnt.scrollIntoView({ behavior: 'smooth' });
};

/*  Toggle between showing and hiding the navigation menu
links when the user clicks on the hamburger menu / bar icon */
const menu = document.getElementById('nav-links');
const navbar = document.getElementById('topnav');
const hamburger = () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
  navbar.classList.toggle('active');
};

/* Hide and show nav links spending on view */
window.addEventListener('resize', function() {
  if (window.innerWidth >= 870) {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});

/* Expand and collapse experience page sections */
const acc = document.getElementsByClassName('accordion');
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.display === 'none') {
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
    }
    let caret = this.firstElementChild;
    caret.classList.toggle('arrow-left');
    caret.classList.toggle('arrow-down');
  });
}
