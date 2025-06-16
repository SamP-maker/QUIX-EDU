/*
====================
JavaScript Events
====================

Events are actions that happen in the browser.
JavaScript can "listen" for these events and "respond" to them.

Common events:
- click
- mouseover / mouseout
- keydown / keyup
- input / change
- submit
*/

// Example 1: Click Event
let btn = document.getElementById("myButton");

btn.addEventListener("click", function () {
    console.log("Button was clicked!");
});

// Example 2: Mouse Over
let box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "lightblue";
});

// Example 3: Key Down
document.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
});

// Example 4: Input Field Change
let input = document.getElementById("nameInput");

input.addEventListener("input", function () {
    console.log("Current value:", input.value);
});

// Example 5: Form Submit (Prevent Default)
let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops the form from refreshing the page
    console.log("Form submitted!");
});
