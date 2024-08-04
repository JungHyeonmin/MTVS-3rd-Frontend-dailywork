/* 02_class-inheritance(클래스 상속)
클래스 상속을 사용하면 클래스를 다른 클래스로 확장할 수 있다.
*/

// 01. inheritance-basic-syntax (상속 기본 문법) 

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

let animal = new Animal("동물", 30);

animal.eat(1);
animal.move(0.5);

// Animal을 상속 받는 Human 클래스 선언 - extends 키워드를 사용한다.
class Human extends Animal {

    develop(language) {
        console.log(`${this.name}(은)는 ${language}로 개발을 합니다. 정말 즐겁습니다^.^`);
    }

}

let human = new Human("수강생", 70);

// Animal에 정의 된 메서드 접근 가능 - 인간도 동물이므로 동물이 할 수 있는 일반적인 동작을 수행할 수 있다.
human.eat(2);
human.move(1);

// Human에 정의 된 메서드 접근 가능
human.develop("JavaScript");

/* 키워드 extends는 프로토타입을 기반으로 동작한다.
extends는 Human.prototype.[[Prototype]]을 Animal.prototype으로 설정한다.
그렇기 때문에 Human.prototype에서 메서드를 찾지 못하면 Animal.prototype에서 메서드를 가져온다. */
