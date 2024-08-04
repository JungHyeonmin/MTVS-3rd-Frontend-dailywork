// 01. iterable and array-like (이터러블과 유사 배열)
/* 이터러블(iterable) : 메서드 Symbol.iterator가 구현된 객체
유사 배열(array-like) : 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체
이터러블이면서 유사 배열일 수 있고 이터러블 객체라고 해서 유사 배열 객체는 아니며 유사 배열 객체라고 해서 이터러블 객체인 것도 아니다. => 별도의 개념
이터러블과 유사 배열은 배열 메서드를 사용할 수 없어 불편할 때가 있는데 Array.from을 이용해서 배열로 변경할 수 있다.
*/

let arrayLike = {
    0: "배열인듯",
    1: "배열아닌",
    2: "배열같은너",
    length: 3
};

// console.log(arrayLike.pop()); // 배열 메서드 사용 불가 - arrayLike.pop is not a function

//  Array.from()은 넘겨 받은 인수가 이터러블이나 유사 배열인 경우, 새로운 배열을 만들고 객체의 모든 요소를 새롭게 만든 배열로 복사한다.
let arr = Array.from(arrayLike); 
console.log(arr.pop());     // 배열 메서드 사용 가능 

// 01_iterable에서 복사
// 이터러블(iterable) 은 메서드 Symbol.iterator가 구현된 객체이다.
let range = {
    from: 1,
    to: 5
};

// Symbol.iterator를 추가한다.
// for..of 최초 호출 시, Symbol.iterator가 호출된다.
range[Symbol.iterator] = function () {

    // Symbol.iterator는 이터레이터 객체를 반환한다.
    return {
        current: this.from,
        last: this.to,

        // for..of 반복문에 의해 반복마다 next()가 호출된다.
        next() {
            // next()는 값을 객체 {done:.., value :...} 형태로 반환한다.
            // done은 반복이 끝났음을 의미하며 끝나지 않았을 경우 value가 다음 값이 된다.
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

let arr2 = Array.from(range);
console.log(arr2.pop());    // 배열 메서드 사용 가능 

// Array.from()에는 매핑(mapping) 함수를 선택적으로 넘겨줄 수 있다. 요소 추가 전 각 요소를 대상으로 매핑 함수를 적용해 반환된 값이 추가 된다.
let arr3 = Array.from(range, num => num * num);
console.log(arr3);

// => 이터러블은 데이터의 소비자(for...of, 스프레드 문법, 배열 디스트럭처링 할당 등)와 
// 공급자(Array, String, DOM 컬렉션)를 연결하는 인터페이스의 역할을 한다.