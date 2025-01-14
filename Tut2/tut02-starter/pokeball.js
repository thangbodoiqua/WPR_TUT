/*
 * Pokeball Exercise
 *
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked.
 */
"use strict";
(function() {

  window.addEventListener("load", init);
  /**
   * init - setup the demo button to change the image on click.
   */
  function init() {
    let button = document.getElementById("demo-btn");
    button.addEventListener("click", changeImage);
  }
  function changeImage() {

    let images = document.querySelectorAll("img");
    
    images.forEach(img => {
      img.src = "mystery.gif"; 
    });
  }
})();