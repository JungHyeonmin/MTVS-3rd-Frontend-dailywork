// 03. getter, setter 
class Product {

    constructor(name, price) {
        // setter를 활성화한다.
        this.name = name;
        this.price = price;
    }

    /* 접근자 프로퍼티는 프로토타입의 프로퍼티가 된다.
    name, price로 외부 접근하고 _name, _price로 실제 값을 담는다.
    밑줄은 프로그래머들 사이에서 외부 접근이 불가능한 프로퍼티나 메서드를 나타낼 때 사용한다.
    */

    // getter 함수
    get name() {
        console.log('get name 동작');
        return this._name;
    }

    get price() {
        console.log('get price 동작');
        return this._price;
    }

    // setter 함수
    set name(value) {
        console.log('set name 동작');
        this._name = value;
    }

    set price(value) {
        console.log('set price 동작');
        if (value <= 0) {
            console.log("가격은 음수일 수 없습니다.");
            this._price = 0;
            return;
        }
        this._price = value;
    }

}

let phone = new Product('전화기', 23000);
console.log(phone.name + "," + phone.price);

let computer = new Product('컴퓨터', -1500000);
console.log(computer.name + "," + computer.price);