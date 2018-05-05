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
  if(document.documentElement.scrollTop>150) {
    head.classList.add('header-bg');
  } else {
    head.classList.remove('header-bg');
  }
  // console.log(home.offsetTop+e.offsetHeight);
  // console.log(home.offsetHeight);
}
window.addEventListener('scroll', headerBackground)
