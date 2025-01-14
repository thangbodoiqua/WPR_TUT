/*
 * Capitalizing text of all paragraphs
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    let allElements = document.querySelectorAll('p');
    console.log(allElements)
  allElements.forEach(el => {
      el.textContent = el.textContent.toUpperCase();
  });
  }
  

})();