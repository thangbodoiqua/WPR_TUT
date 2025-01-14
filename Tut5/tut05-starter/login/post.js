/*
 * Sending POST request with fetch
 */
'use strict';
(function() {
  const API_URL = 'https://hanustartup.org/wpr/api/login.php';

  window.addEventListener('load', init);

  /**
   * Setup the sign-in button on initial page load
   */
  function init() {
    // Add an event listener to the form to handle sign-in
    id("login-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from refreshing the page
      signIn(); // Call the signIn function
    });
  }

  /**
   * Signs the user in based on username and password inputs
   * Sends the POST request to the API and displays the response.
   */
  async function signIn() {
    let username = id("username").value;
    let password = id("password").value;

    // Prepare the data to be sent in the POST request body
    let formData = new FormData();
    formData.append('user', username);
    formData.append('password', password);
    
    try {
      let response = await fetch(API_URL, {
        method: 'POST',
        body: formData
      });

      response = await statusCheck(response); // Check the response status
      let resultText = await response.text(); // Get the plain text response

      // Display the result in the #response container
      id("response").textContent = resultText;
    } catch (error) {
      // If there's an error, display it in the #response container
      id("response").textContent = `Error: ${error.message}`;
    }
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

})();