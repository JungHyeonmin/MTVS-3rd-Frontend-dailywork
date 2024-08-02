/* data-type은 값의 종류를 말하며 자바스크립트(ES6)는 7개의 데이터 타입을 제공한다. */

/* 01. 숫자 타입 
자바의 경우 정수와 실수를 구분해 int, long, float, double 등과 같은 다양한 숫자 타입을 제공한다. 
하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다. */

// 정수, 실수, 음수 모두 숫자 타입이다.
var integer = 10;
var double = 5.5;
var negative = -10;

// 숫자 타입은 모두 실수로 처리되므로 같다.
console.log(10 === 10.0);
// 실수끼리의 나누기이므로 소수점까지 처리된다.
console.log(10 / 4);

/*
숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
Infinity : 양의 무한대
-Infinity : 음의 무한대
NaN : 산술 연산 불가(not-a-number) 
*/

console.log(10 / 0);    // Infinity
console.log(10 / -0);   // -Infinity
console.log(1 * '문자열');  // NaN