let startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
    if (startBtn.innerHTML == 'Start') {
        startBtn.innerHTML = 'Stop';
        startBtn.classList.remove('start', 'start:hover')
        startBtn.classList.add('stop', 'stop:hover');
        startBtn.classList.toggle('stop');
        console.log(startBtn.classList.toggle('stop'));
    }
    else {
        startBtn.innerHTML = 'Start';
        startBtn.classList.remove('stop', 'stop:hover')
        startBtn.classList.add('start', 'start:hover');
        startBtn.classList.toggle('start');
        console.log(startBtn.classList.toggle('start'));
    }
});