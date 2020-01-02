/* Top Nav Scrolled */
window.addEventListener('scroll', function() {
  const nav = document.getElementById('topnav');
  nav.classList.toggle('scrolled', window.pageYOffset > nav.offsetHeight);
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
    navbar.classList.remove('active');
  } else {
    menu.style.display = 'block';
    navbar.classList.add('active');
  }
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
    let caret = this.firstElementChild;
    if (panel.style.display === 'block' || panel.style.display === '') {
      panel.style.display = 'none';
      caret.classList.remove('arrow-down');
      caret.classList.add('arrow-left');
    } else {
      panel.style.display = 'block';
      caret.classList.remove('arrow-left');
      caret.classList.add('arrow-down');
    }
  });
}
