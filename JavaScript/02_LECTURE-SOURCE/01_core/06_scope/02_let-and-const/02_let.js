/**
 * 02_let
 *
 * 6-2-2. let
 *
 * var 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let, const를 도입했다.
 */

// let 특징 1. 변수 중복 선언 금지
let msg = '안녕하세요';
// let이나 const 키워드로 선언 된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// let msg = '안녕히가세요';   

// let 특징 2. 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 블록(함수, if문, for문, while문, try/catch문)을 지역 스코프로 인정한다.
let i = 0;
for (let i = 0; i < 10; i++) {
    console.log(`지역 변수 i : ${i}`)
}
console.log(`전역 변수 i : ${i}`);

// let 특징 3. 변수 호이스팅
// let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
// var 키워드는 선언 단계와 초기화 단계가 함께 진행되지만 let 키워드는 선언 단계와 초기화 단계가 분리되어 진행된다.
// 따라서 선언은 되었지만 초기화가 되지 않아 참조 시 오류가 발생한다.
// console.log(x);   // ReferenceError: Cannot access 'x' before initialization
let x;

// 하지만 변수 호이스팅이 발생하지 않는 것은 아니다.
let y = 1;
if (true) {
    // 변수 호이스팅으로 아래의 지역변수 y 선언이 먼저 일어났기 때문에 전역 변수 y를 참조하지 않고 오류가 발생한다.
    // console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 2;
}

console.log();

let msg1 = '하이루!';
// let msg1 = '하이요~'; // 중복 변수 에러

let a = 0;
for (let a = 0; a < 10; a++) {
    console.log(`지역변수 a : ${a}`);
}
console.log(`전역 변수 a : ${a}`);

let q; // 초기화하지 않으면 위로 끌어올릴 수 없음