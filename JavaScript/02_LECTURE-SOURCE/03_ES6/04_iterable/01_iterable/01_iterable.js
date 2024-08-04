/* 01_iterable (이터러블)
ES6 이전의 순회 가능한 데이터 컬렉션, 배열, 문자열, 유사 배열 객체, DOM 컬렉션 등은 통일 된 규약 없이 for문, for...in문, forEach 메서드 등 다양한 방법으로 순회 할 수 있었다.
ES6에서는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for...of문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다.
*/

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

// 객체 선언 후 for..of 반복문을 호출하면 range is not iterable 이라는 오류가 발생한다.
// Symbol.iterator를 추가한 뒤 1~5까지의 숫자가 출력 된다.
for (let num of range) {
    console.log(num);
}


