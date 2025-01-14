/**
 * JS for working with JSON exercise
 */

"use strict";
(function() {

  // Initialize event listeners when the page loads
  window.onload = init;

  /**
   * Sets up event listeners for the page elements
   * - Adds a click event listener to the "loadDataButton"
   *   that triggers the loadData function
   */
  function init() {
    // Lấy button và gán sự kiện click
    id("loadDataButton").addEventListener("click", loadData);
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
    const jsonData = {
      "items": [
        { "name": "Alice", "age": 30, "country": "USA" },
        { "name": "Bob", "age": 25, "country": "UK" },
        { "name": "Charlie", "age": 35, "country": "Canada" }
      ]
    };

    // Countdown logic
    let countdown = 3;
    const dataContainer = id("dataContainer");

    // Clear any previous content
    dataContainer.innerHTML = `Loading data in ${countdown} seconds...`;

    // Countdown every second
    const countdownInterval = setInterval(() => {
      countdown--;
      dataContainer.innerHTML = `Loading data in ${countdown} seconds...`;

      // When countdown reaches 0, display data
      if (countdown === 0) {
        clearInterval(countdownInterval); // Stop the countdown
        displayData(jsonData); // Call function to display the data
      }
    }, 1000);
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
    const dataContainer = id("dataContainer");
    dataContainer.innerHTML = ''; // Clear any previous content

    // Iterate over each item in the JSON data
    data.items.forEach(item => {
      const itemDiv = gen("div");
      itemDiv.classList.add("data-item");

      // Format and add text for each item
      itemDiv.innerHTML = `<strong>Name:</strong> ${item.name} <br>
                           <strong>Age:</strong> ${item.age} <br>
                           <strong>Country:</strong> ${item.country}`;

      // Append the new div to the container
      dataContainer.appendChild(itemDiv);
    });
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