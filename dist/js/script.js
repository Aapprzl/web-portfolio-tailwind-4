// Navbar Fixed

window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNavbar = header.offsetTop;

  if (window.pageYOffset > fixedNavbar) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};


// Humberger

const hamburger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamberger-active');
  navMenu.classList.toggle('hidden');
});