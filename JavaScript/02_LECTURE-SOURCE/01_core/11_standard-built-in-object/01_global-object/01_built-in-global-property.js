/* global object */
/* 전역 객체(global object)는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체
어떤 객체에도 속하지 않은 최상위 객체
Node.js 환경에서는 global이 전역 객체, 브라우저 환경에서는 window가 전역 객체
전역 객체는 계층적 구조상 어떤 객체에도 속하지 않은 모든 빌트인 객체의 최상위 객체이다.
프로토타입 상속 관계의 최상위 객체라는 의미가 아니며 전역 객체 자신은 어떤 객체의 프로퍼티도 아니며 객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는 것을 말한다.
*/

/* 빌트인 전역 프로퍼티 */

// Infinity : 무한대를 나타내는 숫자 값 
// 전역 프로퍼티는 global을 생략하고 참조 할 수 있다.
console.log(global.Infinity === Infinity);  // true
// 양의 무한대
console.log(10/0);                          // Infinity
// 음의 무한대
console.log(-10/0);                         // Infinity
console.log(typeof Infinity);               // number

// NaN : 숫자가 아님(Not a Number)을 나타내는 숫자 값
// Number.NaN 프로퍼티와 같다.
console.log(global.NaN);            // NaN
console.log(Number('abc'));         // NaN
console.log(10 * 'abcf');           // NaN
console.log(typeof NaN);            // number

// undefined : 원시 타입 undefined 
console.log(global.undefined);               // undefined
let nothing;
console.log(nothing);                        // undefined
console.log(typeof undefined);               // undefined
