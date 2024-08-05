/**
 * 5-1 function-declaration (함수 선언문)
 *
 * 5-1-1. function declaration (함수 선언문) - 1급객체, 값으로 취급할 수 있다.
 *
 * 함수 선언문에서는 함수의 이름을 생략할 수 없다.
 */

// 함수 선언문에서는 함수의 이름을 생략할 수 없다.
function hello(name) {
    return `${name}님 안녕하세요!`;
}

// 함수 호출
console.log(hello('홍길동'));

/* 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 식별자를 암묵적으로 생성하고,
거기에 함수 객체를 할당한다.
즉, 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다. 

var hello = function hello(name) {
    return `${name}님 안녕하세요!`;
}
console.log(hello('홍길동')); => 식별자 hello를 호출
*/


console.log()
/*
function hi(name) {

    return `${name}님 안녕하세요!`
}*/

/*console.log(hi('김갑수'));*/

var hi2 = function(name){
    return `${name}님 하이루~`;
}

console.log(hi2('김철수'));