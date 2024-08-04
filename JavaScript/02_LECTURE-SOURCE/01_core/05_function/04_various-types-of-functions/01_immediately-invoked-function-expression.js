/* 01_immediately-invoked-function-expression(즉시 실행 함수) 
함수 정의와 동시에 즉시 호출되는 함수로 단 한 번만 호출 되며 다시 호출할 수 없다. 
*/

// 함수 이름이 없는 익명 함수를 사용하는 것이 일반적이다.
(function() {
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출!');
})();

// 함수 이름을 작성할 수도 있지만 해당 이름으로 다시 호출할 수는 없다.
(function hello(name) {
    console.log('기명 즉시 실행 함수! 함수 정의와 동시에 호출!');
    console.log(`${name}님 안녕하세요!`);
})('홍길동');

// ReferenceError: hello is not defined
// hello('홍길동');

// 즉시 실행 함수는 반드시 () - 그룹 연산자 로 감싸야한다. 
// 즉시 실행 함수 내에 코드를 모아두면 혹시 있을수도 있는 변수나 함수의 이름 충돌을 방지할 수 있다. 


