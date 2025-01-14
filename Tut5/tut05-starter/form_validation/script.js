/**
 * JS for dynamic form validation exercise
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up necessary functionality when page loads
   */
  function init() {
    // Add event listener to form submit button

    // Add event listeners to input fields for real-time validation
    
  }

  /**
   * Validates the entire form on submit
   * @param {Event} event - the event that triggered this function
   */
  function validateForm(event) {
    // Prevent form from submitting if there are validation errors

    let isValid = validateName() & validateEmail() & validatePassword() & validateConfirmPassword();
    // After successful validation, display a 3-second countdown and then show a success message.

  }

  /**
   * Starts a 3-second countdown and displays a success message
   */
  function startCountdown() {
    
  }

  /**
   * Validates the name field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateName() {



  }

  /**
   * Validates the email field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateEmail() {

  }

  /**
   * Validates the password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validatePassword() {

  }

  /**
   * Validates the confirm password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateConfirmPassword() {
 
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated with selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a DOM object from the given tag name.
   * @param {string} tagName - the name of the element to be created.
   * @returns {object} - DOM object of the specified tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
