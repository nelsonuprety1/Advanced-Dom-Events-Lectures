// selecting elements
console.log(document.documentElement);
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie"> Got it! </button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
header.after(message);

// delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // new way
    message.remove();
    // old way of doing
    // message.parentElement.removeChild(message);
  });