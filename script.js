 // JavaScript function to navigate to a specific section of the webpage
 function navigateTo(sectionId) {
  document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth' // Smooth scrolling behavior
  });
}

// JavaScript function to toggle the menu on smaller screens
// Dispatch the 'clicked-menu' event when a button with id 'menu-button' is clicked
document.getElementById('menu-button').addEventListener('click', function() {
    var event = new Event('clicked-menu');
    document.dispatchEvent(event);
});
