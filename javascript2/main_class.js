class StopWatch{
    constructor(options = {}){
        this.options = options;
    }

    init(){
        let {color, backgroundColor} = this.options;

        color = color || 'lightblue';
        backgroundColor = backgroundColor || 'black';

        const display = document.getElementsByClassName('display')[0]

        display.style.color = color;
        display.style.backgroundColor = backgroundColor;

        this.logElm = document.querySelector('.log');

        let timer = null;
        const startButton = document.getElementsByClassName('startButton')[0]
        startButton.addEventListener('click', () => {
            if (timer ===null) {
                let seconds = 0;
                display.innerText = seconds;

                timer = setInterval(()=>{
                    seconds++
                    display.innerText = seconds;
                }, 1000);

                this.addMessage('開始')
            }
        });

        addMessage(message){
            const messageElm = document.createElement('div');
            const now = new Date();
            messageElm.innerText = `${now.getHours()}時`;
        };
    }
}