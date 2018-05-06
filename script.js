// Toggle menu
const menuButton = document.querySelector('.fa-bars');
const navigation = document.querySelector('.overlay');
function displayMenu() {
  if(navigation.className.includes("toggle")) {
    navigation.classList.remove('toggle');
    menuButton.classList.add('fa-times');
  } else {
    navigation.classList.add('toggle');
    menuButton.classList.remove('fa-times');
  }
}
menuButton.addEventListener('click', displayMenu);

// Adds header background on scroll
const head = document.querySelector('header');
function headerBackground() {
  if(window.scrollY>150) {
    head.classList.add('header-bg');
  } else {
    head.classList.remove('header-bg');
  }
}
window.addEventListener('scroll', headerBackground);

// Adds active class to navigation links on click and removes toggle class as well
const navLinks = document.querySelectorAll('#main-nav ul li a[href^="#"]');
const sectionId = document.querySelectorAll('section');
const htmlBody = document.querySelector('html body');
//Function that changes active state on click
function activateLink() {
  navLinks.forEach(link=>link.classList.remove('active'));
  this.classList.add('active');
  navigation.classList.add('toggle');
  menuButton.classList.remove('fa-times');
}
navLinks.forEach(link=>link.addEventListener('click',activateLink));
