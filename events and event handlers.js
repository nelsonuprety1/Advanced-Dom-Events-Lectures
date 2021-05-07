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