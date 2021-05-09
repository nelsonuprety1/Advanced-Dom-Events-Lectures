// Lifecycle DOM events
// DomContentLoaded
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM Tree Built', e);
});

// load event
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// before unload
window.addEventListener('beforeunload', function (e) {
   e.preventDefault();
   console.log(e);
   e.returnValue = '';
 });