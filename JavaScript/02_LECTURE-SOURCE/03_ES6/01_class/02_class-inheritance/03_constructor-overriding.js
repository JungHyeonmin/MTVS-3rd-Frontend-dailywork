// 03. constructor overriding (생성자 오버라이딩)
/* 클래스가 다른 클래스를 상속 받고 constructor가 없는 경우에는 비어있는 constructor가 만들어진다.
class Tiger extends Animal {
  constructor(...args) {
    super(...args);
  }
} 
생성자는 기본적으로 부모 constructor를 호출한다.
이때 부모 constructor에도 인수를 모두 전달하는데 클래스에 자체 생성자가 없는 경우엔 이런 일이 모두 자동으로 일어난다.
*/

// Animal 클래스 선언
class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight) {
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    move(lostWeight) {
        if (this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`)
    }

}
class Deer extends Animal {

    constructor(name, weight, legLength) {
        // this.name = name;
        // this.weight = weight;
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        // 상속 클래스의 생성자에선 반드시 super(...)를 호출해야 하는데, super(...)를 호출하지 않아 에러가 발생한다.
        // super(...)는 this를 사용하기 전에 반드시 호출해야한다.
        super(name, weight);
        this.legLength = legLength;
    }

    hide(place) {
        console.log(`${this.name}(은)는 ${place}에 숨습니다.`);
    }
}

let deer = new Deer('슬픈 눈망울의 사슴', 40, 1);
deer.hide('동굴 안');

/*
자바스크립트는 '상속 클래스의 생성자 함수(derived constructor)'와 그렇지 않은 생성자 함수를 구분한다.
상속 클래스의 생성자 함수엔 특수 내부 프로퍼티인 [[ConstructorKind]]:"derived"가 붙는다.
일반 클래스는 new와 함께 실행되면 빈 객체가 만들어지고 this에 이 객체를 할당하지만,
상속 클래스의 생성자 함수가 실행되면 빈 객체를 만들고 this에 이 객체를 할당하는 일을 부모 클래스의 생성자가 처리해주길 기대한다.
이런 차이 때문에 상속 클래스의 생성자에선 super를 호출해 부모 생성자를 실행해 주어야 하고 그렇지 않으면 this가 될 객체가 만들어지지 않아 에러가 발생하는 것이다.
*/
