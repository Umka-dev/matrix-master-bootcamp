// Assignment - Pomodoro Clock
// Your assignment is to build a Pomodoro Clock, first of all, what is a Pomodoro Clock? Check this Wikipedia page for a nice description. (You may need to work in a team of two in order to make this assignment)
// Points of interest:
// Objective: Build an app that is functionally similar to this.
// Fulfill the USER STORIES below. Use whichever libraries or APIs you need. Give it your own personal style.
// User Story: I can start a 25-minute Pomodoro, and the timer will go off once 25 minutes have elapsed.
// User Story: I can reset the clock for my next Pomodoro.
// User Story: I can customize the length of each Pomodoro.

const getTime = (id) => parseInt(document.getElementById(id).textContent, 10);

let sessionTime = getTime('session-time');
let breakTime = getTime('break-time');
let timeLeft = sessionTime;
let mode = 'session';
let timer = null;

const updateDisplay = () => {
  document.getElementById('session-time').textContent = sessionTime;
  document.getElementById('break-time').textContent = breakTime;

  const displayTimer = document.getElementById('display-timer');
  displayTimer.textContent = `${mode.toUpperCase()}: ${timeLeft} sec`;

  displayTimer.classList.toggle('text-success', mode === 'session');
  displayTimer.classList.toggle('text-danger', mode === 'break');
};

const startTimer = () => {
  if (timer) return;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      mode = mode === 'session' ? 'break' : 'session';
      timeLeft = mode === 'session' ? sessionTime : breakTime;
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
  sessionTime = getTime('session-time');
  breakTime = getTime('break-time');
  timeLeft = sessionTime;
  mode = 'session';
  updateDisplay();
};

const changeTime = (type, amount) => {
  if (type === 'session') {
    sessionTime = Math.max(1, sessionTime + amount);
    if (mode === 'session') timeLeft = sessionTime;
  } else {
    breakTime = Math.max(1, breakTime + amount);
    if (mode === 'break') timeLeft = breakTime;
  }
  updateDisplay();
};

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
