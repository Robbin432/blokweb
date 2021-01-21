/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//eslint-disable-next-line no-unused-vars





//----------------------nav-on-click-------------------------
//eslint-disable-next-line no-unused-vars
function openMenu() {
    document.getElementById("navmenu").classList.toggle("menushown") + document.getElementsById("navbutton").classList.toggle("navbuttonopen");

}

//  setTimeout(function() {
//    document.activeElement.blur();
//  }, 300);




//----------------------opacity-scroll-------------------------

//eslint-disable-next-line no-unused-vars
window.addEventListener("scroll", function(event) {

  var yOffset = window.scrollY;
  console.log(yOffset);

  if (yOffset>150){
    document.getElementById("block1").style.opacity = "0";
  }
  else {
    document.getElementById("block1").style.opacity = "1";
  }

  if (yOffset>700){
    document.getElementById("block2").style.opacity = "1";
  }
  else {
    document.getElementById("block2").style.opacity = "0";
  }

  if (yOffset>1500){
    document.getElementById("block3").style.opacity = "1";
  }
  else {
    document.getElementById("block3").style.opacity = "0";
  }

  if (yOffset>2348){
    document.getElementById("block4").style.opacity = "1";
  }
  else {
    document.getElementById("block4").style.opacity = "0";
  }

  if (yOffset>3134){
    document.getElementById("block5").style.opacity = "1";
  }
  else {
    document.getElementById("block5").style.opacity = "0";
  }

  if (yOffset>3915){
    document.getElementById("block6").style.opacity = "1";
  }
  else {
    document.getElementById("block6").style.opacity = "0";
  }



}, false);






//var offset = window.pageYOffset;

//eslint-disable-next-line no-unused-vars
//function myFunction() {
//  if (yOffset>100){
//    document.getElementById("block1").style.opacity = "0";
//  }
//  else {
//    document.getElementById("block1").style.opacity = "1";
//  }
//}
////
//console.log(offset);
