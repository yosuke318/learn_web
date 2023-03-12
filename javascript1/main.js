var displayElm = document.getElementsByClassName('display')[0];
var startButton = document.getElementsByClassName('startButton')[0];
var timer = null;

// addEventListenerはクリックなどのイベントが発生した時に発火する関数
startButton.addEventListener('click', function () {
    if (timer === null) {
        console.log('start');
        var seconds = 0;

        //https://developer.mozilla.org/ja/docs/Web/API/setInterval
        timer = setInterval(function () {
            seconds++;
            miliseconds = seconds * 0.1;
            miliseconds = parseFloat(miliseconds.toFixed(1));
            displayElm.innerText = miliseconds;
            console.log(miliseconds);
        }, 100);
    }
});

var stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function () {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
})