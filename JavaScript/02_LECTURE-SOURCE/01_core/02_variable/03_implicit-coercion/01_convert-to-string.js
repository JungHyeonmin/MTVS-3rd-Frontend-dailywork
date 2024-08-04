/* 03_implicit-coercion(암묵적 타입 변환)
개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(explicit coercion)이라고 하며
자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환 되는 것을 암묵적 타입 변환(implicit coercion)이라고 한다.
명시적 타입 변환은 코드에서 드러나지만 암묵적 타입 변환은 드러나지 않으므로
타입 변환 된 결과를 예측할 수 있어야 오류를 방지할 수 있다.
*/

/* 01_convert-to-string (문자열 타입으로 변환) */

console.log('===== 문자열 타입으로 변환 ======');

// 문자열 연결 연산자로 동작 
// 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적으로 변환
console.log(10 + '20');

// 템플릿 리터럴 표현식 삽입은 표현식의 결과를 문자열 타입으로 암묵적으로 변환
console.log(`10 + 20 : ${10 + 20}`);

// 문자열 타입이 아닌 값을 문자열 타입으로 암묵적으로 변환하는 결과
console.log(1 + '');                // "1"
console.log(NaN + '');              // "NaN"
console.log(Infinity + '');         // "Infinity"
console.log(true + '');             // "true"
console.log(null + '');             // "null"
console.log(undefined + '');        // "undefined"
// console.log(Symbol() + '');      // Cannot convert a Symbol value to a string
console.log({} + '');               // 객체 - "[object Object]"
console.log([] + '');               // 배열 - ""
console.log(function(){} + '');     // 함수 - "function(){}"

