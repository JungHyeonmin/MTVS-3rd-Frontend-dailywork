/* 01_parameter-and-argument(매개변수와 인수) */

// 함수 선언문
function hello(name) {

    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
    console.log(arguments); // 가변인자 함수 구현 시 유용하게 사용 된다.
    
    return `${name}님 안녕하세요!`;
}

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(name);

// 함수 호출
var result = hello('홍길동');
console.log(result);

// 함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다.
// 인수가 부족해서 할당되지 않은 매개변수의 값은 undefined이다.
result = hello();
console.log(result);

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
result = hello('홍길동', '유관순');
console.log(result);

function hi(name = '아무개') {  
    // 인수를 전달하지 않았을 경우, undefined를 전달하였을 경우 ES6에서 도입된 매개변수 기본값을 사용할 수 있다.
    
    // 적절한 인수가 전달 되었는지 확인하는 방법이 있다.
    // if(arguments.length !== 1 || typeof name !== 'string' || name.length === 0) {
    //     throw new TypeError('인수는 1개여야 하고 문자열 값이며 빈 문자열을 허용되지 않습니다.');
    // }
    return `${name} 안녕~`;
}

// TypeError 발생 확인
// result = hi('홍길동', '유관순');
// result = hi(1);
// result = hi('');

// 매개변수 기본값 활용
result = hi();
console.log(result);

/* 매개변수의 최대 개수에 대해 명시적인 제한은 없다.(물리적 한계는 있겠지만)
하지만 이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 하므로 
최대 3개 이상을 넘지 않는 것을 권장한다.
*/

