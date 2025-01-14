/*
 * Sending POST request with fetch
 */
'use strict';
(function() {
  const API_URL = '';

  window.addEventListener('load', init);

  /**
   * TODO - setup the sign-in button on initial page load
   */
  function init() {
   
    qs("form").addEventListener('submit', (event) => {
      event.preventDefault();
      signIn();
    })
    
  }

  /**
   * TODO
   * signIn - Signs the user in based on username and password inputs
   */
  function signIn() {
    let userName = id("username").value;
    let passWord = id("password").value;
    let show = id("response");
    let url = "https://hanustartup.org/wpr/api/login.php"
    let formData = new FormData();
    formData.append('user', userName);
    formData.append('password', passWord);
    fetch("https://hanustartup.org/wpr/api/login.php", {

      method: 'POST',
      // Specify the request method
      body: formData
    }).then(statusCheck)
      .then(response => response.text())
      .then(data => {
        id("response").innerHTML = data;
      })
      .catch();

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
   * Returns the element that has the matches the selector passed.
   * @param {string} selector - selector for element
   * @return {object} DOM object associated with selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();
