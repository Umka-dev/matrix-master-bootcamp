// Assignment - Pomodoro Clock
// Your assignment is to build a Pomodoro Clock, first of all, what is a Pomodoro Clock? Check this Wikipedia page for a nice description. (You may need to work in a team of two in order to make this assignment)
// Points of interest:
// Objective: Build an app that is functionally similar to this.
// Fulfill the USER STORIES below. Use whichever libraries or APIs you need. Give it your own personal style.
// User Story: I can start a 25-minute Pomodoro, and the timer will go off once 25 minutes have elapsed.
// User Story: I can reset the clock for my next Pomodoro.
// User Story: I can customize the length of each Pomodoro.

let sessionTime = parseInt(
  document.getElementById('session-time').textContent,
  10
);
let breakTime = parseInt(document.getElementById('break-time').textContent, 10);

let isSession = true;
let timeLeft = sessionTime;
let timer;
let isRunning = false;

const updateDisplay = (time, elementId) => {
  document.getElementById(elementId).textContent = time;
};

const switchSession = () => {
  isSession = !isSession;
  timeLeft = isSession ? sessionTime : breakTime;
  let displayId = isSession ? 'session-time' : 'break-time';
  updateDisplay(timeLeft, displayId);
};

const startTimer = () => {
  if (isRunning) return;
  isRunning = true;

  let displayId = isSession ? 'session-time' : 'break-time';
  updateDisplay(timeLeft, displayId);

  timer = setInterval(() => {
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      isRunning = false;
      switchSession();
      startTimer();
    } else {
      updateDisplay(timeLeft, displayId);
    }
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(timer);
  isRunning = false;
};

const resetTimer = () => {
  clearInterval(timer);
  isRunning = false;
  isSession = true;
  timeLeft = sessionTime;
  updateDisplay(sessionTime, 'session-time');
  updateDisplay(breakTime, 'break-time');
};

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
