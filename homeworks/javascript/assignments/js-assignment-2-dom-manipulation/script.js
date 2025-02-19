const btn = document.addEventListener('submit', handleClick);

function handleClick(e) {
  //Prevent the form from submitting and refreshing the page
  e.preventDefault();

  // Get form element by id my-form
  const myForm = document.querySelector('#my-form');
  // Style my form background color to red
  myForm.style.backgroundColor = 'red';

  //Access the <body> element with querySelector
  const myBodyElement = document.querySelector('body');
  // Add a new class called bg-dark to the <body> element
  myBodyElement.classList.add('bg-dark');

  // Access the last <li>
  const lastItem = document.querySelector('.items').lastElementChild;
  // Create new <h1> element in the DOM
  const newHeading = document.createElement('h1');
  // Set text content for h1
  newHeading.textContent = 'Hello';
  // Replace <li> with <h1> in the DOM
  lastItem.replaceWith(newHeading);
}
