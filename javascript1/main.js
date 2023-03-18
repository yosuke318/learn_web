let displayElm = document.getElementsByClassName('display')[0];
let startButton = document.getElementsByClassName('startButton')[0];
let timer = null;


// document.querySelectorは、引数に与えたCSSセレクタに合致する画面上のHTMLタグ要素を一つ取得する.
let logElm = document.querySelector('.log')

function stopWatch(options) {


    function addMessage(message) {

        // document.createElementは、指定した名前のHTMLタグ要素を作成することができる関数(今回はdiv)
        let messageElm = document.createElement('div')

        // 開始という文字をタグ内に表示する。
        let now = new Date();
        messageElm.innerText = now.getHours() + '時' + now.getMinutes()
            + '分' + now.getSeconds() + '秒' + message

        messageElm.style.color = options.color

        // 取得したHTMLタグ要素の子としてmessageElm(作成したdivタグ)を描画する
        // logElm.appendChild(messageElm)

        //最新の子要素を先頭に追加する場合はprepend
        logElm.prepend(messageElm)

        startButton.disabled = true;
    }


    // 引数optionsでCSSの値を渡している
    options = options || {};
    let color = options.color || 'lightblue';
    let backgroundColor = options.backgroundColor || 'black';
    let displayElm = document.getElementsByClassName('display')[0];
    displayElm.style.color = color;
    displayElm.style.backgroundColor = backgroundColor

// addEventListenerはクリックなどのイベントが発生した時に発火する関数
    startButton.addEventListener('click', function () {
        // ボタンがクリックされて、timer変数がnullなら発火
        if (timer === null) {
            console.log('start');
            let seconds = 0;

            //https://developer.mozilla.org/ja/docs/Web/API/setInterval
            timer = setInterval(function () {
                seconds++;
                miliseconds = seconds * 0.1;
                miliseconds = parseFloat(miliseconds.toFixed(1));
                displayElm.innerText = miliseconds;
                console.log(miliseconds);
            }, 100);

            addMessage('開始')

        }
    });

    let stopButton = document.getElementsByClassName('stopButton')[0];
    stopButton.addEventListener('click', function () {
        // ボタンがクリックされて、timer変数がnullでないなら発火
        if (timer !== null) {
            clearInterval(timer);
            timer = null;

            addMessage('終了')
            startButton.disabled = false;
        }
    });
}

let options = {
    color: 'lightgreen',
    backgroundColor: '#333'
};

stopWatch(options)