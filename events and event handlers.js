// types of events and event handlers
const h1 = document.querySelector('h1');

const alerth1 = function(e){
  alert('addEventListener: Great! You are reading the heading');

  // h1.removeEventListener('mouseenter',alerth1)
}
// mouseenter is just like hover
// new way addevenetlistener
h1.addEventListener('mouseenter', alerth1);

setTimeout(()=>h1.removeEventListener('mouseenter',alerth1), 3000);

// another way of adding event listener
// this is old way
// h1.onmouseenter = function(e){
//   alert('addEventListener: Great! You are reading the heading');
// };
// Javascript events have a very important property
// They have a so called capturing phase and a bubbling phase

// rgb(255,255,255)
const randomInt = (min,max) => 
Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => 
`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// console.log(randomColor(0,255));
document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target,e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target,e.currentTarget);
  // to catch event during capturing phase we used true as a  third parameter
});