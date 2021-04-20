// js for the mobile part of the navbar, sourced from same website as in the index.html file. this makes the class change for the div that contains that navbar when clicked on, leading to the menu dropping because the added class has the css for the actual display.
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
