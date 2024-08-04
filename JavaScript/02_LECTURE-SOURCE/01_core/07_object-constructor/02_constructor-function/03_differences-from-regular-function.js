/* 03_differences-from-regular-function(일반 함수와 차이점) */

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
}

/* 일반 함수와 생성자 함수의 특별한 형식적 차이는 없다. 
(첫 문자를 대문자로 기술하여 구별하려 노력한다.)
new 연산자와 함께 호출하면 생성자 함수로 동작하는 것이다. 
만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다. */
const student = Student('강감찬', 35);
// 일반 함수로서 호출 된 Student는 반환문이 없으므로 undefined를 반환한다.
console.log(student);
// 일반 함수로서 호출 된 Student 내의 this는 전역 객체를 가리킨다.
console.log(age);

/* 생성자 함수가 new 연산자 없이 호출 되는 것을 방지하기 위해 ES6에서는 new.target을 지원한다. 
new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
new 연산자 없이 일반 함수로 호출된 함수 내부의 new.target은 undefined이다.
*/
function Dog(name, age) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined이다.
    if(!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성 된 인스턴스를 반환한다.
        return new Dog(name, age);
    }
    this.name = name;
    this.age = age;
}

// new 연산자 없이 호출해도 new.target을 통해 생성자 함수로서 호출된다.
const dog = Dog('뽀삐', 3);
console.log(dog);

// 대부분의 빌트인 생성자 함수(Object, String, Number, Boolean, Date, RegExp, ...)는
// new 연산자와 함께 호출 되었는지를 확인한 후 적절한 값을 반환한다.
const obj = Object();   
console.log(obj);   // new 연산자 없이 잘 동작한다.

// String, Number, Boolean의 경우 new 연산자 없이 호출하면 객체 값이 아닌
// 문자열, 숫자, 불리언 값을 반환한다. 이를 통해 데이터 타입을 변환하는데 사용할 수 있다.
// 02_variable(변수) > 04_explicit-coercion(명시적 타입 변환) 참조
