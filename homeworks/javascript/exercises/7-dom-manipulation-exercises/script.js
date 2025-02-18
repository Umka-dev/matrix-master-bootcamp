// Exercise-1
function changeText() {
  document.getElementById('textDiv').textContent = 'Changed text!';
}

// Exercise-2
function addItem() {
  const newListItem = document.createElement('li');
  newListItem.textContent = 'new task';
  document.querySelector('ul').appendChild(newListItem);
}

// Exercise-3
function changeSource() {
  document
    .querySelector('img')
    .setAttribute(
      'src',
      'https://www.piclumen.com/wp-content/uploads/2024/10/piclumen-upscale-after.webp'
    );
}

// Exercise-4
