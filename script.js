
const toggleBtn=document.querySelector('.toggle-button');
const mobNavCloseBtn=document.getElementById('mobile-navabar__close');
const mobileNavbar=document.querySelector('.mobile-navbar');


toggleBtn.addEventListener('click',()=>mobileNavbar.style.display='block');


mobNavCloseBtn.addEventListener('click',()=>mobileNavbar.style.display="none");