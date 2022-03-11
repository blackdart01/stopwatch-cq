let startBtn = document.getElementById('start');

// Toggle CSS Classes for Start button to Stop and vice-versa
startBtn.addEventListener('click', () => {
    if (startBtn.innerHTML == 'Start') {
        startBtn.innerHTML = 'Stop';
        startBtn.classList.remove('start', 'start:hover')
        startBtn.classList.add('stop', 'stop:hover');
        startBtn.classList.toggle('stop');
        start();
    }
    else {
        startBtn.innerHTML = 'Start';
        startBtn.classList.remove('stop', 'stop:hover')
        startBtn.classList.add('start', 'start:hover');
        startBtn.classList.toggle('start');
        stop();
    }
});

// Generating time

let h = 0, m = 0, s = 0, ms = 0;
let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let msec = document.getElementById('msec');
calcTime = () => {
    if ((ms += 10) == 1000) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
    hr.innerHTML = h < 10 ? (' 0' + h) : (' ' + h);
    min.innerHTML = m < 10 ? (' 0' + m) : (' ' + m);
    sec.innerText = s < 10 ? (' 0' + s) : (' ' + s);
    msec.innerText = ms < 100 ? (' 0' + ms) : (' ' + ms);
}

// resetting time

resetTime = () => {
    clearInterval(timerId);
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    hr.innerHTML = '00';
    min.innerHTML = ' 00';
    sec.innerText = ' 00';
    msec.innerText = ' 000';
}

// timer function to start outputting or resetting

let timerId;
start = () => { timerId = setInterval(calcTime, 10) };
stop = () => { resetTime() };

// population lap container

let lapBtn = document.getElementById('lap');
lapBtn.addEventListener('click', () => {
    let lapHr, lapMin, lapSec, lapMSec;
    lapHr = h < 10 ? (' 0' + h) : (' ' + h);
    lapMin = m < 10 ? (' 0' + m) : (' ' + m);
    lapSec = s < 10 ? (' 0' + s) : (' ' + s);
    lapMSec = ms < 100 ? (' 00' + ms) : (' ' + ms);
    console.log(lapHr + ' ' + lapMin + ' ' + lapSec + ' ' + lapMSec);
})