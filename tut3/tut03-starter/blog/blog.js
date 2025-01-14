/**
 * JS for blog post section exercise
 */

"use strict";
(function() {

  window.addEventListener("load", init);
  let count = 0;

  function init() {
    qs("button").addEventListener("click", addEntry);
    id('posts').addEventListener("dblclick", rmvBlog)
  }
  
  /**
   * TODO
   * adds a blog entry to the blog post page
   */
  function addEntry() {
    count++;
    if (count >= 3) {
      disable();
    }
    rmvBlog();
    let heading = gen("h2");
    let Content = gen("p")
    heading.innerText = id('date').value;
    Content.innerText = id('entry').value;
    id('posts').appendChild(heading)
    id('posts').appendChild(Content)
  }
  function disable(){
    qs('button').innerHTML = "disabled!";
    qs('button').removeEventListener("click", addEntry);;
  }
  function rmvBlog() {
    let post = id('posts');
    post.innerHTML = "";
  }
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }
  
  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
  
  /**
   * Returns a DOM object from the given tag name.
   * @param {string} tagName - the name of the element to be created.
   * @returns {object} a DOM object of the specified tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();