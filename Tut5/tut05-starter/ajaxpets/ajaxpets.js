"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Initializes the event listeners for the radio buttons.
   * When a radio button is selected, the `makeRequest` function is called
   * to fetch and display the appropriate pet images.
   */
  function init() {
    let animalButtons = qsa("input[name='animal']");
    animalButtons.forEach(button => {
      button.addEventListener("change", makeRequest);
    });
  }

  /**
   * Makes an AJAX request to the Pets API based on the selected animal type
   * (either 'kitty' or 'puppy'). The images are fetched and displayed in the
   * #pictures div.
   */
  function makeRequest() {
    let selectedAnimal = qs("input[name='animal']:checked").value; // Get the selected animal type
    let apiUrl = `https://hanustartup.org/wpr/api/pets/index.php?animal=${selectedAnimal}`;

    fetch(apiUrl)
      .then(statusCheck)
      .then(res => res.text())
      .then(displayImages)
      .catch(console.error);
  }

  /**
   * Displays the fetched pet images in the #pictures div.
   * Clears any previously displayed images and appends new ones.
   * @param {string} responseText - Plain text response containing the image URLs, separated by new lines.
   */
  function displayImages(responseText) {
    let picturesDiv = id("pictures");
    picturesDiv.innerHTML = ''; // Clear any previous images

    let imageUrls = responseText.split("\n").filter(url => url.trim() !== ""); // Remove any empty lines
    imageUrls.forEach(url => {
      let img = document.createElement("img");
      img.src = url;
      img.alt = "Pet Image";
      picturesDiv.appendChild(img);
    });
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object} DOM object matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();