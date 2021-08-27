const daysEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYear = '1 jan 2022';

function countdown() {
    const newTime = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newTime - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);


    // console.log(days);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
// initial calling
countdown();
setInterval(countdown, 100);