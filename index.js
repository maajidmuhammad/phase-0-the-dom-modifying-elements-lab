// Write your code here!
var mainElement = document.getElementById('main');
mainElement.parentNode.removeChild(mainElement);

// Create a new 'h1' element
var newHeader = document.createElement('h1');

// Set the id of the new 'h1' element to 'victory'
newHeader.setAttribute('id', 'victory');

// Set the text content of the new 'h1' element
var yourName = "John Doe"; // Replace 'John Doe' with your desired name
newHeader.textContent = yourName + " is the champion";

// Append the new 'h1' element to the body or any other desired parent element
document.body.appendChild(newHeader);