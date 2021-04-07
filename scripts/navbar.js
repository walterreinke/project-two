// JS for the accordion taken from the w3schools link on the coal html file. the first part is creating the hover effect and changing the color of the button only when it is hovered. the second part is what is showing the panel when the button is clicked.
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// this creates the animation for the accordion, code taken from same w3schools link. it is adding height to the panel when it is clicked on through the height that is created by the paragraph showing on screen.
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// js for the mobile navbar, from same website as in the index.html file. this code is saying that if the hamburger menu is in block display, which it always is unless someone clicks on it, then it will be hidden. once it is not in that display, it will be shown. 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
