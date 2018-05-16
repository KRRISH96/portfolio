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
//Function that changes active state on click
function activateLink() {
  navLinks.forEach(link=>link.classList.remove('active'));
  this.classList.add('active');
  navigation.classList.add('toggle');
  menuButton.classList.remove('fa-times');
}
navLinks.forEach(link=>link.addEventListener('click',activateLink));

// Changes active state of navigation links on scroll
const sections = document.querySelectorAll('section');
let sectionIdHeights = [];
sections.forEach(section => {
  sectionIdHeights.push({[section.id]:section.offsetTop+1});
})
function activeOnScroll() {
  let scrollPos = window.scrollY+75;
  sectionIdHeights.map((section, index) => {
    if(scrollPos>Object.values(section)[0]) {
      navLinks.forEach(link=>link.classList.remove('active'));
      document.querySelector(`#main-nav ul li a[href^="#${Object.keys(section)[0]}"]`).classList.add('active');
    }
  })
}
window.addEventListener('scroll', activeOnScroll);
