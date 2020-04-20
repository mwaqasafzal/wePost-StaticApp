
const toggleBtn = document.querySelector('.toggle-button');
const mobNavCloseBtn = document.getElementById('mobile-navabar__close');
const mobileNavbar = document.querySelector('.mobile-navbar');
const trackBtn = document.getElementById('track-btn');

toggleBtn.addEventListener('click', () => mobileNavbar.style.display = 'block');


mobNavCloseBtn.addEventListener('click', () => mobileNavbar.style.display = "none");

trackBtn.addEventListener('click', () => {
 
  // fetching data through api
  //inject to paticular block

  document.querySelector('.details').style.display='block';
})