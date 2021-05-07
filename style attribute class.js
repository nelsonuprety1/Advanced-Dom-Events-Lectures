// styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// atributes
const logo = document.querySelector('.nav__logo');


logo.alt = 'Beautiful minimalist logo';
// Non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attributes
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c','g');
logo.classList.remove('c','s');
logo.classList.toggle('c','s');
logo.classList.contains('c','s');

// dont use
// logo.className = 'nelson'