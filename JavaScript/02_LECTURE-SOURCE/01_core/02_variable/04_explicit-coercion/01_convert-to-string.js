/**
 * 2-4. explicit coercion(명시적 타입 변환)
 *
 * 개발자의 듸도에 따라 값의 타입을 변환하는 것이다. 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean)를
 * new 연산자 없이 호출하는 방법, 빌트인 메서드를 사용하는 방법, 암묵적 타입 변환을 이용하는 방법이 있다.
 *
 * 2-4-1. convert to string(문자열 타입으로 변환)
 *
 * console.log(String(10)); // String 생성자 함수
 * console.log((10).toString()); // Object.prototype.toString 메서드
 * console.log(10 + '20'); // 문자열 연결 연산자
 * - String 생성자 함수를 new 연산자 없이 호출한다.
 * - Object.prototype.toString 메서드를 사용한다.
 * - 문자열 연결 연산자를 이용한다.
 *
 * /* 04_explicit-coercion(명시적 타입 변환)
 * 개발자의 의도에 따라 값의 타입을 변환하는 것이다.
 * 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean)를 new 연산자 없이 호출하는 방법,
 * 빌트인 메서드를 사용하는 방법, 암묵적 타입 변환을 이용하는 방법이 있다.
 * */

console.log('===== 문자열 타입으로 변환 ======');


console.log(typeof String(10)); // string
console.log(String(NaN)); // NaN
console.log(String(Infinity)); // Infinity
console.log(String(true)); // true
console.log(String(false)); // false

console.log(typeof (10).toString()); // string
console.log(typeof NaN.toString()); // string
console.log(typeof (Infinity).toString()); // string
console.log(typeof (true).toString()); // string