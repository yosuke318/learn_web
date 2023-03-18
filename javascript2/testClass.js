class TextDecorator {
    constructor(name) {
        console.log('コンストラクタが呼ばれました');
        this.name = name;
    }

    decorate(){
        console.log(`decorateが呼ばれました: ${this.name}`);
        return `${this.name} called by decorate`;
    }
}

const td = new TextDecorator('JS');

//コンストラクタの定義
console.log(td.name)

// decorateが呼ばれました
const str = td.decorate();

console.log(str)

