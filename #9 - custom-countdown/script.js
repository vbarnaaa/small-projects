const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownElBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');


let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActice;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Populate Countdown / UI

function updateDOM() {

    countdownActive = setInterval(() => {

    const now = new Date().getTime();
    const distance = countdownValue - now;
    
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    // Populate Countdown 
    countdownElTitle.textContent = `${countdownTitle}`
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    //Hide Input
    inputContainer.hidden = true;
    // Show Countdown
    countdownEl.hidden = false;
    }, second);
}

// Take Values from Form Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownDate, countdownTitle)
    // Get number version of current date
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
}

// Reset All Values
function reset() {
    // Hide Countdowns, show Input
    countdownEl.hidden = true;
    inputContainer.hidden = false;
    // Stop the countdown
    clearInterval(countdownActive);
    // Reset values
    countdownTitle = '';
    countdownDate = '';
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
countdownElBtn.addEventListener('click', reset)