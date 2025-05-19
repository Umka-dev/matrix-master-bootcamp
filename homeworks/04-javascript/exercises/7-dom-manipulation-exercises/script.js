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
function checkValidation() {
  let correctName = 'Mark';
  let correctPassword = 'm6712k';

  let userName = document.getElementById('userName').value;
  console.log(userName);

  let password = document.getElementById('userPassword').value;
  console.log(password);

  if (userName === correctName && password === correctPassword) {
    alert('Form is submitted!');
  } else alert('Wrong user name or password!');
}
