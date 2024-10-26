/**
 * JS for working with JSON exercise
 */

"use strict";
(function() {
  window.addEventListener("load", init());

  /**
   * Sets up event listeners for the page elements
   * - Adds a click event listener to the "loadDataButton"
   *   that triggers the loadData function
   */
  function init() {
    let btn = id("loadDataButton");
    btn.addEventListener("click", loadData)
  }

  /**
   * Handles loading and displaying JSON data
   * - Defines a JSON object with sample data
   *    { name: "Alice", age: 30, country: "USA" },
        { name: "Bob", age: 25, country: "UK" },
        { name: "Charlie", age: 35, country: "Canada" }
   * - Shows a countdown timer before displaying the data
   * - Calls the displayData function to present the data after the countdown
   */
  function loadData() {
    // Define the JSON object with sample data
    const data = {
      "person": [
        { name: "Alice", age: 30, country: "USA" },
        { name: "Bob", age: 25, country: "UK" },
        { name: "Charlie", age: 35, country: "Canada" }
      ]
  }
    
    // Prepare to show countdown and data
    let i = 3;
    let content = id("dataContainer");
    var itv = setInterval(() => {
      if (i == 0) { 
        clearInterval(itv);
        displayData(data);
      } else {
        content.innerHTML = `Loading data in <span style = \"color: red;\">${i}</span> seconds..`;
        i--;  
      }
      
    },1000)

    // Update countdown every second

  }

  /**
   * Displays the JSON data in the data container
   * - Clears any existing content in the container
   * - Iterates over each item in the JSON data and creates
   *   a new div element for each item with formatted text
   * - Appends each div to the container
   * @param {object} data - The JSON data to be displayed
   */
  function displayData(data) {
    console.log("hello")
  }

  /**
   * Retrieves the DOM element with the specified ID
   * @param {string} id - The ID of the element to retrieve
   * @returns {object} - The DOM element with the specified ID
   */
  function id(id) {
    return document.getElementById(id);
  }
  
  /**
   * Creates a new DOM element with the specified tag name
   * @param {string} tagName - The name of the tag for the new element
   * @returns {object} - The newly created DOM element
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();
