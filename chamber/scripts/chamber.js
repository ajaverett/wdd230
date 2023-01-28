// I wrote (with great pain) all this javascript. tbh it helped menuIcon, I just am not used to it which is what made it terrrible

const closeIcon = document.querySelector(".closeIcon");
const menuIcon  = document.querySelector(".menuIcon");
const sideMenuToggle  = document.querySelector("#side-menu");


const toggleMenu = () => {
  closeIcon.classList.toggle('hide');
  menuIcon.classList.toggle('hide');
  sideMenuToggle.classList.toggle('hide');
  sideMenuToggle.classList.toggle('fixed');
};

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

window.addEventListener("resize", function() {
  if (window.innerWidth > 640) {
    if(sideMenuToggle.classList[0]=="fixed"){
      sideMenuToggle.classList.remove('fixed');
      sideMenuToggle.classList.add('hide');
      menuIcon.classList.remove('hide');
      closeIcon.classList.add('hide');
    };
  }
});