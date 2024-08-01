/**
 * 2-3-2. convert to number(숫자 타입으로 변환)
 * console.log(10 - '5'); // 산술 연산자
 * console.log(10 > '5'); // 비교 연산자
 * console.log(+ ''); // +단항 연산자
 *
 * - 산술 연산자의 피연산자는 모두 숫자여야 하므로 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
 * - 비교 연산자로 크기를 비교하기 위해 모두 숫자 타입이여야 하므로 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
 * - +단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환한다.
 */

console.log(10 + '5'); // 15
console.log(10 - '5'); // 5
console.log(10 * '5'); // 50
console.log(10/'5');    // 2
console.log(10 % 'JavaScript'); // NaN

console.log(10 > '5'); // true
console.log(10 < '5'); // false
console.log(+'');       // 0
console.log(+'1');      // 1
console.log(+'JavaScript'); // NaN

console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN

// console.log(+Symbol());
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+function(){}); // NaN
