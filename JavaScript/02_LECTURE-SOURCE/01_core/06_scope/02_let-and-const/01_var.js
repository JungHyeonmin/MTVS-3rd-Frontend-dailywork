/**
 * 01_var
 *
 * 6-2-1. var
 *
 * ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었는데
 * 이는 아래와 같은 몇 가지 문제를 야기한다.
 */

// 문제 1. 변수 중복 선언 허용
var msg = '안녕하세요';
console.log(msg);
// var 키워드로 선언 된 변수는 같은 스코프 내에서 중복 선언이 허용된다.
// 초기화 문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var msg = '안녕히가세요';
console.log(msg);
// 초기화문이 없는 변수 선언문은 무시된다.
var msg;
console.log(msg);

// 문제 2. 함수 레벨 스코프
// 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다.
var i = 0;
for (var i = 0; i < 10; i++) {
}
console.log(i); // 의도치 않게 값이 0에서 10으로 변경되었다.

// 문제 3. 변수 호이스팅 - 인터프리터가 코드를 실행하기 전에 함수, 변수, 클래스와 같은 선언문을 해당 범위의 맨 위로 끌어 올리느 것처럼 보이는 현상
// var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어올려진 것처럼 동작한다.
// 즉, 변수 선언문 이전에 참조할 수 있다.
// 실행 시 오류가 발생하지는 않지만 이는 프로그램의 흐름에 맞지 않고 가독성을 떨어트리며 오류를 만들 여지가 있다.
console.log(test);  // 변수는 이미 선언되었고 undefined로 초기화 되었다.
test = '반갑습니다';
console.log(test);
var test;   // 변수 선언은 런타임 이전에 암묵적으로 실행 된다.


console.log();

var msg1 = '하이루!';
console.log(msg1);

var msg1 = '잘가라~';
console.log(msg1);

var msg1;
console.log(msg1);

var a = 0;
for (var a = 0; a < 10; a++) {

}
console.log('a : ' + a);

console.log(test);
test = '방가방가링';

console.log(test);

var test;