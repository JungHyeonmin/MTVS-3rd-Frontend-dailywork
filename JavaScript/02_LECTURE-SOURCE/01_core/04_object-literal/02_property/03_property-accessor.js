/* 03_property-accessor(프로퍼티 접근) */

var dog = {
    name: '뽀삐',
    eat: function (food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
    }
}

// 마침표 표기법(dot notation)
console.log(dog.name);
dog.eat('고구마');

// 대괄호 표기법(square bracket notation) - 프로퍼티 키는 반드시 따옴표로 감싼 문자열 사용한다.
// console.log(dog[name]);  // ReferenceError: name is not defined
console.log(dog['name']);
dog['eat']('고구마');

var obj = {
    'dash-key': 'dash-value',
    0: 1
};

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시 대괄호 표기법 사용한다.
// console.log(obj.dash-key);
// console.log(obj.'dash-key');
// console.log(obj[dash-key]);
console.log(obj['dash-key']);

// console.log(obj.0);
// console.log(obj.'0');
// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다. - 특수기호, 공백문자, 숫자는 대괄호 사용
console.log(obj[0]);
console.log(obj['0']);


var dog = {
    name: '뽀삐',
    eat: function (food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
    }
}

console.log(dog.name);
dog.eat('보쌈');

console.log(dog["name"]);
dog['eat']('갈비찜');

var obj = {
    'dash-key' : 'dash-key',
    0: 1
};

console.log(obj['dash-key']);
console.log(obj['0']);