let minutesElement = document.querySelector(".minutes");
let secondsElement = document.querySelector(".seconds");
let millisecondsElement = document.querySelector(".milliseconds");
const start_button = document.querySelector(".start");
const reset_button = document.querySelector(".reset");
const continue_button = document.querySelector(".reset");
const pause_button = document.querySelector(".reset");

let interval;
let minutes = "0"+ 0;
let seconds = "0" + 0;
let milliseconds = 0;

start_button.addEventListener('click', start);

function start() {
    interval = setInterval(() => {
        
        milliseconds += 10;

        if (milliseconds === 1000) {
            seconds++;
            if (seconds < 10) seconds = "0" + seconds;
            milliseconds = 0;
        }
        if (seconds === 60) {
            minutes++;
            if (minutes < 10) minutes = "0" + minutes;
            seconds = "0" + 0;
        }

        millisecondsElement.textContent = milliseconds;
        secondsElement.textContent = seconds;
        minutesElement.textContent = minutes;

    }, 10);
}