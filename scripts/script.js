/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//eslint-disable-next-line no-unused-vars



//----------------------nav-on-click-------------------------
//eslint-disable-next-line no-unused-vars

var navbutton = document.getElementById("navbutton");
var navmenu = document.getElementById("navmenu");

navbutton.addEventListener("click", function() {

    navmenu.classList.toggle("menushown");

});


//----------------------opacity-scroll-------------------------

// SCROLL OPACITY
var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
//console.log("Viewport hoogte: " + viewportHeight + "px");

var main = document.querySelector("main");


main.addEventListener("scroll", () => {
var visibleSection = (main.scrollTop / viewportHeight) + 1;
var visibleSectionRounded = Math.round((visibleSection + Number.EPSILON) * 10) / 10; // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary


// VOOR ELKE SECTION IN DE MAIN (HOME)
var mainSectionLength = main.children.length;
// console.log(mainSectionLength);
for (var section = 0; section < mainSectionLength; section++) {
if (visibleSectionRounded == (section + 0.5)) {
console.log("section (helft)" + section);
}

}

});
