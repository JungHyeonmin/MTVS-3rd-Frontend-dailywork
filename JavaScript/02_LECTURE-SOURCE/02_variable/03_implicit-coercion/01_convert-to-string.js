/**
 * 2-3. implicit-coercion(암묵적 타입 변환)
 * 개발자가 의도적으로 값의타입을 변환하는 것을 명시적 타입 변환(explicit coercion) 이라고 하면 자바스크립트 엔진에 의해 암묵적으로 타입이
 * 자동으로 변환 되는 것을 암묵적 타입 변환(implicit coercion)이라고 한다. 명시적 타입 변환은 코드에서 드러나지만 암묵적 타입 변환은 드러나지
 * 않으므로 타입 변환 된 결과를 에측할 수 있어야 오류를 방지할 수 있다.
 *
 * 2-3-1. convert to string(문자열 타입으로 변환)
 * console.log(10 + '20');
 * - 문자열 연결 연산자(+)는 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적으로 변환한다.
 */

console.log(10 + '20'); // 1020

console.log(`10 + 20 : ${10 + 20}`); // 10 + 20 : 30

console.log(typeof (1 + '')); // string
console.log(NaN + ''); // NaN
console.log(Infinity + ''); // Infinity
console.log(true + ''); // true
console.log(null + ''); // null
console.log(undefined + ''); // null
// console.log(Symbol() + ''); // 에러
console.log({} + ''); // [object Object] // 객체가 문자열 형태로 바꿈
console.log([] + ''); // 배열을 문자열로 바꿈
console.log(function () {} + ''); // function() {}