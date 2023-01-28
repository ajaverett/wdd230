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

document.getElementById("last_updated").innerHTML = "Last Updated: " + new Date(document.lastModified).toLocaleString() + "...  WDD230";

var d = new Date();
var year = d.getFullYear();
document.getElementById("current_year").innerHTML = year;

console.log(document.lastModified)