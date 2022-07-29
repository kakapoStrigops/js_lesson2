// // 変数の書き方

// let hello = 'Hello World';
// alert(hello)

// // let int1 = 1;

// // let int2 = -10;

// // let float1 = 3.14;

// // let str1 = 'JavaScriptを覚えよう';


// // 四則演算
// alert(4 + 3);

// alert(8 - 5);

// alert(2 * 6);

// alert(10 / 2);

// // 文字列の結合
// alert('Hello' + 'World');

// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);


// // 条件分岐
// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple) {
//   alert("みかんとりんごが同じ値段")
// } else {
//   alert('みかんの値段がりんごより高い')
// }


// // 繰り返し処理
// // while文
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count +1;
// }

// alert('2を掛け続けて'+ max + 'を越えるのに必要だった回数は' + count + '回です')

// // do...while文
// let max = 100;
// let num = 1;
// let count = 0;

// do {
//   num = num * 2;
//   count = count +1;
// } while(num < max)

// alert('2を掛け続けて'+ max + 'を越えるのに必要だった回数は' + count + '回です(初期値が100以下の場合に限る)')


// // for文
// let i;
// let num = 0;

// for(i = 1; i < 11 ; i++) {
//   num = num +i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');


// 確認問題（四則演算の式と結果をアラートウィンドウに表示）
let num1 = 3
let num2 = 5

alert(num1 + '+' + num2 + '=' + (num1 + num2) );
alert(num1 + '-' + num2 + '=' + (num1 - num2) );
alert(num1 + '️x' + num2 + '=' + (num1 * num2) );
alert(num1 + '/' + num2 + '=' + (num1 / num2) );

