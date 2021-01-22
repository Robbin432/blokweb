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

//------------------Button-Hover---------------------------


//----------------------opacity-scroll-------------------------

//eslint-disable-next-line no-unused-vars
//window.addEventListener("scroll", function(event) {
//
//  var yOffset = window.scrollY;
////  console.log(yOffset);
//
//  if (yOffset>150){
//    document.getElementById("block1").style.opacity = "0";
//  }
//  else {
//    document.getElementById("block1").style.opacity = "1";
//  }
//
//  if (yOffset>700){
//    document.getElementById("block2").style.opacity = "1";
//  }
//  else {
//    document.getElementById("block2").style.opacity = "0";
//  }
//
//  if (yOffset>1500){
//    document.getElementById("block3").style.opacity = "1";
//  }
//  else {
//    document.getElementById("block3").style.opacity = "0";
//  }
//
//  if (yOffset>2348){
//    document.getElementById("block4").style.opacity = "1";
//  }
//  else {
//    document.getElementById("block4").style.opacity = "0";
//  }
//
//  if (yOffset>3134){
//    document.getElementById("block5").style.opacity = "1";
//  }
//  else {
//    document.getElementById("block5").style.opacity = "0";
//  }
//
//  if (yOffset>3915){
//    document.getElementById("block6").style.opacity = "1";
//  }
//  else {
//    document.getElementById("block6").style.opacity = "0";
//  }
//
//}, false);

// SCROLL OPACITY
var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
//console.log("Viewport hoogte: " + viewportHeight + "px");

var main = document.querySelector("main");


main.addEventListener("scroll", () => {
var visibleSection = (main.scrollTop / viewportHeight) + 1;
var visibleSectionRounded = Math.round((visibleSection + Number.EPSILON) * 10) / 10; // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary

// if (visibleSectionRounded == 1.5) {
// console.log(visibleSectionRounded);
// } else if (visibleSectionRounded == 2.5) {
// console.log(visibleSectionRounded);
// }

// console.log(visibleSectionRounded);


// VOOR ELKE SECTION IN DE MAIN (HOME)
var mainSectionLength = main.children.length;
// console.log(mainSectionLength);
for (var section = 0; section < mainSectionLength; section++) {
if (visibleSectionRounded == (section + 0.5)) {
//console.log("section (helft)" + section);
}

}

});

//var block1 = document.getElementById.('block1');
//
//if (section>1) {
//block1.style.opacity = 0;
//}
//else {
//block1.style.opacity = 1;
//}



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
