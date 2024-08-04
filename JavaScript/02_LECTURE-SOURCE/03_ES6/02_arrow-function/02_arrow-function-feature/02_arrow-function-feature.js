/* 02_arrow-function-feature
화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화 되어있다. 일반 함수와의 차이점을 알아보자.
*/

// 1. 화살표 함수는 this를 가지지 않는다.
// 이러한 특징은 객체의 메서드 안에서 동일한 객체의 프로퍼티를 대상으로 순회하는데 사용할 수 있다.
let theater = {
    store: "건대점",
    titles: ["어벤져스", "겨울왕국", "스파이더맨", "라이온킹", "알라딘"],

    showMovieList() {
        this.titles.forEach(
            // 화살표 함수 본문에서 this에 접근하면 외부에서 값을 가져오므로 this.store는 thearter.store "건대점"을 의미한다.
            title => console.log(this.store + ': ' + title)
        );
    }

    // showMovieList() {
    //     this.titles.forEach(function(title) {
    //        // 화살표 함수가 아닌 일반 함수를 사용하면 this.store는 undefined이다.
    //       console.log(this.store + ': ' + title);
    //     });
    //   }
};

theater.showMovieList();

// 2. 화살표 함수는 new와 함께 호출 할 수 없다. 
// this가 없기 때문에 생성자 함수로 사용할 수 없다.
const arrowFunc = () => {};
// new arrowFunc();    // 에러 발생 : TypeError: arrowFunc is not a constructor
// 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
console.log(arrowFunc.hasOwnProperty('prototype')); // false


// 3. 화살표 함수는 super를 가지지 않는다.
class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    move(lostWeight) {
        if (this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`)
    }

}

class Tiger extends Animal {

    move(lostWeight) {
        // 화살표 함수는 super를 지원하지 않아 super를 외부 함수에서 가져오기 때문에 Animal의 move() 호출이 가능하다.
        setTimeout(() => super.move(lostWeight), 1000);
        // 일반 함수를 사용할 경우 에러가 발생한다 - SyntaxError: 'super' keyword unexpected here
        // setTimeout(function() { super.move(lostWeight) }, 1000);
        console.log('먹이를 찾아 산기슭을 어슬렁');
    }
}

let tiger = new Tiger("백두산 호랭이", 90);
tiger.move(1);


// 4. 화살표 함수는 arguments를 지원하지 않는다. 
(function(){
    // 화살표 함수는 본인의 arguments 3,4가 아닌 상위 스코프인 즉시 실행 함수의 arguments 1,2를 참조한다. 
    const arrowFunc = () => console.log(arguments);
    arrowFunc(3,4);
}(1,2));


/* 화살표 함수는 다른 함수의 인수로 전달 되어 콜백함수로 사용되는 경우가 많다. 
위와 같은 특징들은 콜백 함수 내부의 this가 외부 함수의 this와 다르기 때문에 발생하는 문제를 해결하기 위해 의도적으로 설계 된 것이라 할 수 있다. */
