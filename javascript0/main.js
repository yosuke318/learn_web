console.log('ファイル読み込みのテストです');
var element = document.getElementById('innerTest')
element.innerHTML = '<strong>JavaScriptで書きました</strong>'

var buttonElm = document.getElementById('testButton');
buttonElm.addEventListener('click', function () {

  var numberElm = document.getElementById('number')
  var val = numberElm.value;
  var num = parseInt(val);
  if (num % 2 == 0) {
    alert('偶数です');
  } else {
    alert('偶数ではない')
  }
});

var fruits = ["apple", "peach", "orange"]
var fruitsStr = '';
for(var i = 0; i< fruits.length; i++) {
  fruitsStr += '<li class="fruit">' + fruits[i] + '</li>';
}

var arrayElm = document.getElementById('arrayTest');
arrayElm.innerHTML = fruitsStr;

// id属性と違いclass属性は画面に複数配置することができるため、class属性の名前を条件に指定すると複数の要素が取れる可能性があります。
var fruitElms = document.getElementsByClassName('fruit');
for(var i = 0; i < fruitElms.length; i++){
  var fruitElm = fruitElms[i];
  console.log(fruitElm.textContent);
}

// 要素のみを取り出すこともできるべ
var fruitElms = document.getElementsByClassName('fruit')[0];
console.log(fruitElms.innerHTML)