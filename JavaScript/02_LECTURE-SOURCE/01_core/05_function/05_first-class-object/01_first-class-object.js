/** 일급 객체
 *
 * 5-5-1. first class object(일급객체)
 *
 * 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
 * 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
 * 3. 함수의 매개변수에 전달할 수 있다.
 * 4. 함수의 반환값으로 사용할 수 있다.
 *
 * 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미이다.
 * 객체는 값이므로 함수는 값과 동일하게 취급할 수 있다.
 * 변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문 등에서 사용할 수 있다.
 */

// 1. 무명의 리터럴로 생성할 수 있다. 
// 2. 변수에 저장할 수 있다.
var hello = function () {
    return '안녕하세요!';
};
// 2. 객체에 저장할 수 있다.
var obj = {hello};

// 3. 함수의 매개변수에 전달할 수 있다.
function repeat(func, count) {
    for (var i = 0; i < count; i++) {
        console.log(func());
    }
    // 4. 함수의 반환값으로 사용할 수 있다.
    return function () {
        console.log(`${count}번 반복 완료`);
    }
}

var returnFunc = repeat(obj.hello, 5);
returnFunc();


console.log();

var hi = function () {
    return 'hi~';
};

var obj = {hi}

function repeat(func, count) {
    for (var i = 0; i < count; i++) {
        console.log(func());
    }

    return function () {
        console.log(`${count}번 반복 완료입니다.`);
    };
}

var returnFunction = repeat(obj.hi, 5);
returnFunc();