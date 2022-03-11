let startBtn = document.getElementById('start');

// Toggle CSS Classes for Start button to Stop and vice-versa
startBtn.addEventListener('click', () => {
    if (startBtn.innerHTML == 'Start') {
        start();
        startBtn.innerHTML = 'Stop';
        startBtn.classList.remove('start', 'start:hover')
        startBtn.classList.add('stop', 'stop:hover');
        startBtn.classList.toggle('stop stop:hover');
    }
    else {
        stop();
        startBtn.innerHTML = 'Start';
        startBtn.classList.remove('stop', 'stop:hover')
        startBtn.classList.add('start', 'start:hover');
        startBtn.classList.toggle('start start:hover');
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
let onLapBtnClickedFirstTime = 0;
let content = '';
let lapBtn = document.getElementById('lap');
let expand = document.getElementById("populate");
let lapCounter = 0;
lapBtn.addEventListener('click', () => {
    let lapHr, lapMin, lapSec, lapMSec;
    lapHr = h < 10 ? (' 0' + h) : (' ' + h);
    lapMin = m < 10 ? (' 0' + m) : (' ' + m);
    lapSec = s < 10 ? (' 0' + s) : (' ' + s);
    lapMSec = ms < 100 ? (' 0' + ms) : (' ' + ms);
    if (content.length == 0)
        expand.innerHTML = 'No Laps Recorded';
    populate(lapHr, lapMin, lapSec, lapMSec);
    if (content.length == 0) {
        expand.innerHTML = 'No Laps Recorded';
    }
    if (onLapBtnClickedFirstTime == 0) {
        let btn = document.createElement('button');
        btn.type = "button";
        btn.id = "resetlapbtn";
        btn.innerHTML = "Reset Laps";
        document.body.appendChild(btn);
        onLapBtnClickedFirstTime = 1;
        let btnId = document.getElementById(btn.id);
        btnId.addEventListener('click', () => {
            content = '';
            lapCounter = 0;
            expand.innerHTML = content;
        })
    }
});

let populate = (lapHr, lapMin, lapSec, lapMSec) => {
    content += `        <hr style="background-color: grey;border-radius: 2px;border-color: grey;">
                        <div class="laprow">
                            <p id="lapcount">${'Lap ' + ++lapCounter}</p>
                            <p id="laptime">${lapHr}:${lapMin}:${lapSec}:${lapMSec}</p>
                         </div>`;
    expand.innerHTML = content;
};