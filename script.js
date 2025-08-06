let timerdisplay = document.querySelector('.timerdisplay');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 00;
let sec = 00;
let min = 00;
let hrs = 00;

let timerid = null;

startbtn.addEventListener('click', function () {
    if (timerid != null) {
        clearInterval(timerid);
    }
    timerid = setInterval(startimer, 10);
});

stopbtn.addEventListener('click', function () {
    clearInterval(timerid);
});

resetbtn.addEventListener('click', function (){
    clearInterval(timerid);
    timerdisplay.innerHTML = `00 : 00 : 00 : 00`;
    msec = sec = min = hrs = 00;
});

function startimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hrs++;
            }
        }
    }

    let msecstring;
    if (msec < 10) {
        msecstring = `0${msec}`;
    }
    else {
        msecstring = msec;
    }

    let sectring;
    if (sec < 10) {
        sectring = `0${sec}`;
    }
    else {
        sectring = sec;
    }

    let minstring;
    if (min < 10) {
        minstring = `0${min}`;
    }
    else {
        minstring = min;
    }

    let hrstring;
    if (hrs < 10) {
        hrstring = `0${hrs}`;
    }
    else {
        hrstring = hrs;
    }

    timerdisplay.innerHTML = `${hrstring} : ${minstring} : ${sectring} : ${msecstring}`;
}