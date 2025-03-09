// Assignment 3: Countdown Timer
// Your assignment is to build a TIMER using jQuery as in the pictures below

// What you have to do:
//  I can start a 25-minute, and the timer will go off once 25 minutes have elapsed.
//  I can reset the clock for my next.
//  I can customize the length of each time.
//  I can get a sound notification when the time is finished.

// Function that gets time as a string from element by ID
const getTime = (id) => parseInt($(id).text(), 10);

// Keep time in minutes
let hours = getTime('#hours');
let minutes = getTime('#minutes');
let seconds = getTime('#seconds');
console.log(`Hours: ${hours}, min: ${minutes}, sec: ${seconds}`);

// Audio file
const beep = new Audio('./sounds/beep.mp3');

// Timer is not started
let timer = null;

// Convert time to seconds
let defaultTime = hours * 3600 + minutes * 60 + seconds;
let timeLeft = defaultTime;
console.log('Time left (sec): ', timeLeft);

// Function to display current time in a format HH:MM:SS
const formatTime = (sec) => {
  hours = Math.floor(sec / 3600);
  minutes = Math.floor((sec - hours * 3600) / 60);
  seconds = sec % 60;

  return `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }:${seconds < 10 ? '0' + seconds : seconds}`;
};

// Function to update display
const updateDisplay = () => {
  $('#displayTimer').text(formatTime(timeLeft));
};
updateDisplay();

// Function to countdown the time after start button clicked
const startTimer = () => {
  if (timer) return;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timer); // stop timer
      beep.play(); // play audio
      return;
    }
    updateDisplay();
    console.log('Time left (sec): ', timeLeft);
  }, 1000); //count down the time every second
};

// Function to stop timer
const stopTimer = () => {
  clearInterval(timer);
  timer = null;
};

// Function to reset timer
const resetTimer = () => {
  stopTimer();
  timeLeft = defaultTime;
  updateDisplay();
};

// Function to hide time edit form
const hideForm = () => {
  $('form#editForm').hide();
};
hideForm();

// Function show form for time edit
const showForm = () => {
  $('#editForm').show();
};

// Function to edit and update time
const editTime = (e) => {
  e.preventDefault();
  let newHours = $('#inputHours').val();
  let newMinutes = $('#inputMinutes').val();
  let newSeconds = $('#inputSeconds').val();
  console.log(`Hours: ${newHours}, min: ${newMinutes}, sec: ${newSeconds}`);
  defaultTime = newHours * 3600 + newMinutes * 60 + newSeconds;
  timeLeft = defaultTime;
  console.log('New time left (sec): ', defaultTime);
  $('#editedTimer').text(formatTime(timeLeft));
  updateDisplay();
  $('#inputHours').val(0);
  $('#inputMinutes').val(0);
  $('#inputSeconds').val(0);
  hideForm();
};

// Start button and click event
$('#start').click(() => startTimer());
$('#reset').click(() => resetTimer());
$('#edit').click(() => showForm());
$('#submitForm').click(editTime);
