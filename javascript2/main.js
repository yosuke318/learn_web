const startButton = document.getElementsByClassName('startButton')[0];
const stopButton = document.getElementsByClassName('stopButton')[0];
let timer = null;


// document.querySelectorは、引数に与えたCSSセレクタに合致する画面上のHTMLタグ要素を一つ取得する.
const logElm = document.querySelector('.log')

function stopWatch(options = {}) {
    //アロー関数を変数とすることも可能。thisの扱いで違う
     const addMessage = (message) => {
        // document.createElementは、指定した名前のHTMLタグ要素を作成することができる関数(今回はdiv)
        const messageElm = document.createElement('div')

        // 開始という文字をタグ内に表示する。
        let now = new Date();
        // テンプレートリテラル
        messageElm.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒${message}`

        messageElm.style.color = options.color

        // 取得したHTMLタグ要素の子としてmessageElm(作成したdivタグ)を描画する
        // logElm.appendChild(messageElm)

        //最新の子要素を先頭に追加する場合はprepend
        logElm.prepend(messageElm)
    }


    // 引数optionsでCSSの値を渡している
    let {Color, BackgroundColor} = options;
    let color = Color || 'lightblue';
    let backgroundColor = BackgroundColor || 'black';
    const displayElm = document.getElementsByClassName('display')[0];
    displayElm.style.color = color;
    displayElm.style.backgroundColor = backgroundColor


    // addEventListenerはクリックなどのイベントが発生した時に発火する関数
    startButton.addEventListener('click', () => {
        // ボタンがクリックされて、timer変数がnullなら発火
        if (timer === null) {
            console.log('start');
            let seconds = 0;

            //https://developer.mozilla.org/ja/docs/Web/API/setInterval
            timer = setInterval(function () {
                if (seconds === 1800) {
                    alert("ラーメンタイマー2")
                }
                seconds++;
                miliseconds = seconds * 0.1;
                miliseconds = parseFloat(miliseconds.toFixed(1));
                displayElm.innerText = miliseconds;
                console.log(miliseconds);
            }, 100);

            addMessage('開始')

            startButton.disabled = true;
            stopButton.disabled = false;

        }
    });

    stopButton.addEventListener('click',  () => {
        // ボタンがクリックされて、timer変数がnullでないなら発火
        if (timer !== null) {
            clearInterval(timer);
            timer = null;

            addMessage('終了')
            startButton.disabled = false;
            stopButton.disabled = true;
        }
    });
}

let options = {
    color: 'lightgreen',
    backgroundColor: '#333'
};

stopWatch(options)