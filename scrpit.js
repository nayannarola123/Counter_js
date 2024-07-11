let day = document.getElementById("day")
let hr = document.getElementById("hr")
let min = document.getElementById("minutes")
let sec = document.getElementById("seconds")


let days = 1;
let hours = 3;
let minutes = 3;
let seconds = 32;

const timer = () => {

    setInterval(() => {
        if (hours <= 0) {
            days--;
            hours = 24;
            if (days < 10) {
                day.innerHTML = "0" + days;
            } else {
                day.innerHTML = days;
            }
        }
        if (minutes <= 0) {
            hours--;
            minutes = 60;
            if (hours < 10) {
                hr.innerHTML = "0" + hours;
            } else {
                hr.innerHTML = hours;
            }
        }
        if (seconds <= 0) {
            minutes--;
            seconds = 60;
            if (minutes < 10) {
                min.innerHTML = "0" + minutes;
            } else {
                min.innerHTML = minutes;
            }
        }
        seconds--;
        if (seconds < 10) {
            sec.innerHTML = "0" + seconds;
        } else {
            sec.innerHTML = seconds;
        }
    }, 1000)
}
timer()