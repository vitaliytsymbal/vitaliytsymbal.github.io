var myHeading = document.querySelector('tt');
myHeading.textContent = 'Hello world!';
document.getElementById("test").addEventListener("click", function( event ) {
    // display the current click count inside the clicked div
    event.target.innerHTML = "click count: " + event.detail;
  }, false);

