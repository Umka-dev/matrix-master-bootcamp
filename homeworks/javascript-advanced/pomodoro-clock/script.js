// Assignment - Pomodoro Clock
// Your assignment is to build a Pomodoro Clock, first of all, what is a Pomodoro Clock? Check this Wikipedia page for a nice description. (You may need to work in a team of two in order to make this assignment)
// Points of interest:
// Objective: Build an app that is functionally similar to this.
// Fulfill the USER STORIES below. Use whichever libraries or APIs you need. Give it your own personal style.
// User Story: I can start a 25-minute Pomodoro, and the timer will go off once 25 minutes have elapsed.
// User Story: I can reset the clock for my next Pomodoro.
// User Story: I can customize the length of each Pomodoro.

const getTime = (id) => parseInt(document.getElementById(id).textContent, 10);

// Keep time in minutes
let sessionMinutes = getTime('session-time');
let breakMinutes = getTime('break-time');

// Convert time to seconds
let timeLeft = sessionMinutes * 60;

let mode = 'session';
let timer = null;

// Format sec to MM:SS
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

const updateDisplay = () => {
  document.getElementById('session-time').textContent = sessionMinutes;
  document.getElementById('break-time').textContent = breakMinutes;

  const displayTimer = document.getElementById('display-timer');
  displayTimer.textContent = `${mode.toUpperCase()} -- ${formatTime(timeLeft)}`;

  displayTimer.classList.toggle('text-success', mode === 'session');
  displayTimer.classList.toggle('text-danger', mode === 'break');
};

const startTimer = () => {
  if (timer) return;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      if (mode === 'session') {
        mode = 'break';
        timeLeft = breakMinutes * 60; // switch to break
      } else {
        mode = 'session';
        timeLeft = sessionMinutes * 60; // switch to session
      }
    }
    updateDisplay();
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
  timer = null;
};

const resetTimer = () => {
  stopTimer();
  sessionMinutes = getTime('session-time');
  breakMinutes = getTime('break-time');
  timeLeft = sessionMinutes * 60;
  mode = 'session';
  updateDisplay();
};

const changeTime = (type, amount) => {
  if (type === 'session') {
    sessionMinutes = Math.max(1, sessionMinutes + amount);
    if (mode === 'session') timeLeft = sessionMinutes * 60;
  } else {
    breakMinutes = Math.max(1, breakMinutes + amount);
    if (mode === 'break') timeLeft = breakMinutes * 60;
  }
  updateDisplay();
};

// Events
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

document
  .getElementById('session-increase')
  .addEventListener('click', () => changeTime('session', 1));
document
  .getElementById('session-decrease')
  .addEventListener('click', () => changeTime('session', -1));
document
  .getElementById('break-increase')
  .addEventListener('click', () => changeTime('break', 1));
document
  .getElementById('break-decrease')
  .addEventListener('click', () => changeTime('break', -1));

updateDisplay();
