// sidebar
var isNavOpen = false;

function toggleNav() {
  if (isNavOpen) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width =" 250px";
  document.getElementById("main").style.marginRight = "200px";
  isNavOpen = true;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  isNavOpen = false;
}
// /side bar