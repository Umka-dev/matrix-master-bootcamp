// Get access to Submit button
const submitBtn = document.getElementById('submitAll');

// Add event listner to submit button
submitBtn.addEventListener('click', addNewData);

// Create array with input ids
const inputIds = ['episodes', 'names', 'roles'];

// Function to create new DOM element - a new table row
function createTableRow(inputValues) {
  // Create a new table row
  const newRow = document.createElement('tr');

  // For loop to create 'new cells', put 'input values' into them, and append them with the created before table row
  for (let i = 0; i < inputValues.length; i++) {
    const newCell = document.createElement('td');
    newCell.textContent = inputValues[i] || `new ${inputIds[i]}`;
    newRow.appendChild(newCell);
  }
  //Return the created row with data inside
  return newRow;
}

// Function to get and save the inputs data
function addNewData() {
  // Array to keep 'input values'
  const inputValues = [];
  // Get values from the inputs using ids
  // Push them to the inputValiuesArr
  for (let i = 0; i < inputIds.length; i++) {
    // Get elements with particular ids
    const inputElement = document.getElementById(inputIds[i]);
    // Push element values to 'input values' array
    inputValues.push(inputElement.value);
    //Clean input fields after submit
    inputElement.value = '';
  }
  // Get and save the filled new row element from createTableRow function which gets 'input values' as the props
  const newRowElement = createTableRow(inputValues);

  // Get table body element by id
  const tableBody = document.getElementById('myTableBody');

  // Append row to the table body
  tableBody.appendChild(newRowElement);
}
