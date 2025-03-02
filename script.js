// Variables
let daysNumber = document.querySelector(".jsDaysNumber");
let hoursNumber = document.querySelector(".jsHoursNumber");
let minutesNumber = document.querySelector(".jsMinutesNumber");
let secondsNumber = document.querySelector(".jsSecondsNumber");

// Website launch time in milliseconds
let futureTime = new Date(2025, 5, 19, 0).getTime();

// Function to append a 0 if time remaining is less than 10 for style and readability
function updateDate(number, variable) {
  if (number < 10) {
    variable.textContent = `0${number}`;
  } else {
    variable.textContent = number;
  }
}

let interval;
interval = setInterval(() => {
  // Current time in milliseconds
  let currentTime = Date.now();

  // Remaining milliseconds between events
  let remainingTime = futureTime - currentTime;

  // Calculates days/hours/minutes/seconds remaining in remainingTime
  let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Updates page
  updateDate(days, daysNumber);
  updateDate(hours, hoursNumber);
  updateDate(minutes, minutesNumber);
  updateDate(seconds, secondsNumber);

  if (remainingTime < 0) {
    clearInterval(interval);
    daysNumber.textContent = "00";
    hoursNumber.textContent = "00";
    minutesNumber.textContent = "00";
    secondsNumber.textContent = "00";
  }
}, 1000);
