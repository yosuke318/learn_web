var displayElm = document.getElementsByClassName('display')[0];
var startButton = document.getElementsByClassName('startButton')[0];
var timer = null;

// addEventListenerはクリックなどのイベントが発生した時に発火する関数
startButton.addEventListener('click', function () {
    // ボタンがクリックされて、timer変数がnullなら発火
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

        var message = '開始';

        // document.createElementは、指定した名前のHTMLタグ要素を作成することができる関数(今回はdiv)
        var messageElm = document.createElement('div')

        // 開始という文字をタグ内に表示する。
        messageElm.innerText = message

        // document.querySelectorは、引数に与えたCSSセレクタに合致する画面上のHTMLタグ要素を一つ取得する.
        var logElm = document.querySelector('.log');

        // 取得したHTMLタグ要素の子としてmessageElm(作成したdivタグ)を描画する
        logElm.appendChild(messageElm);
    }
});

var stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function () {
    // ボタンがクリックされて、timer変数がnullでないなら発火
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
})